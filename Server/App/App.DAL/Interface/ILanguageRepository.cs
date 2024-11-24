using App.DAL.Entities;

namespace App.DAL.Interface
{
    public interface ILanguageRepository
    {
        public List<Language> GetAllLanguages();
    

    }
}