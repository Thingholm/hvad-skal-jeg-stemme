import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { useQuestions } from "../../data/queryHooks/useQuestions";
import { motion, AnimatePresence } from "framer-motion";
import Radio from "./Radio";
import Button from "../../components/Button";
import ExpandQuestion from "./ExpandQuestion";
import getResults from "../../data/getResults";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useSessionStorage } from "../../hooks/useSessionStorage";

export type Answer = "against" | "neither" | "for" | "skip" | null;
export type QuestionAnswer = {
    billId: number
    answer: Answer
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 500 : -500,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            position: "absolute",
            x: direction < 0 ? 500 : -500,
            opacity: 0
        };
    }
};

export default function Test(){
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [selectedRadio, setSelectedRadio] = useState<Answer>(null);
    const [alert, setAlert] = useState<boolean>(false);
    const [getAnswers, setAnswers, removeAnswers] = useSessionStorage<QuestionAnswer[]>("answers")
    const answers: QuestionAnswer[] = getAnswers() ?? [];
    const [direction, setDirection] = useState(0);
    const questionsQuery = useQuestions();

    const questionIndexParam = searchParams.get("spm") ?? "0";
    const questionIndex = parseInt(questionIndexParam);

    const currentQuestion = questionsQuery.data?.[questionIndex - 1];
    
    useEffect(() => {
        if (questionIndex === 0){
            if (answers.length > 0) {
                setSearchParams("spm=" + (answers.length + 1));
                return;
            }
            setSearchParams("spm=1")
        }
    }, [questionIndex, setSearchParams])

    // #region Handlers

    const checkIfAnswered = (questionIndex: number) => {
        if (!answers[questionIndex - 1]) {
            setSelectedRadio(null);
            setAlert(false);
            return;
        }
        const answer = answers[questionIndex - 1];
        setSelectedRadio(answer.answer === "skip" ? null : answer.answer);
        setAlert(false);
    };
    
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(e.target.value as Answer);
    }

    const handleFinish = () => {
        if (!questionsQuery.isSuccess) return;

        localStorage.setItem("results", JSON.stringify(getResults(answers, questionsQuery.data)));
        localStorage.setItem("userAnswers", JSON.stringify(answers));

        removeAnswers();

        navigate("/resultat");
    }

    const handleNext = () => {
        if (!questionsQuery.isSuccess) return;

        if (selectedRadio == null) {
            setAlert(true);
            return;
        }

        answers.splice(questionIndex - 1, 1, {billId: currentQuestion?.id ?? 0, answer: selectedRadio});
        setAnswers(answers)

        if (questionIndex == questionsQuery.data?.length) {
            handleFinish();
            return;
        };

        setDirection(1);
        const newQuestionIndex = questionIndex + 1;
        setSearchParams("spm=" + newQuestionIndex);

        checkIfAnswered(newQuestionIndex);
    }

    const handlePrev = () => {
        if (questionIndex == 1) return;

        setDirection(-1);
        const newQuestionIndex = questionIndex - 1;
        setSearchParams("spm=" + newQuestionIndex);

        checkIfAnswered(newQuestionIndex);
    }

    const handleSkip = () => {
        if (!questionsQuery.isSuccess) return;

        answers.splice(questionIndex - 1, 1, {billId: currentQuestion?.id ?? 0, answer: "skip"})
        setAnswers(answers)

        if (questionIndex == questionsQuery.data?.length) {
            handleFinish();
            return;
        };
        
        setDirection(1);
        const newQuestionIndex = questionIndex + 1;
        setSearchParams("spm=" + newQuestionIndex);

        checkIfAnswered(newQuestionIndex);
    }

    // #endregion

    if (!questionsQuery.isSuccess || !currentQuestion){
        return(
            <div>Loader</div>
        )
    }

    return(
        <div className="flex justify-center items-center relative my-4 mx-16">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div 
                    key={questionIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative top-0 w-full shadow-xl bg-white py-8 rounded-lg flex-col justify-center items-center text-center"
                >
                    <p className="mb-3">{questionIndex} / {questionsQuery.data.length}</p>
                    <h1 className="text-xl font-bold text-red-700">{currentQuestion.question}</h1>
                    <ExpandQuestion question={currentQuestion} key={questionIndex}/>
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <Radio id="against" value="against" label="Imod" selected={selectedRadio} onChange={handleRadioChange}/>
                            <Radio id="neither" value="neither" label="Hverken eller" selected={selectedRadio} onChange={handleRadioChange}/>
                            <Radio id="for" value="for" label="For" selected={selectedRadio} onChange={handleRadioChange}/>
                        </div>
                    </div>
                    <Button type="text" onClick={handleSkip} className="my-4">Spring spørgsmål over</Button>
                    <div className="flex justify-center items-center">
                        {questionIndex > 1 && <Button type="text" onClick={handlePrev} className="mr-4">Tilbage</Button>}
                        <Button type="primary" onClick={handleNext}>{questionIndex == questionsQuery.data.length ? "Til resultat" : "Næste spørgsmål"}</Button>
                    </div>
                    <p className="my-4">
                        {alert && 
                            <motion.div 
                                animate={{ translateX: [0, 20, 0] }}
                                transition={{ duration: 0.2}}
                                className="flex justify-center"
                            >
                                <motion.p className="text-red-700 bg-red-100 px-4 py-1.5 rounded-md flex items-center w-fit">
                                    <IoAlertCircleOutline className="mr-2" size={20}/>
                                    <span>Besvar eller spring spørgsmålet over for at gå videre til næste</span>
                                </motion.p>
                            </motion.div>
                        }
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}