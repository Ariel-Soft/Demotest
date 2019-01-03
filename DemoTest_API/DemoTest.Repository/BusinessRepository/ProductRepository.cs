
namespace DemoTest.Repository.BusinessRepository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using DAL;
    using ViewModels;

    public class ProductRepository
    {
        #region Private Variables

        DemoTestEntities _demoTestEntites = new DemoTestEntities();
        #endregion

        #region Constructor
        public ProductRepository()
        {

        }
        #endregion

        #region Create Method
        /// <summary>
        /// This method is used for create product.
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>

        public async Task<bool> CreateProduct(ProductModel productModel)
        {
            try
            {
                if (productModel != null)
                {
                    var id = Guid.NewGuid().ToString();
                    productModel.id = id;

                    Product productObj = new Product
                    {
                        Id = productModel.id,
                        Name= productModel.productName,
                        Description=productModel.description,
                        Price=Convert.ToInt32(productModel.price),
                        Image= productModel.image,
                        VendorId=productModel.vendorId
                    };
                    _demoTestEntites.Products.Add(productObj);
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
        ///  This method is used for get products on the basis of vendor ID.
        /// </summary>
        /// <param name="vendorId"></param>
        /// <returns></returns>

        public async Task<List<Product>> GetProductByVendorId(string vendorId)
        {
            try
            {

                var getList = _demoTestEntites.Products.Where(p => p.VendorId == vendorId).ToList();
                return getList;

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        #endregion
    }
}
