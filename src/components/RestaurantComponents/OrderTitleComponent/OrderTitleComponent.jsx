import React from 'react'
import css from './OrderTitleComponent.module.css'
import RatingUtil from '../../../utils/RestaurantUtils/RatingUtil/RatingUtil'
import infoIcon from '/icons/info.png'

const OrderTitleComponent = ({ restaurantName }) => {
  const restaurantInfo = {
    "Aadi da Dhaba": {
      cuisine: "North Indian, Punjabi",
      address: "Barara",
      rating: "4.1",
      diningReviews: "601",
      deliveryReviews: "37.3k",
      description: "Authentic Punjabi dhaba serving hearty North Indian delicacies. Known for our butter chicken and tandoori specialties. Perfect for family dining.",
      openHours: "11:00 AM - 11:00 PM",
      averageCost: "₹300 for one",
      bestSellers: "Butter Chicken, Dal Makhani, Tandoori Roti",
      features: "Outdoor Seating • Family Friendly • Pure Veg Options"
    },
    "C3": {
      cuisine: "Cafe, Continental, Beverages",
      address: "Barara",
      rating: "2.6",
      diningReviews: "450",
      deliveryReviews: "9k",
      description: "Modern cafe with cozy ambiance. Specializing in artisanal coffee, fresh pastries, and light bites. Perfect spot for casual meetings and coffee dates.",
      openHours: "8:00 AM - 10:00 PM",
      averageCost: "₹200 for one",
      bestSellers: "Cold Coffee, Grilled Sandwiches, Pastries",
      features: "WiFi • Power Outlets • Indoor Seating"
    },
    "Italian": {
      cuisine: "Italian, Pizza, Pasta",
      address: "Barara",
      rating: "4.6",
      diningReviews: "520",
      deliveryReviews: "15.2k",
      description: "Authentic Italian restaurant serving wood-fired pizzas and handmade pasta. Experience the taste of Italy with our traditional recipes and imported ingredients.",
      openHours: "12:00 PM - 11:00 PM",
      averageCost: "₹400 for one",
      bestSellers: "Margherita Pizza, Pasta Carbonara, Tiramisu",
      features: "Fine Dining • Wine Selection • Romantic Atmosphere"
    },
    "A1": {
      cuisine: "Chinese, Asian",
      address: "Barara",
      rating: "4.9",
      diningReviews: "480",
      deliveryReviews: "12.5k",
      description: "Popular Indo-Chinese restaurant known for its flavorful fusion dishes. Specializing in spicy Schezwan specialties and street-style Chinese.",
      openHours: "11:30 AM - 10:30 PM",
      averageCost: "₹250 for one",
      bestSellers: "Schezwan Noodles, Chilli Paneer, Manchurian",
      features: "Quick Service • Home Delivery • Group Dining"
    }
  };

  const info = restaurantInfo[restaurantName] || restaurantInfo["Aadi da Dhaba"];

  return (
    <div className={css.outerDiv}>
      <div className={css.titleSection}>
        <h1>{restaurantName}</h1>
        <p className={css.cuisine}>{info.cuisine}</p>
        <p className={css.description}>{info.description}</p>
      </div>
      
      <div className={css.detailsSection}>
        <div className={css.timings}>
          <span className={css.label}>Hours:</span>
          <span>{info.openHours}</span>
        </div>
        
        <div className={css.cost}>
          <span className={css.label}>Cost:</span>
          <span>{info.averageCost}</span>
        </div>
        
        <div className={css.bestSellers}>
          <span className={css.label}>Must Try:</span>
          <span>{info.bestSellers}</span>
        </div>
        
        <div className={css.features}>
          <span className={css.label}>Features:</span>
          <span>{info.features}</span>
        </div>
      </div>
      
      <div className={css.ratings}>
        <RatingUtil rating={info.rating} />
        <div className={css.reviews}>
          <span>{info.diningReviews} Dining Reviews</span>
          <span>{info.deliveryReviews} Delivery Reviews</span>
        </div>
      </div>
    </div>
  );
}

export default OrderTitleComponent