using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.DAL.DataContext;
using App.DAL.Entities;
using App.DAL.Interface;

namespace App.DAL.Repositoies
{
    public class LanguageRepository : ILanguageRepository
    {
        private LanguageEasilyContext dbContext;

        public LanguageRepository(LanguageEasilyContext languageEasilyContext)
        {
            dbContext = languageEasilyContext;
        }
        public List<Language> GetAllLanguages()
        {
            return dbContext.Languages.ToList();
        }
        //public Language GetLanguageById(int id)
        //{
        //    return (Language)dbContext.Language.Find(x => x.Id == id);
        //}
    }
}
