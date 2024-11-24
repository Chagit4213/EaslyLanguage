using System;
using System.Collections.Generic;

namespace App.DAL.Entities;

public partial class Language
{
    public Guid Id { get; set; }

    public string Language1 { get; set; } = null!;

    public string TeacherName { get; set; } = null!;

    public int NumbersOfCourses { get; set; }

    public string Img { get; set; } = null!;

    public double Price { get; set; }
}
