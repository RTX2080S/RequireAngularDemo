using Newtonsoft.Json.Linq;
using ProjectX.Services;
using ProjectX.Services.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ProjectX.Controllers
{
    public class VisitorNotesController : ApiController
    {
        public int Save(VisitorNote note)
        {
            var visitorNotes = new VisitorNoteDataService();
            note.IpAddress = HttpContext.Current.Request.UserHostAddress;
            note.UtcTime = DateTime.UtcNow;
            note.ServerTime = DateTime.Now;
            return visitorNotes.Save(note);
        }
    }
}
