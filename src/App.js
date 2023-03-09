import { useState, useEffect } from "react";
import "./App.css";
import jerseyData from "./assets/jersey-data.json";
import JerseyItem from "./components/JerseyItem.js";
import Slideshow from "./components/Slideshow";
import Downtown1 from "./assets/Maddie/Downtown1.jpg";
import Froyo1 from "./assets/Maddie/Froyo1.jpg";
import Froyo2 from "./assets/Maddie/Froyo2.jpg";
import Football1 from "./assets/Maddie/Football1.JPG";
import Football2 from "./assets/Maddie/Football2.jpg";
import Football3 from "./assets/Maddie/Football3.jpg";
import Monadnock1 from "./assets/Maddie/Monadnock1.jpg";
import Okemo1 from "./assets/Maddie/Okemo1.jpg";
import Okemo2 from "./assets/Maddie/Okemo2.JPG";
import SpringWeekend1 from "./assets/Maddie/SpringWeekend1.PNG";
import Vermont1 from "./assets/Maddie/Vermont1.jpg";
import Xaco1 from "./assets/Maddie/Xaco1.jpg";
import Xaco2 from "./assets/Maddie/Xaco2.jpg";
import Xaco3 from "./assets/Maddie/Xaco3.jpg";
import NEOutline from "./assets/Maddie/NewEnglandBlankOutline.gif";

function App() {
  return (
    <div className="App">
      <h1>Maddie and Cal's Adventures</h1>
      <div style={{ height: "50px" }}></div>
      <img
        src={NEOutline}
        className="mapStyle"
        style={{
          height: "500px",
          width: "70%",
        }}
      />
      <a href="#Mount Monadnock">
        <button
          class="button-6"
          style={{ top: -380, right: -450 }}
          onclick="location.href='http://www.google.com'"
          type="button"
        >
          <i class="fa-solid fa-mountain-sun fa-2x"></i>
        </button>
      </a>

      <a href="#Okemo">
        <button
          class="button-6"
          role="button"
          style={{ top: -420, left: -200 }}
        >
          <i class="fa-solid fa-person-skiing fa-2x"></i>
        </button>
      </a>

      <a href="#Brown Football Stadium">
        <button
          class="button-6"
          role="button"
          style={{ top: -120, right: -290 }}
        >
          <i class="fa-solid fa-football fa-2x"></i>
        </button>
      </a>

      <a href="#Xaco Taco">
        <button
          class="button-6"
          role="button"
          style={{ top: -70, right: -290 }}
        >
          <i class="fa-solid fa-martini-glass-citrus fa-2x"></i>
        </button>
      </a>

      <a href="#Downtown Providence">
        <button class="button-6" role="button" style={{ top: -70, right: -90 }}>
          <i class="fa-solid fa-champagne-glasses fa-2x"></i>
        </button>
      </a>

      <a href="#Spring Weekend">
        <button
          class="button-6"
          role="button"
          style={{ top: -120, right: -130 }}
        >
          <i class="fa-solid fa-music fa-2x"></i>
        </button>
      </a>

      <a href="#Froyo">
        <button
          class="button-6"
          role="button"
          style={{ top: -100, right: -140 }}
        >
          <i class="fa-solid fa-ice-cream fa-2x"></i>
        </button>
      </a>

      <div style={{ height: "200px" }}></div>
      <div id="Okemo">
        <Slideshow
          place={"Okemo"}
          pictures={[Okemo1, Vermont1, Okemo2]}
          backgroundC={"grey"}
        ></Slideshow>
      </div>
      <div id="Froyo">
        <Slideshow
          place={"Froyo"}
          pictures={[Froyo1, Froyo2]}
          backgroundC={"#D3D3D3"}
        ></Slideshow>
      </div>
      <div id="Xaco Taco">
        <Slideshow
          place={"Xaco Taco"}
          pictures={[Xaco1, Xaco2, Xaco3]}
          backgroundC={"grey"}
        ></Slideshow>
      </div>
      <div id="Mount Monadnock">
        <Slideshow
          place={"Mount Monadnock"}
          pictures={[Monadnock1, Monadnock1]}
          backgroundC={"#D3D3D3"}
        ></Slideshow>
      </div>
      <div id="Brown Football Stadium">
        <Slideshow
          place={"Brown Football Stadium"}
          pictures={[Football2, Football3]}
          backgroundC={"grey"}
        ></Slideshow>
      </div>
      <div id="Spring Weekend">
        <Slideshow
          place={"Spring Weekend"}
          pictures={[SpringWeekend1, SpringWeekend1]}
          backgroundC={"#D3D3D3"}
        ></Slideshow>
      </div>
      <div id="Downtown Providence">
        <Slideshow
          place={"Downtown Providence"}
          pictures={[Downtown1, Downtown1]}
          backgroundC={"grey"}
        ></Slideshow>
      </div>
      <h2>More Adventures To Come...</h2>
      {/* <Slideshow
        place={"...More Fun Times"}
        pictures={[Downtown1, Downtown1]}
      ></Slideshow> */}
    </div>
  );
}

export default App;
