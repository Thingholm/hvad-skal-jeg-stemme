using WebApi.Models;

namespace WebApi.Dto;

public record PartyDto 
(
    int Id,
    string Name,
    char Letter,
    string ColorHex,
    List<PartyVoteDto> Votes
);

public static class PartyDtoExtensions 
{
    public static PartyDto ToPartyDto(this Party party)
    {
        return new PartyDto
        (
            party.Id,
            party.Name,
            party.Letter,
            party.ColorHex,
            party.Votes.Select(vote => vote.ToPartyVoteDto()).ToList()        
        );
    }
}