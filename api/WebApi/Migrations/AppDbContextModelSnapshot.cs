﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using WebApi.Data;

#nullable disable

namespace WebApi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("WebApi.Models.Bill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("AgainstExplanation")
                        .HasMaxLength(2500)
                        .HasColumnType("character varying(2500)")
                        .HasColumnName("against_explanation");

                    b.Property<string>("BillTag")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("character varying(10)")
                        .HasColumnName("bill_tag");

                    b.Property<string>("Description")
                        .HasMaxLength(2500)
                        .HasColumnType("character varying(2500)")
                        .HasColumnName("description");

                    b.Property<string>("ForExplanation")
                        .HasMaxLength(2500)
                        .HasColumnType("character varying(2500)")
                        .HasColumnName("for_explanation");

                    b.Property<string>("Link")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("character varying(200)")
                        .HasColumnName("link");

                    b.Property<string>("Question")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)")
                        .HasColumnName("question");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)")
                        .HasColumnName("title");

                    b.HasKey("Id")
                        .HasName("pk_bills");

                    b.ToTable("bills", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Party", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ColorHex")
                        .IsRequired()
                        .HasMaxLength(7)
                        .HasColumnType("character varying(7)")
                        .HasColumnName("color_hex");

                    b.Property<char>("Letter")
                        .HasColumnType("character(1)")
                        .HasColumnName("letter");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)")
                        .HasColumnName("name");

                    b.HasKey("Id")
                        .HasName("pk_parties");

                    b.ToTable("parties", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Vote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("BillId")
                        .HasColumnType("integer")
                        .HasColumnName("bill_id");

                    b.Property<int>("PartyId")
                        .HasColumnType("integer")
                        .HasColumnName("party_id");

                    b.HasKey("Id")
                        .HasName("pk_votes");

                    b.HasIndex("BillId")
                        .HasDatabaseName("ix_votes_bill_id");

                    b.HasIndex("PartyId")
                        .HasDatabaseName("ix_votes_party_id");

                    b.ToTable("votes", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Vote", b =>
                {
                    b.HasOne("WebApi.Models.Bill", "Bill")
                        .WithMany("Votes")
                        .HasForeignKey("BillId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_votes_bills_bill_id");

                    b.HasOne("WebApi.Models.Party", "Party")
                        .WithMany("Votes")
                        .HasForeignKey("PartyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_votes_parties_party_id");

                    b.Navigation("Bill");

                    b.Navigation("Party");
                });

            modelBuilder.Entity("WebApi.Models.Bill", b =>
                {
                    b.Navigation("Votes");
                });

            modelBuilder.Entity("WebApi.Models.Party", b =>
                {
                    b.Navigation("Votes");
                });
#pragma warning restore 612, 618
        }
    }
}
