using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Vote
    {
        [Key]
        public int Id { get; set; }
        public Bill? Bill { get; set; }
        public Party? Party { get; set; }
        public string VoteType { get; set; } = null!;
    }
}