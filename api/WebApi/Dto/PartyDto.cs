using WebApi.Models;

namespace WebApi.Dto;

public record PartyDto 
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public char Letter { get; set; }
    public string ColorHex { get; set; } = null!;
    public List<PartyVoteDto> Votes { get; set; } = new List<PartyVoteDto>();
}

public static class PartyDtoExtensions 
{
    public static PartyDto ToPartyDto(this Party party)
    {
        return new PartyDto
        {
            Id = party.Id,
            Name = party.Name,
            Letter = party.Letter,
            ColorHex = party.ColorHex,
            Votes = party.Votes.Select(vote => vote.ToPartyVoteDto()).ToList()
        };
    }
}