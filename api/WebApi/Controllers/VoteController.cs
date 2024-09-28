using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Dto;
using WebApi.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoteController : ControllerBase
{
    private readonly ILogger<VoteController> _logger;
    private readonly AppDbContext _db;
    public VoteController(ILogger<VoteController> logger, AppDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<VoteDto>> Get()
    {
        List<Vote> votes = await _db.Votes
            .Include(e => e.Bill)
            .Include(e => e.Party)
            .ToListAsync(); 
        
        List<VoteDto> voteDtos = votes.Select(vote => vote.ToVoteDto()).ToList();

        return Ok(voteDtos);
    }

    [HttpGet("ByBill/{id}")]
    public async Task<ActionResult<List<VoteDto>>> GetVotesByBill(int id)
    {
        List<Vote> votes = await _db.Votes
            .Include(e => e.Bill)
            .Include(e => e.Party)
            .Where(e => e.Bill.Id == id)
            .ToListAsync();

        List<VoteDto> voteDtos = votes.Select(vote => vote.ToVoteDto()).ToList();

        return Ok(voteDtos);    
    }

    [HttpGet("ByParty/{id}")]
    public async Task<ActionResult<List<VoteDto>>> GetVotesByParty(int id)
    {
        List<Vote> votes = await _db.Votes
            .Include(e => e.Bill)
            .Include(e => e.Party)
            .Where(e => e.Party.Id == id)
            .ToListAsync();

        List<VoteDto> voteDtos = votes.Select(vote => vote.ToVoteDto()).ToList();

        return Ok(voteDtos);    
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<VoteDto>> Get(int id)
    {
        Vote? vote = await _db.Votes
            .Include(e => e.Bill)
            .Include(e => e.Party)
            .FirstOrDefaultAsync(e => e.Id == id);

        if (vote == null)
            return NotFound();

        VoteDto voteDto = vote.ToVoteDto();

        return Ok(voteDto);
    }
}