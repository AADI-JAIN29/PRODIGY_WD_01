import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageBanner from './components/HomeComponents/HomePageBanner/HomePageBanner';
import SmallCard from './utils/Cards/card1/SmallCard';
import Collections from './components/HomeComponents/Collections/Collections';
import PopularPlaces from './components/HomeComponents/PopularPlaces/PopularPlaces';
import GetTheApp from './components/HomeComponents/GetTheApp/GetTheApp';
import ExploreOptionsNearMe from './components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import FloatingCart from './components/FloatingCart/FloatingCart';

import orderOnlineImg from '/images/orderonline.jpg';
import diningoutImg from '/images/diningout.jpg';
import proandproplusImg from '/images/proandproplus.jpg';
import nightlifeandclubsImg from '/images/nightlifeandclubs.jpg';

import css from './App.module.css';

import { orderOnlinePage, diningOutPage, proAndProPlusPage, nightLifePage } from './helpers/constants';

function App() {
  return (
    <>
      <FloatingCart />
      <Routes>
        <Route path="/" element={
          <>
            <HomePageBanner />
            <div className={css.bodySize}>
              <div className={css.chooseTypeCards}>
                <SmallCard imgSrc={orderOnlineImg} text="Order Online" link={"/show-case?page=" + orderOnlinePage} />
                <SmallCard imgSrc={diningoutImg} text="Dining Out" link={'/show-case?page=' + diningOutPage} />
                <SmallCard imgSrc={proandproplusImg} text="Pro and Pro Plus" link={'/show-case?page=' + proAndProPlusPage} />
                <SmallCard imgSrc={nightlifeandclubsImg} text="Night Life and Clubs" link={'/show-case?page=' + nightLifePage} />
              </div>
              <Collections />
              <PopularPlaces />
            </div>
            <GetTheApp />
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;