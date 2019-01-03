
namespace DemoTest.Repository.BusinessRepository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using DAL;
    using ViewModels;

    public class VendorRepository
    {
        #region Private Variables

        DemoTestEntities _demoTestEntites = new DemoTestEntities();
        #endregion

        #region Constructor
        public VendorRepository()
        {

        }
        #endregion

        #region Create Method
        /// <summary>
        /// This method is used for create vendor.
        /// </summary>
        /// <param name="vendorModel"></param>
        /// <returns></returns>

        public async Task<bool> CreateVendor(VendorModel vendorModel )
        {
            try
            {
                if (vendorModel != null)
                {
                    var id = Guid.NewGuid().ToString();
                    vendorModel.id = id;

                    Vendor vendorObj = new Vendor
                    {
                        Id = vendorModel.id,
                        FirtName=vendorModel.firstName,
                        LastName=vendorModel.lastname,
                        Email= vendorModel.email,
                        Address= vendorModel.address,
                        Mobile= vendorModel.mobile,
                       
                    };
                    _demoTestEntites.Vendors.Add(vendorObj);
                    _demoTestEntites.SaveChanges();

                    return true;
                }
                else
                {
                    return false;

                }


            }
            catch (Exception ex)
            {
                
                throw ex;
            }

        }

        #endregion

        #region Get Method
        /// <summary>
        ///  Returns all the vendors
        /// </summary>
        /// <returns></returns>
        public async Task<List<Vendor>> GetVendors()
        {
            try
            {
                var list = _demoTestEntites.Vendors.ToList();
                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        #endregion
    }
}
