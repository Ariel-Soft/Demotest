using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DemoTest.Repository.BusinessRepository;
using DemoTest.Repository.ViewModels;
using System.Threading.Tasks;
using DemoTest.DAL;

namespace DemoTest.API.Controllers
{
    [RoutePrefix("api/Product")]
   // [Authorize]
    public class ProductController : ApiController
    {

        #region Private Variables
        ProductRepository _productRepository = new ProductRepository();
        #endregion

        #region Constructor
        public ProductController()
        { }
        #endregion

        #region Create Method 
        /// <summary>
        /// This method is used for create product.
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>

        [HttpPost]
        [Route("CreateProduct")]
        public async Task<bool> CreateProduct(ProductModel productModel)
        {
            try
            {

                var result = await _productRepository.CreateProduct(productModel);
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
        /// This method is used for get products on the basis of vendor ID.
        /// </summary>
        /// <param name="vendorId"></param>
        /// <returns></returns>

        [HttpGet]
        [Route("GetProductByVendorId")]
        public async Task<List<Product>> GetProductByVendorId(string vendorId)
        {
            try
            {

                var result = await _productRepository.GetProductByVendorId(vendorId);
                return result;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        #endregion
    }
}
