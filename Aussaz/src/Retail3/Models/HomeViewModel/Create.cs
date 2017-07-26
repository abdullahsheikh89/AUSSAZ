using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Retail3.Models.ClientViewModel;

namespace Retail3.Models.HomeViewModel
{
    public class Create
    {
        
        public int OrderId { get; set; }
        public int Cost { get; set; }
        public int Sale { get; set; }
        public int ShipCost { get; set; }
        public int ShipCharged { get; set; }
        public bool PaymentStatus { get; set; }
        public DateTime ErDate { get; set; }
        public int Tracking { get; set; }

        public ICollection<Client> Clients { get; set; }
    }
}
