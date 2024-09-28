using WebApi.Models;

namespace WebApi.Dto;

public record PartyVoteDto
(
    int Id,
    BillDto? Bill,
    string VoteType
);

public static class VoteDtoExtensions
{
    public static PartyVoteDto ToPartyVoteDto(this Vote vote)
    {
        return new PartyVoteDto
        (
            vote.Id,
            vote.Bill.ToBillDto(),
            vote.VoteType
        );
    }
}