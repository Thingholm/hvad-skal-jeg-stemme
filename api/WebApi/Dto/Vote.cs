using WebApi.Models;

namespace WebApi.Dto;

public record PartyVoteDto
(
    int Id,
    BillDto? Bill,
    string VoteType
);

public record BillVoteDto
(
    int Id,
    PartyDto? Party,
    string VoteType
);

public static class VoteDtoExtensions
{
    public static PartyVoteDto ToPartyVoteDto(this Vote vote)
    {
        return new PartyVoteDto
        (
            vote.Id,
            vote.Bill.ToBillDto(false),
            vote.VoteType
        );
    }

    public static BillVoteDto ToBillVoteDto(this Vote vote)
    {
        return new BillVoteDto
        (
            vote.Id,
            vote.Party.ToPartyDto(false),
            vote.VoteType
        );
    }
}