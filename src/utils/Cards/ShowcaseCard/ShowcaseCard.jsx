import { Link } from 'react-router-dom';

import css from './ShowcaseCard.module.css';

import biryani from '/images/profilebanner.jpg'
import upArrowIcon from '/icons/up-arrow-icon.png';
import maxSAfety from '/icons/maxsafty.png';
import safeDelivery from '/icons/safe-delivery.png';
import star from '/icons/star.png';

const restaurantTags = {
  "aadi da dhaba": {
    cuisine: "North Indian",
    price: "300"
  },
  "c3": {
    cuisine: "Cafe, Continental",
    price: "200"
  },
  "italian": {
    cuisine: "Italian",
    price: "400"
  },
  "a1": {
    cuisine: "Chinese",
    price: "250"
  },
  "obc market": {
    cuisine: "Multi-Cuisine",
    price: "350"
  },
  "kfcs hotel": {
    cuisine: "Fast Food",
    price: "200"
  }
};

let ShowcaseCard = (props) => {
    const { promoted, time, offB, proExtraB, off, proExtra, name, rating, imgSrc } = props;
    
    // Create URL-friendly version of restaurant name
    const urlName = name.toLowerCase().replace(/\s+/g, '-');
    const link = `/hyderabad/${urlName}/order`;

    // Get restaurant-specific tags
    const restaurantTag = restaurantTags[name.toLowerCase()] || { cuisine: "South Indian", price: "350" };

    return <Link className={css.outerDiv} to={link}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                {promoted && <div className={css.promoted}>Promoted</div>}
                <img className={css.img} src={imgSrc} alt="food image" />
                {offB && <div className={css.off}>{off}% OFF</div>}
                {proExtraB && <div className={css.offPro}>Pro extra {proExtra}% OFF</div>}
                <div className={css.duration}>{time} min</div>
            </div>
            <div className={css.txtBox}>
                <div className={css.titleBox}>
                    <div className={css.title}>{name}</div>
                    <div className={css.ratingBox}> {rating} <img className={css.star} src={star} alt="rating star" /></div>
                </div>
                <div className={css.tagBox}>
                    <div className={css.tagTitle}>{restaurantTag.cuisine}</div>
                    <div className={css.tagTxt}>₹<span className={css.type}>{restaurantTag.price}</span> for <span className={css.num}>One</span></div>
                </div>
            </div>
            <div className={css.footer}>
                <div className={css.scroll1}>
                    <div className={css.lg1}><img className={css.upArrow} src={upArrowIcon} alt="gorwing arrow" /></div>
                    <div className={css.ordersPlaces}>9000+ orders placed from here recently</div>
                    <div className={css.lg2}><img className={css.maxSafety} src={maxSAfety} alt="max safety" /></div>
                </div>
                <div className={css.scroll2}>
                    <div className={css.lg1}><img className={css.upArrow} src={upArrowIcon} alt="max safety" /></div>
                    <div className={css.ordersPlaces}>Follows all max safety mesaures to ensure your food is safe</div>
                    <div className={css.lg2}><img className={css.safeDelivery} src={safeDelivery} alt="safety delivery" /></div>
                </div>
            </div>
        </div>
    </Link>
}

export default ShowcaseCard;