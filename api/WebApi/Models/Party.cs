using System.ComponentModel.DataAnnotations;

namespace WebApi.Models 
{
    public class Party
    {
        [Key]
        public int Id { get; set; }
        [StringLength(100)]
        public string Name { get; set; } = null!;
        public char Letter { get; set; }
        [StringLength(7)]
        public string ColorHex { get; set; } = null!;

        public ICollection<Vote> Votes { get; } = new List<Vote>();
    }
}