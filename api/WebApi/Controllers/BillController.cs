using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Dto;
using WebApi.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BillController : ControllerBase
{
    private readonly ILogger<BillController> _logger;
    private readonly AppDbContext _db;

    public BillController(ILogger<BillController> logger, AppDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<List<BillDto>>> Get(bool includeVotes)
    {
        List<Bill> bills = includeVotes 
            ? await _db.Bills
                .Include(e => e.Votes)
                    .ThenInclude(e => e.Party)
                .ToListAsync()
            : await _db.Bills
                .ToListAsync();

        List<BillDto> billDto = bills.Select(bill => bill.ToBillDto(includeVotes)).ToList();

        return Ok(billDto);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BillDto>> Get(int id, bool includeVotes)
    {
        Bill? bill = includeVotes
            ? await _db.Bills
                .Include(e => e.Votes)
                    .ThenInclude(e => e.Party)
                .FirstOrDefaultAsync(e => e.Id == id)
            : await _db.Bills
                .FirstOrDefaultAsync(e => e.Id == id);

        if (bill == null)
            return NotFound();

        BillDto billDto = bill.ToBillDto(includeVotes);

        return Ok(billDto);
    }
}