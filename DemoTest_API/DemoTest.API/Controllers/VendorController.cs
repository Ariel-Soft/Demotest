
namespace DemoTest.API.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using DAL;
    using Repository.BusinessRepository;
    using Repository.ViewModels;
    using System.Threading.Tasks;

    [RoutePrefix("api/Vendor")]
  //  [Authorize]
    public class VendorController : ApiController
    {
        #region Private Variables
        VendorRepository _vendorRepository = new VendorRepository();
        #endregion

        #region Constructor
        public VendorController()
        { }
        #endregion


        #region Create Method 
        /// <summary>
        /// This method is used for create vendors.
        /// </summary>
        /// <param name="vendorModel"></param>
        /// <returns></returns>

        [HttpPost]
        [Route("CreateVendor")]
        public async Task<bool> CreateVendor(VendorModel vendorModel)
        {
            try
            {

                var result = await _vendorRepository.CreateVendor(vendorModel);
                return result;
            }
            catch (Exception ex)
            {
              
                throw ex;
            }
        }
        #endregion

        #region Get Method
        /// <summary>
        /// Get all Vendors
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet]
        [Route("GetVendors")]
        public async Task<List<Vendor>> GetVendors()
        {
            try
            {

                var vendors = await _vendorRepository.GetVendors();
                return vendors;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
