using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoTest.Repository.ViewModels
{
   public  class ProductModel
    {
        public string id { get; set; }
        public string productName { get; set; }
        public string description { get; set; }
        public Int32 price { get; set; }
        public string vendorId { get; set; }
        public string image { get; set; }
    }
}
