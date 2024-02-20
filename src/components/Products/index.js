import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
    
      <img
        src="https://img.freepik.com/free-vector/female-customer-choosing-food-products-shelves-supermarket_74855-20559.jpg?size=626&ext=jpg&ga=GA1.1.1668460300.1707530923&semt=ais"
        alt="products"
        className="products-img"
      />
      <img
      src="https://img.freepik.com/free-vector/mall-showcase-with-food-packaging_570502-23.jpg?size=626&ext=jpg&ga=GA1.1.1668460300.1707530923&semt=ais"
      alt="products"
      className='products-img' />
    </div>
   
  </>
)

export default Products
