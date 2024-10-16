import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { useQuestions } from "../../data/queryHooks/useQuestions";
import { motion, AnimatePresence, animate } from "framer-motion";
import Radio from "./Radio";
import Button from "../../components/Button";
import ExpandQuestion from "./ExpandQuestion";
import { div } from "framer-motion/client";
import getResults from "../../data/getResults";
import { IoAlertCircleOutline } from "react-icons/io5";

export type Answer = 0 | 1 | 2 | "skip" | null;

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
            x: direction < 0 ? 500 : -500,
            opacity: 0
        };
    }
};

export default function Test(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedRadio, setSelectedRadio] = useState<Answer>(null);
    const [alert, setAlert] = useState<boolean>(false);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [direction, setDirection] = useState(0);

    const questionsQuery = useQuestions();

    const questionIndexParam = searchParams.get("spm") ?? "0";
    const questionIndex = parseInt(questionIndexParam);
    
    useEffect(() => {
        if (questionIndex == 0){
            setSearchParams("spm=1")
        }
    }, [])

    const checkIfAnswered = (questionIndex: number) => {
        if (answers.length < questionIndex){
            setSelectedRadio(null);
            setAlert(false);
            return;
        }

        const answer = answers[questionIndex - 1];

        if (answer == 0 || answer == 1 || answer == 2) {
            setSelectedRadio(answer)
        } else if (answer == "skip"){
            setSelectedRadio(null);
        }

        setAlert(false);
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(parseInt(e.target.value) as Answer);
    }

    const handleFinish = () => {
        questionsQuery.isSuccess && getResults(answers, questionsQuery.data);
    }

    const handleNext = () => {
        if (selectedRadio == null) {
            // First set to false, so bounce always init
            setAlert(false);
            setAlert(true);
            return;
        }

        setAnswers(state => {
            state.splice(questionIndex - 1, 1, selectedRadio)
            return state;
        })

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
        setAnswers(state => {
            state.splice(questionIndex - 1, 1, "skip")
            return state;
        })

        if (questionIndex == questionsQuery.data?.length) return;

        setDirection(1);
        const newQuestionIndex = questionIndex + 1;
        setSearchParams("spm=" + newQuestionIndex);

        checkIfAnswered(newQuestionIndex);
    }

    if (!questionsQuery.isSuccess){
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
                    className="absolute top-0 w-full shadow-xl bg-white py-8 rounded-lg flex-col justify-center items-center text-center"
                >
                    <p className="mb-3">{questionIndex} / {questionsQuery.data.length}</p>
                    <h1 className="text-xl font-bold">{questionsQuery.data[questionIndex - 1].question}</h1>
                    <ExpandQuestion question={questionsQuery.data[questionIndex - 1]} key={questionIndex}/>
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <Radio id="against" value={0} label="Imod" selected={selectedRadio} onChange={handleRadioChange}/>
                            <Radio id="neither" value={1} label="Hverken eller" selected={selectedRadio} onChange={handleRadioChange}/>
                            <Radio id="for" value={2} label="For" selected={selectedRadio} onChange={handleRadioChange}/>
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