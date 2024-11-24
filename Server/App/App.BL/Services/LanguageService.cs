using App.BL.Mappers;
using App.BL.Interface;
using App.DAL.Entities;
using App.DAL.Interface;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Services
{
    public class LanguageService : ILanguageService
    {
        private ILanguageRepository languages;
        public LanguageService (ILanguageRepository languageRepository)
        {
            languages = languageRepository;
        }
        public List<LanguageDTO> GetAllLanguage()
        {
            List<Language> languageList = languages.GetAllLanguages();
            return languageList.Select(l => LanguageMappers.Map(l)).ToList();
        }

    }
}
