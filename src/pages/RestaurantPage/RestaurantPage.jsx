import {useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'

import css from './RestaurantPage.module.css'

import NavigationBar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import DownloadAppUtil from '../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'
import HeroComponent from '../../components/RestaurantComponents/HeroComponent/HeroComponent'
import OrderTitleComponent from '../../components/RestaurantComponents/OrderTitleComponent/OrderTitleComponent'
import OrderBodyComponent from '../../components/RestaurantComponents/OrderBodyComponent/OrderBodyComponent'
import Footer from '../../components/Footer/Footer'

const RestaurantPage = () => {
  const location = useLocation();
  const { city, hotel } = useParams();
  
  console.log("URL params:", { city, hotel });
  
  const restaurantName = hotel ? 
    hotel
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    : "Aadi da Dhaba";

  console.log("Formatted restaurant name:", restaurantName);

  return <div className={css.outerDiv}>
    <NavigationBar />
    <div className={css.innerDiv}>
        <div className={css.breadcrumb}>
            Home
            /
            India
            /
            Haryana
            /
            Ambala City
            /
            {restaurantName}
        </div>
    </div>
    <HeroComponent />
    <div className={css.innerDiv2}>
      <OrderTitleComponent restaurantName={restaurantName} />
      <OrderBodyComponent restaurantName={restaurantName} />
    </div>
    <Footer />
  </div>
}

export default RestaurantPage