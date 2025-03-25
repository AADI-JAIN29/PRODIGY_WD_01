import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular localities in and around</span> <span className={css.bld}>Mullana</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Aadi da Dhaba" count="421" link='/jubileehills' />
            <PlacesCard place="Dhingra ki rasoi" count="421" link='/jubileehills' />
            <PlacesCard place="Vats Party Hall" count="421" link='/jubileehills' />
            <PlacesCard place="Redhu's Bar" count="421" link='/jubileehills' />
            <PlacesCard place="0Haveli" count="421" link='/jubileehills' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;