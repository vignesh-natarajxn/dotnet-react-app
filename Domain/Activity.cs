namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }  
        public bool BookingStatus { get; set; }
        public bool Favorite { get; set; }    
        public bool UserSelection { get; set; }  

    }
}