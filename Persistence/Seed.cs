using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Name = "Desk 1",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 2",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 3",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 4",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 5",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 6",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 7",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 8",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 9",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 10",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 11",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 12",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 13",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 14",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 15",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 16",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 17",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 18",
                    BookingStatus = true,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 19",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                },
                new Activity
                {
                    Name = "Desk 20",
                    BookingStatus = false,
                    Favorite = false,
                    UserSelection = false,
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}