import React from 'react';
import products from './products.json'
function Details() {
    var productstr = localStorage.getItem("item")
    var product = JSON.parse(productstr);
    return (
        
        
           
                    <div className='container ' >
                        <h5 className='p-2 bg-light m-2'>{product.category}</h5>
                        <img style={{"width":"30%"}} src={product.image} alt="" />
                        <h2 className='p-2 bg-light m-2'>{product.title}</h2>
                        <h4 className='p-2 bg-light m-2'>{product.description}</h4>
                        <h5 className='p-2 bg-light m-2'> Rated {product.rating.rate}/5 by {product.rating.count} customers</h5>
                    </div>
             
    );
}

export default Details;{}