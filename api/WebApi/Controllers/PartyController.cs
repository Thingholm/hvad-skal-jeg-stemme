using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Dto;
using WebApi.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class PartyController : ControllerBase
{
    private readonly ILogger<PartyController> _logger;
    private readonly AppDbContext _db;

    public PartyController(ILogger<PartyController> logger, AppDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpGet(Name = "GetAllParties")]
    public async Task<ActionResult<List<PartyDto>>> Get()
    {
        List<Party> parties = await _db.Parties
            .Include(e => e.Votes)
                .ThenInclude(e => e.Bill)
            .ToListAsync();

        List<PartyDto> partyDto = parties.Select(party => party.ToPartyDto()).ToList();
        
        return Ok(partyDto);
    }
}