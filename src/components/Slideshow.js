import React from "react";
import { Fade } from "react-slideshow-image";
import Downtown1 from "../assets/Maddie/Downtown1.jpg";
import "react-slideshow-image/dist/styles.css";
import "../Slide.css";

const Slideshow = ({ pictures, place, backgroundC }) => {
  const buttonStyle = {
    width: "30px",
    border: "0px",
    marginRight: 300,
    marginLeft: 300,
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  return (
    <div style={{ backgroundColor: backgroundC }}>
      <h2>{place}</h2>
      <Fade {...properties} autoplay={false}>
        {pictures.map((slideImage, index) => (
          <div
            //className="each-slide-effect"
            className="frame"
            key={index}
          >
            <img src={slideImage} />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;

{
  /* <div className="each-slide-effect">
        <img src={Downtown1} />
      </div>
      <div className="each-slide-effect">
        <img src={Downtown1} />
      </div> */
}

// {
//   slideImages.map((slideImage, index) => (
//     <div key={index}>
//       <div
//         style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
//       ></div>
//     </div>
//   ));
// }

// import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "2000px",
//   height: "1000px",
// };
// const slideImages = [
//   {
//     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Slide 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     caption: "Slide 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Slide 3",
//   },
// ];

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//         {slideImages.map((slideImage, index) => (
//           <div key={index}>
//             <div
//               style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
//             ></div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// };

// export default Slideshow;
