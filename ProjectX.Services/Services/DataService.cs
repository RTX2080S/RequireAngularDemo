
using ProjectX.Services.Data;

namespace ProjectX.Services
{
    public class DataService
    {
        protected DataModel db;

        public DataService()
        {
            db = new DataModel();
        }
    }
}
