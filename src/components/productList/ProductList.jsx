import React from 'react';
import Product from '../product/Product';
import './productList.css';
import { products } from '../../data'

const ProductList = () => {
  return (
   <div className="pl">
    <div className="pl-circle"></div>
    <div className="pl-texts">
        <h1 className="pl-title"> Build & Inspire. It's Eris</h1>
        <p className="pl-desc">
            Eris is a Modern and Creative portfolio that
             your work needs. Beautiful pages, stunning 
             portfolio and styles and a whole lot more
             awaits you.
        </p>
    </div>
    <div className="pl-list">
        {products.map((item) =>(
            <Product key={item.id} img={item.img} link={item.link}/>
        ))}
    </div>
   </div>
  )
}

export default ProductList