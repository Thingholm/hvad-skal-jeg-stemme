using System.ComponentModel.DataAnnotations;

namespace WebApi.Models 
{
    public class Bill
    {
        [Key]
        public int Id { get; set; }
        [StringLength(10)]
        public string BillTag { get; set; } = null!;
        [StringLength(100)]
        public string Title { get; set; } = null!;
        [StringLength(1000)]
        public string Question { get; set; } = null!;
        [StringLength(2500)]
        public string? Description { get; set; }
        [StringLength(2500)]
        public string? ForExplanation { get; set; }
        [StringLength(2500)]
        public string? AgainstExplanation { get; set; }
        [StringLength(2500)]
        public string Link { get; set; } = null!;

        public List<Vote> Votes { get; } = [];
    }
}