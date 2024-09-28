using WebApi.Models;

namespace WebApi.Dto;

public record BillDto
(
    int Id,
    string BillTag,
    string Title,
    string Question,
    string? Description,
    string? ForExplanation,
    string? AgainstExplanation,
    string Link,
    List<BillVoteDto> Votes
);

public static class BillDtoExtensions
{
    public static BillDto ToBillDto(this Bill bill, bool includeVotes)
    {
        return new BillDto
        (
            bill.Id,
            bill.BillTag,
            bill.Title,
            bill.Question,
            bill.Description,
            bill.ForExplanation,
            bill.AgainstExplanation,
            bill.Link,
            includeVotes ? bill.Votes.Select(vote => vote.ToBillVoteDto()).ToList() : new List<BillVoteDto>()
        );
    }
}