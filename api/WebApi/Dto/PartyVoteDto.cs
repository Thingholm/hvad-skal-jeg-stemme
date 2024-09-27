using WebApi.Models;

namespace WebApi.Dto;

public record PartyVoteDto
{
    public int Id { get; set; }
    public BillDto? Bill { get; set; }
    public string VoteType { get; set; } = null!;
}

public static class VoteDtoExtensions
{
    public static PartyVoteDto ToPartyVoteDto(this Vote vote)
    {
        return new PartyVoteDto
        {
            Id = vote.Id,
            Bill = vote.Bill.ToBillDto(),
            VoteType = vote.VoteType
        };
    }
}