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
    string Link
);

public static class BillDtoExtensions
{
    public static BillDto ToBillDto(this Bill bill)
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
            bill.Link
        );
    }
}