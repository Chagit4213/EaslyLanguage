using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO.Models
{
    public class LanguageDTO
    {
        public Guid Id { get; set; }

        public string Language1 { get; set; } = null!;

        public string TeacherName { get; set; } = null!;

        public int NumbersOfCourses { get; set; }

        public string Img { get; set; } = null!;

        public double Price { get; set; }
    }
}
