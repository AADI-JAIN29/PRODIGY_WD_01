import {useState} from 'react'
import { useCart } from '../../../context/CartContext';

import css from './FoodItemProduct.module.css'

import starGIcon from '/icons/starGIcon.png'
import starGrIcon from '/icons/starGrIcon.png'

const FoodItemProduct = (props) => {
    let {imgSrc, ttl, votes, price, desc, vegNonveg, mustTry} = props.data;
    let dataset = props?.dataset;
    const [readMore, setReadMore] = useState(false)
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(props.data);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1500);
    };

    return <div className={css.outerDiv} data-id={dataset} id={props.id}>
        <div className={css.innerDiv}>
            {imgSrc ? <div className={css.imgBox}>
                <img src={imgSrc} className={css.img} alt='food item' />
                <img src={vegNonveg} className={css.typeImg} alt='veg or nonveg' />
            </div> : <img src={vegNonveg} className={css.typeImg2} alt="veg or nonveg" />}
            <div className={css.box}>
                <div className={css.ttl}>{ttl}</div>
                {mustTry ? <div className={css.tag}>MUST TRY</div> : "" }
                <div className={css.ratingBox}>
                    <div className={css.rating}>
                        <img src={votes >= 4 ? starGIcon : starGrIcon} className={css.star} alt='rating star' />
                        <div className={css.ratingTxt}>{votes}</div>
                    </div>
                    <div className={css.price}>₹{price}</div>
                </div>
                <div className={css.desc}>
                    {readMore ? desc : desc?.slice(0,50)}
                    {desc?.length > 50 ? <span className={css.readMore} onClick={() => setReadMore(val => !val)}>{readMore ? "...read less" : "...read more"}</span> : ""}
                </div>
                <div className={css.addToCartSection}>
                    <button 
                        className={`${css.addToCartBtn} ${isAdded ? css.added : ''}`}
                        onClick={handleAddToCart}
                    >
                        {isAdded ? '✓ Added' : 'Add +'}
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default FoodItemProduct