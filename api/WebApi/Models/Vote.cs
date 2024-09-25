using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Vote
    {
        [Key]
        public int Id { get; set; }
        public Bill Bill { get; set; } = null!;
        public Party Party { get; set; } = null!;
    }
}