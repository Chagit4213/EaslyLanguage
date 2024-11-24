using App.DAL.Entities;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Mappers
{
    internal static class LanguageMappers
    {
        internal static Language Map(LanguageDTO language)
        {
            return new Language
            {
                Language1 = language.Language1,
                TeacherName = language.TeacherName,
                NumbersOfCourses = language.NumbersOfCourses,
                Img = language.Img,
                Price = language.Price,
            };
        }

        internal static LanguageDTO Map(Language language)
        {
            return new LanguageDTO
            {
                Language1 = language.Language1,
                TeacherName = language.TeacherName,
                NumbersOfCourses = language.NumbersOfCourses,
                Img = language.Img,
                Price = language.Price,
            };
        }
    }
}
