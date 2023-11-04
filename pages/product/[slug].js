import React, { useState } from 'react'

import { client, urlFor } from '../../lib/client'
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({product, products}) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
    
        setShowCart(true);
      }
    
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[index])} className="product-detail-image" />
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                    <img 
                        key={i}
                        src={urlFor(item)}
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                    />
                    ))}
                </div>
            </div>

            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                    </svg>
                    </div>
                    <p>
                    (20)
                    </p>
                </div>
                <h4>Details: </h4>
                <p>{details}</p>
                <p className="price">${price}</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 12l14 0"></path>
</svg></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty} ><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 5l0 14"></path>
   <path d="M5 12l14 0"></path>
</svg></span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>


        </div>
        <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                    {products.map((item) => (
                        <Product key={item._id} product={item} />
                    ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails