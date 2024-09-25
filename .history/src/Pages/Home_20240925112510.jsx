import React from "react";
// import HomeBanner from '../Component/Home/HomeBanner'
import AboutUs from "../Component/AboutUs/AboutUs";
import AmplifyBrands from "../Component/AmplifyBrands/AmplifyBrands";
import OurMissions from "../Component/OurMissions/OurMissions";
import NewHomeBanner from "../Component/HomeBanner/NewHomeBanner";
import ReusableCont from "../Component/ReusableCont/ReusableCont";
import Work from "../Component/Work/Work";

function Home({ onBlackBackground, onLightBackground }) {
  return (
    <div>
      {/* <HomeBanner/> */}
      <NewHomeBanner onLightBackground={onLightBackground} />
      <AboutUs onBlackBackground={onBlackBackground} />
      {/* <ReusableCont/> */}
      <AmplifyBrands />
      {/* <OurMissions/> */}      
      <Work />
    </div>
  );
}

export default Home;
