using ProjectX.Services.Data;
using System;

namespace ProjectX.Services
{
    public class VisitorNoteDataService : DataService
    {
        public int Save(VisitorNote note)
        {
            try
            {
                db.VisitorNotes.Add(note);
                db.SaveChanges();

                return 0;
            }
            catch (Exception)
            {
                return 1;
            }
        }
    }
}
