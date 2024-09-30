import React from 'react'
import './Home.css'
import Product  from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img  className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg' />
            
            <div className="home_row responsive-home">

                <Product
                    id="1"
                    product_info='Stock Investing Mastermind Beginners Handbook to Winning the Stock Market'
                    product_price={1490}
                    rating={4}
                    img= 'https://m.media-amazon.com/images/I/91LxdclLIWL._AC_UY218_.jpg'
                />
                 
                <Product 
                    id="2"
                    product_info='Fire-Boltt Asphalt Newly Launched Racing Edition Smart Watch 1.91” Full Touch Screen, Bluetooth Calling, Health Suite, 123 Sports Modes, 400 mAh Battery (Gun Metal Black)'
                    product_price={2499}
                    rating={4}
                    img= 'https://m.media-amazon.com/images/I/71RvZs6LY+L._AC_UL320_.jpg' 
                />    
            </div>
            

            <div className="home_row responsive-home">
               

                <Product 
                    id="3"
                    product_info= 'Redmi 12 5G Jade Black 6GB RAM 128GB ROM'
                    product_price= {12499} 
                    rating= {4} 
                    img ='https://m.media-amazon.com/images/I/71tCOhEigtL._SX522_.jpg'
                 />

                <Product
                    id="4"
                    product_info= 'Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound'
                    product_price={5499}
                    rating={4}
                    img= 'https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_UY218_.jpg'
                />

                <Product 
                    id="5"
                    product_info='Apple iPad Pro 12.9″ (6th Generation): with M2 chip'
                    product_price={111499}
                    rating={4}
                    img= 'https://m.media-amazon.com/images/I/81rxOSprYqL._AC_UY218_.jpg'
                />

            </div>
            

            <div className="home_row">
                <Product
                    id="6"
                    product_info= 'Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black)'
                    product_price={35990}
                    rating={4}
                    img ='https://m.media-amazon.com/images/I/81aKi8uAUsL._AC_UY218_.jpg'
                />
            </div>

        </div>
    </div>
  )
}

export default Home