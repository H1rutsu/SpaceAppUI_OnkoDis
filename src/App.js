// import './App.css';
// import {BrowserRouter} from 'react-router-dom';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Content from './Content/Content';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import image from './main_1.png';
// import React from 'react';




// function App() {
//   return (
//     <BrowserRouter>
//     <div style={{backgroundImage: `url(${image})`}}> 
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//     </BrowserRouter>  
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, useNavigate} from 'react-router-dom';
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './index.css';
import Main from './Main/Main';
import { FullPageWrapper } from './FullPageWrapper';



const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <FullPageWrapper/>
      <Footer />
    </BrowserRouter>
  </>
};



export default App;



// const App = () => (
  
  // <ReactFullpage
  //   anchors={anchors}
  //   navigation
  //   navigationTooltips={anchors}
  //   navigat
  //   sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
  //   scrollOverflow={true}
  //   loopTop={true}
  //   onLeave={(origin, destination, direction) => {
  //     console.log("onLeave event", { origin, destination, direction });
  //   }}
  //   render={({ state, fullpageApi }) => {
  //     return (
  //       <BrowserRouter>
  //       <div>
  //         <div className="section" style={{ backgroundImage: `url(${image_1})`, backgroundSize: "100%"}}>
  //           <Header></Header>
  //           <Content></Content>
  //           <Footer></Footer>
  //         </div>
          
  //         <div className="section" style={{ backgroundImage: `url(${image_2})`,backgroundSize: "100%" }}>
  //           {/* <Header></Header> */}
  //           <Content></Content>
  //           <Footer></Footer>
  //         </div>
  //         <div className="section" style={{ backgroundImage: `url(${image_3})` }}><h3></h3></div>
  //         <div className="section" style={{ backgroundImage: `url(${image_4})` }}><h3></h3></div>
  //         <div className="section" style={{ backgroundImage: `url(${image_5})` }}><h3></h3></div>
  //       </div>
  //     </BrowserRouter>
  //     );
  //   }}
  // />
// );