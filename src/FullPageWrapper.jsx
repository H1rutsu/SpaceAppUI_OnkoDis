import Content from './Content/Content';
import image_1 from './main_1.png';
import image_2 from './main_2.png';
import image_3 from './main_3.png';
import image_4 from './main_4.png';
import image_5 from './main_5.png';
import image_6 from './main_6.png';
import image_7 from './main_7.png';
import image_8 from './main_8.png';
import image_9 from './main_9.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation, useNavigate} from 'react-router-dom';
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import ContentRight from './ContentRight/ContentRight';

const anchors = ["firstPage", "secondPage", "thirdPage"];



export const FullPageWrapper = () => {
  const navigation = useLocation()
  console.log(navigation)
  return <>
     {navigation.pathname==='/'?<ReactFullpage
  anchors={anchors}
  navigation
  //navigationTooltips={anchors}
  navigat
//   sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
  scrollOverflow={true}
  loopTop={true}
  loopBottom={true}
  onLeave={(origin, destination, direction) => {
    console.log("onLeave event", { origin, destination, direction });
  }}
  render={({ state, fullpageApi }) => {
    return (
      <div>
        <div className="section" style={{ backgroundImage: `url(${image_1})`, backgroundSize: "100%"}}>
          <Content/>
        </div>
        
        <div className="section" style={{ backgroundImage: `url(${image_2})`,backgroundSize: "100%" }}>
          <Content/>
          
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_3})`, backgroundSize: "100%" }}>
          <ContentRight/>
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_4})`,backgroundSize: "100%" }}>
          <Content/>
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_5})`,backgroundSize: "100%" }}>
          <ContentRight/>
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_6})`,backgroundSize: "100%" }}>
          <ContentRight/>
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_7})`,backgroundSize: "100%" }}>
          <ContentRight/>
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_8})`,backgroundSize: "100%" }}>
          <ContentRight/>
        </div>
        <div className="section" style={{ backgroundImage: `url(${image_9})`,backgroundSize: "100%" }}>
          <Content/>
        </div>
      </div>
    );
  }}
/>:<>
        <Content/>
        
    </>}
  </>
 
}

