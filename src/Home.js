import React from "react";
import "./Home.css";
import Product from "./Product";
//import CCarouselCaption from "@coreui/Home/carousel/CCarouselCaption";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hoeme">
      <Carousel
        className="home_container"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <Link to="/">
          <div className="home_image">
            <img
              className="home-image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71wob537DmL._SX3000_.jpg"
              alt="amazon Image"
            />
          </div>
        </Link>
        <Link to="/">
          <div>
            <img
              className="home-image"
              src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/Heros/DT/SP22_W5_GW_TallHero1_DT_2x_EN._CB617732430_.jpg"
              alt="amazon Image"
            />
          </div>
        </Link>
        <Link to="/">
          <div>
            <img
              className="home-image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Rt2pN8D2L._SX3000_.jpg"
              alt="amazon Image"
            />
          </div>
        </Link>
      </Carousel>

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="New Year deals:RENPHO Active Massage Gun Deep Tissue Muscle, 2022"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41fh21tvqRL._AC_SY460_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903851"
          title=" The New Year Sale"
          price={169.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W5_Home_GW_QuadCard_2x._SY232_CB619975662_.jpg"
        />
        <Product
          id="23445931"
          title="The pre-loved edit at Shopbop"
          price={158.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/softlines/shopbop/ingress/2021/PreLovedEdit/mp_20220207_luxury_desktopsinglecategory_desktop_379x304v2._SY304_CB624970717_.jpg"
        />
        <Product
          id="3254354346"
          title="Best Sellers in Books"
          price={148.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/CategoryCards/SP22_W5_GW_CategoryCard_DT_2x_EN._SY608_CB604985637_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
