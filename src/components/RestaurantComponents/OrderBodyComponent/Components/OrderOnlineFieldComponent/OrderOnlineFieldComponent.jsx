import {useEffect, useState} from 'react'
import {Formik, Form} from 'formik'
import { useCart } from '../../../../../context/CartContext'
import { Link } from 'react-router-dom'

import css from './OrderOnlineFieldComponent.module.css'

import CheckBoxUtil from '../../../../../utils/FormUtils/CheckBoxUtil/CheckBoxUtil'


import DownloadAppUtil from '../../../../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'
import SmallSearchBarUtil from '../../../../../utils/RestaurantUtils/SmallSearchBarUtil/SmallSearchBarUtil'
import OfferTrackUtil from '../../../../../utils/RestaurantUtils/OfferTrackUtil/OfferTrackUtil'
import FoodItemProduct from '../../../../../utils/RestaurantUtils/FoodItemProduct/FoodItemProduct'

import vegIcon from '/icons/veg.png'
import hariyalikebab from '/images/hariyalikebab.jpg'
import compassIcon from '/icons/compass.png'
import clockIcon from '/icons/clock.png'

const restaurantMenus = {
  "aadi-da-dhaba": {
    recommended: [
      {
        mustTry: true,
        ttl: "Butter Chicken",
        votes: "450",
        price: "380",
        desc: "Tender chicken cooked in rich, creamy tomato gravy",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      },
      {
        mustTry: true,
        ttl: "Dal Makhani",
        votes: "320",
        price: "250",
        desc: "Creamy black lentils slow cooked overnight",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ],
    "Punjabi Specials": [
      {
        ttl: "Sarson Ka Saag",
        votes: "280",
        price: "220",
        desc: "Traditional punjabi dish made with mustard greens, served with makki roti",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Amritsari Fish",
        votes: "310",
        price: "390",
        desc: "Fresh fish marinated with punjabi spices and deep fried",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Kadai Paneer",
        votes: "290",
        price: "280",
        desc: "Cottage cheese cooked with bell peppers in spicy gravy",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ],
    "Tandoor Se": [
      {
        ttl: "Tandoori Chicken",
        votes: "330",
        price: "340",
        desc: "Chicken marinated in yogurt and spices, cooked in tandoor",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Malai Tikka",
        votes: "280",
        price: "320",
        desc: "Creamy chicken tikka with mild spices",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      }
    ]
  },

  "c3": {
    recommended: [
      {
        mustTry: true,
        ttl: "Cold Coffee",
        votes: "280",
        price: "180",
        desc: "Signature cold coffee topped with whipped cream",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ],
    "Cafe Specials": [
      {
        ttl: "Grilled Sandwich",
        votes: "190",
        price: "220",
        desc: "Classic grilled sandwich with cheese and vegetables",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ]
  },

  "italian": {
    recommended: [
      {
        mustTry: true,
        ttl: "Margherita Pizza",
        votes: "420",
        price: "399",
        desc: "Classic Italian pizza with fresh basil and mozzarella",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ],
    "Antipasti": [
      {
        ttl: "Bruschetta al Pomodoro",
        votes: "280",
        price: "280",
        desc: "Toasted bread with fresh tomatoes, garlic, basil and olive oil",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Caprese Salad",
        votes: "260",
        price: "320",
        desc: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ],
    "Pasta": [
      {
        ttl: "Spaghetti Carbonara",
        votes: "350",
        price: "449",
        desc: "Classic carbonara with eggs, pecorino cheese and pancetta",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      }
    ],
    "Pizzas": [
      {
        ttl: "Margherita Pizza",
        votes: "400",
        price: "399",
        desc: "Classic pizza with tomato sauce, fresh mozzarella and basil",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Pepperoni Pizza",
        votes: "380",
        price: "499",
        desc: "Spicy pepperoni with mozzarella and tomato sauce",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      }
    ]
  },

  "A1": {
    recommended: [
      {
        mustTry: true,
        ttl: "Chilli Chicken",
        votes: "410",
        price: "280",
        desc: "Indo-chinese style spicy chicken with bell peppers",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      }
    ],
    "Starters": [
      {
        ttl: "Dragon Prawns",
        votes: "280",
        price: "350",
        desc: "Crispy prawns tossed in spicy schezwan sauce",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Crispy Corn",
        votes: "240",
        price: "220",
        desc: "Golden fried corn kernels with Chinese spices",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ],
    "Main Course": [
      {
        ttl: "Kung Pao Chicken",
        votes: "290",
        price: "320",
        desc: "Diced chicken with peanuts in spicy sauce",
        vegNonveg: vegIcon,
        foodType: "non-veg",
        imgSrc: hariyalikebab
      },
      {
        ttl: "Veg Hakka Noodles",
        votes: "260",
        price: "220",
        desc: "Wok tossed noodles with vegetables in Chinese style",
        vegNonveg: vegIcon,
        foodType: "veg",
        imgSrc: hariyalikebab
      }
    ]
  }
};

const restaurantInfo = {
  "Aadi da Dhaba": {
    cuisine: "North Indian, Punjabi",
    priceForOne: "₹300 for One",
    type: "dhaba",
    deliveryTime: "30 min",
    offer: "40% OFF up to ₹80",
    description: "Authentic Punjabi cuisine in a traditional dhaba setting"
  },
  "C3": {
    cuisine: "Cafe, Continental, Beverages",
    priceForOne: "₹200 for One",
    type: "cafe",
    deliveryTime: "25 min",
    offer: "20% OFF up to ₹50",
    description: "Modern cafe serving fresh beverages and light bites"
  },
  "Italian": {
    cuisine: "Italian, Pizza, Pasta",
    priceForOne: "₹400 for One",
    type: "fine_dining",
    deliveryTime: "35 min",
    offer: "Pro extra 20% OFF",
    description: "Authentic Italian cuisine with fresh pasta and wood-fired pizzas"
  },
  "A1": {
    cuisine: "Chinese, Asian",
    priceForOne: "₹250 for One",
    type: "casual_dining",
    deliveryTime: "30 min",
    offer: "30% OFF up to ₹75"
  }
};

const OrderOnlineFieldComponent = ({ restaurantName }) => {
  const urlFriendlyName = restaurantName.toLowerCase().replace(/\s+/g, '-');
  const menu = restaurantMenus[urlFriendlyName] || {};
  const info = restaurantInfo[restaurantName] || restaurantInfo["Aadi da Dhaba"];

  const [isActive, setIsActive] = useState({
    recommended: true
  });
  const [foodType, setFoodType] = useState({
    veg: false, 
    egg: false
  });

  const offerTrackData = [
    {txt1: "0% OFF up to ₹80 + 10% OFF up to ₹75 Paytm Cashback", txt2: "use code PAYTMBASH"},
    {txt1: "Flat ₹125 OFF", txt2: "use code ICICINB"}
  ]

  const initialValues = {veg: false, egg: false}

  let breakDiv = <hr className={css.hr2} />
  const foodItemsDataLength = Object.keys(menu).length

  const breakDivFunc = (index) => {
    if(+foodItemsDataLength- 1 > +index){
      return breakDiv;
    }
    breakDiv = ""
    return breakDiv;
  }

  const sideNavHandler = (val) => {
    setIsActive({[val?.[0]] : true});
    document.getElementById(`${val?.[0]}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const allTtls = document.querySelectorAll('[data-id=secTtl]');
    const options = {
      threshold: 0.1
    }

    const handleIntersection = (entries) => {
      entries?.map(entry => {
          if(entry.isIntersecting){
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.add(css.activeNavTab);
          }else{
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.remove(css.activeNavTab);
          }
        })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    allTtls.forEach(post => observer.observe(post))
  }, [])

  console.log("Restaurant Name:", restaurantName);
  console.log("URL Friendly Name:", urlFriendlyName);
  console.log("Selected Menu:", menu);

  const { cartItems, getCartTotal } = useCart();

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
        {Object.entries(menu)?.map((val, id) => {
          return <div data-sb-id={val?.[0]} key={id} onClick={() => sideNavHandler(val)} className={isActive[val?.[0]] ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}>{val?.[0]} ({val?.[1]?.length})</div>
        })}
      </div>
      <div className={css.rightBox}>
        <div className={css.hSec}>
            <div className={css.ttl}>Order Online</div>
            <SmallSearchBarUtil placeholder="Search within menu" />
        </div>
        <div className={css.tabBox}>
          <div className={css.tagLine}>
            <img src={compassIcon} className={css.clockIcon} alt="live track" />
            <span className={css.tabTxt}>Live track your order</span>
          </div>
          <div className={css.hr} />
          <div className={css.tagLine}>
            <img src={clockIcon} className={css.clockIcon} alt="time" />
            <span className={css.tabTxt}>30 min</span>
          </div>
        </div>
        <div className={css.offersTrack}>
          {offerTrackData?.map((val, id) => {
            return <OfferTrackUtil key={id} txt1={val.txt1} txt2={val.txt2} />
          })}
        </div>
        <div className={css.formBox}>
          <Formik initialValues={initialValues}>
              <Form className={css.form}>
                    <CheckBoxUtil label="Veg Only" name="veg" onChange={() => setFoodType(val => val?.veg ? {veg: false, egg: false} : {veg: true, egg: false})} checked={foodType?.veg || foodType?.egg} />
                    {foodType?.veg || foodType?.egg ? <CheckBoxUtil label="contains egg" name="egg" onChange={() => setFoodType(val => val?.egg ? {veg: true, egg: false} : {veg: true, egg: true})} checked={foodType?.egg} /> : ""}
               </Form>
          </Formik>
        </div>
        <div className={css.itemsBox} id='itemsBox'>
          {Object.entries(menu)?.map((val, index) => {
            return <div key={index} >
              <div className={css.sec} >
                <div className={css.secTtl}>{val[0]}</div>
                {foodType.egg ? 
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "egg"){
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl" id={val[0]}  />
                    }
                  })
                : 
                foodType.veg ?
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "veg"){
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl"  id={val[0]} />
                    }
                  })
                : 
                  val[1]?.map((item, id) => {
                    return <FoodItemProduct  key={id} data={item} dataset="secTtl" id={val[0]}  />
                  })
                }
                {/* {val[1]?.map((item, id) => {
                  return <FoodItemProduct key={id} {...item}  />
                })} */}
              </div>
              {breakDivFunc(index)}
            </div>
          })}
        </div>
      </div>
    </div>
    <DownloadAppUtil />

    {/* Cart Summary at bottom of menu */}
    {cartItems.length > 0 && (
        <div className={css.cartSummaryContainer}>
            <div className={css.cartSummary}>
                <div className={css.cartInfo}>
                    <span className={css.itemCount}>
                        {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                    </span>
                    <span className={css.cartTotal}>₹{getCartTotal()}</span>
                </div>
                <Link to="/cart" className={css.viewCartBtn}>
                    View Cart →
                </Link>
            </div>
        </div>
    )}
  </div>
}

export default OrderOnlineFieldComponent