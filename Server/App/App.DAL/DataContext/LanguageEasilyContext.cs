using System;
using System.Collections.Generic;
using App.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace App.DAL.DataContext
{
    public partial class LanguageEasilyContext : DbContext
    {
        public LanguageEasilyContext(DbContextOptions<LanguageEasilyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Language> Languages { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Language>(entity =>
            {
                entity.ToTable("languages");

                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Img)
                    .HasMaxLength(50)
                    .HasColumnName("img");
                entity.Property(e => e.Language1)
                    .HasMaxLength(50)
                    .HasColumnName("language");
                entity.Property(e => e.NumbersOfCourses).HasColumnName("numbersOfCourses");
                entity.Property(e => e.Price).HasColumnName("price");
                entity.Property(e => e.TeacherName)
                    .HasMaxLength(50)
                    .HasColumnName("teacherName");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(e => e.OrderId); // Set OrderId as the primary key

                entity.Property(e => e.OrderId)
                    .IsRequired() // Ensure it's not nullable
                    .ValueGeneratedOnAdd(); // This will generate a new GUID if not provided

                entity.Property(e => e.PaymentStatus)
                    .HasMaxLength(10)
                    .IsFixedLength();
            });


            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");
                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .HasColumnName("firstName");
                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("lastName");
                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .HasColumnName("password");
                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
