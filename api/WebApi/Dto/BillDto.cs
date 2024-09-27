using WebApi.Models;

namespace WebApi.Dto;

public class BillDto
{
    public int Id { get; set; }
    public string BillTag { get; set; } = null!;
    public string Title { get; set; } = null!;
    public string Question { get; set; } = null!;
    public string? Description { get; set; }
    public string? ForExplanation { get; set; }
    public string? AgainstExplanation { get; set; }
    public string Link { get; set; } = null!;
}

public static class BillDtoExtensions
{
    public static BillDto ToBillDto(this Bill bill)
    {
        return new BillDto
        {
            Id = bill.Id,
            BillTag = bill.BillTag,
            Title = bill.Title,
            Question = bill.Question,
            Description = bill.Description,
            ForExplanation = bill.ForExplanation,
            AgainstExplanation = bill.AgainstExplanation,
            Link = bill.Link
        };
    }
}