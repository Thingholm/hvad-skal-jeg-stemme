using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Dto;
using WebApi.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PartyController : ControllerBase
{
    private readonly ILogger<PartyController> _logger;
    private readonly AppDbContext _db;

    public PartyController(ILogger<PartyController> logger, AppDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<List<PartyDto>>> Get(bool includeVotes)
    {
        List<Party> parties = includeVotes 
            ? await _db.Parties
                .Include(e => e.Votes)
                    .ThenInclude(e => e.Bill)
                .ToListAsync()
            : await _db.Parties
                .ToListAsync();

        List<PartyDto> partyDto = parties.Select(party => party.ToPartyDto(includeVotes)).ToList();

        return Ok(partyDto);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<PartyDto>> Get(int id, bool includeVotes)
    {
        Party? party = includeVotes
            ? await _db.Parties
                .Include(e => e.Votes)
                    .ThenInclude(e => e.Bill)
                .FirstOrDefaultAsync(e => e.Id == id)
            : await _db.Parties
                .FirstOrDefaultAsync(e => e.Id == id);

        if (party == null)
            return NotFound();

        PartyDto partyDto = party.ToPartyDto(includeVotes);

        return Ok(partyDto);
    }
}