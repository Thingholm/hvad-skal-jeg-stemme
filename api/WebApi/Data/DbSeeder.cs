using WebApi.Models;

namespace WebApi.Data;

public static class DbSeeder
{
    public static void SeedData(AppDbContext dbContext)
    {
        dbContext.Votes.RemoveRange(dbContext.Votes);
        dbContext.Bills.RemoveRange(dbContext.Bills);
        dbContext.Parties.RemoveRange(dbContext.Parties);

        dbContext.SaveChanges();

        List<Bill> bills = new List<Bill>
        {
            new Bill 
            { 
                Id = 1, 
                BillTag = "B 57", 
                Title = "Forslag til folketingsbeslutning om hjælp frem for straf til stofbrugere", 
                Question = "Skal stofbrugere have hjælp frem for straf, når de bliver taget med stoffer til eget brug?", 
                Description = "Spørgsmålet handler om, hvorvidt stofbrugere skal henvises til et fagligt udvalg for vurdering og støtte frem for at modtage en straf, når de bliver taget med stoffer til eget brug.", 
                ForExplanation = "Hjælp og støtte til stofbrugere kan reducere afhængighed og de sociale problemer forbundet med stofbrug. Det kan også føre til bedre sundhedsresultater og mindske belastningen på retssystemet.", 
                AgainstExplanation = "Straffrihed kan opfattes som en accept af stofbrug og kan potentielt øge forbruget. Det kan sende et forkert signal om, at det er uproblematisk at besidde ulovlige stoffer.", 
                Link = "https://www.ft.dk/samling/20222/beslutningsforslag/B57/index.htm" 
            },
            new Bill 
            { 
                Id = 2, 
                BillTag = "B 103", 
                Title = "Forslag til folketingsbeslutning om at udarbejde en mere fleksibel model for tilskud til pasning af eget barn med mulighed for supplerende indkomst", 
                Question = "Skal der udarbejdes en mere fleksibel model for tilskud til pasning af eget barn med mulighed for supplerende indkomst?", 
                Description = "Spørgsmålet handler om, hvorvidt regeringen skal udvikle en model, der tillader forældre at modtage tilskud til pasning af deres egne børn og samtidig have mulighed for supplerende indkomst.", 
                ForExplanation = "En mere fleksibel tilskudsmodel kan gøre det nemmere for forældre at balancere arbejde og familieliv, hvilket kan øge familiernes trivsel og økonomiske sikkerhed.", 
                AgainstExplanation = "En fleksibel tilskudsmodel kan være dyrere for staten og kan medføre administrative udfordringer i forhold til kontrol og udbetaling.", 
                Link = "https://www.ft.dk/samling/20222/beslutningsforslag/B103/index.htm" 
            },
            new Bill 
            { 
                Id = 3, 
                BillTag = "B 60", 
                Title = "Forslag til folketingsbeslutning om en ny karakterskala i uddannelsessystemet", 
                Question = "Skal der indføres en ny karakterskala i uddannelsessystemet?", 
                Description = "Spørgsmålet handler om, hvorvidt uddannelsessystemet skal indføre en ny karakterskala baseret på evalueringer og rapporter om den nuværende 7-trinsskala.", 
                ForExplanation = "En ny karakterskala kan forbedre vurderingen af elevernes og de studerendes præstationer og sikre en mere retfærdig og præcis bedømmelse.", 
                AgainstExplanation = "Indførelsen af en ny karakterskala kan skabe forvirring og kræve omfattende ændringer i uddannelsessystemet, hvilket kan være ressourcekrævende og tidskrævende.", 
                Link = "https://www.ft.dk/samling/20222/beslutningsforslag/B60/index.htm" 
            }
        };

        dbContext.Bills.AddRange(bills);

        List<Party> parties = new List<Party>
        {
            new Party { Id = 1, Name = "Socialdemokratiet", Letter = 'A', ColorHex = "#ab0f0f" },
            new Party { Id = 2, Name = "Venstre", Letter = 'V', ColorHex = "#00288F" },
            new Party { Id = 3, Name = "Danmarksdemokraterne", Letter = 'Æ', ColorHex = "#6f8bb0" },
            new Party { Id = 4, Name = "Socialistisk Folkeparti", Letter = 'F', ColorHex = "#ff85c2" },
            new Party { Id = 5, Name = "Liberal Alliance", Letter = 'I', ColorHex = "#1bc8e3" },
            new Party { Id = 6, Name = "Moderaterne", Letter = 'M', ColorHex = "#820099" },
            new Party { Id = 7, Name = "Det Konservative Folkeparti", Letter = 'C', ColorHex = "#81ba20" },
            new Party { Id = 8, Name = "Enhedslisten", Letter = 'Ø', ColorHex = "#db9e0f" },
            new Party { Id = 9, Name = "Radikale Venstre", Letter = 'B', ColorHex = "#860fdb" },
            new Party { Id = 10, Name = "Dansk Folkeparti", Letter = 'O', ColorHex = "#e3e31e" },
            new Party { Id = 11, Name = "Alternativet", Letter = 'Å', ColorHex = "#15700b" }
        };

        dbContext.Parties.AddRange(parties);

        List<Vote> votes = new List<Vote>
        {
            new Vote { Id = 1, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 1), VoteType = "against" },
            new Vote { Id = 2, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 2), VoteType = "against" },
            new Vote { Id = 3, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 3), VoteType = "against" },
            new Vote { Id = 4, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 4), VoteType = "for" },
            new Vote { Id = 5, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 5), VoteType = "for" },
            new Vote { Id = 6, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 6), VoteType = "against" },
            new Vote { Id = 7, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 7), VoteType = "against" },
            new Vote { Id = 8, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 8), VoteType = "for" },
            new Vote { Id = 9, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 9), VoteType = "for" },
            new Vote { Id = 10, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 10), VoteType = "against" },
            new Vote { Id = 11, Bill = bills.FirstOrDefault(bill => bill.Id == 1), Party = parties.FirstOrDefault(party => party.Id == 11), VoteType = "for" },

            new Vote { Id = 12, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 1), VoteType = "against" },
            new Vote { Id = 13, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 2), VoteType = "against" },
            new Vote { Id = 14, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 3), VoteType = "for" },
            new Vote { Id = 15, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 4), VoteType = "against" },
            new Vote { Id = 16, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 5), VoteType = "for" },
            new Vote { Id = 17, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 6), VoteType = "against" },
            new Vote { Id = 18, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 7), VoteType = "for" },
            new Vote { Id = 19, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 8), VoteType = "neither" },
            new Vote { Id = 20, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 9), VoteType = "for" },
            new Vote { Id = 21, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 10), VoteType = "for" },
            new Vote { Id = 22, Bill = bills.FirstOrDefault(bill => bill.Id == 2), Party = parties.FirstOrDefault(party => party.Id == 11), VoteType = "for" },

            new Vote { Id = 23, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 1), VoteType = "against" },
            new Vote { Id = 24, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 2), VoteType = "against" },
            new Vote { Id = 25, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 3), VoteType = "neither" },
            new Vote { Id = 26, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 4), VoteType = "for" },
            new Vote { Id = 27, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 5), VoteType = "for" },
            new Vote { Id = 28, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 6), VoteType = "against" },
            new Vote { Id = 29, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 7), VoteType = "for" },
            new Vote { Id = 30, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 8), VoteType = "for" },
            new Vote { Id = 31, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 9), VoteType = "for" },
            new Vote { Id = 32, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 10), VoteType = "for" },
            new Vote { Id = 33, Bill = bills.FirstOrDefault(bill => bill.Id == 3), Party = parties.FirstOrDefault(party => party.Id == 11), VoteType = "for" },
        };

        dbContext.Votes.AddRange(votes);

        dbContext.SaveChanges();
    }
}