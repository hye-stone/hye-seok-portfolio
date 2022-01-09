import Product from "../product/Product"
import "./productList.css"
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Portfolio</h1>
      </div>
      <div className="pl-list">
        <Product />
      </div>
    </div>
  )
}

export default ProductList
