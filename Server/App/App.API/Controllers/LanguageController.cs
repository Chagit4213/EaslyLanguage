using App.BL.Services;
using App.DTO.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using App.BL.Interface;


namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private ILanguageService _languageService;
        public LanguageController (ILanguageService languageService)
        {
            _languageService = languageService;
        }

        [HttpGet]
        public List<LanguageDTO> GetAllLanguages()
        {
            return _languageService.GetAllLanguage();
        }
    }
}
