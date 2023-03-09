// import { useState, useEffect } from "react";
// import "./App.css";
// import jerseyData from "./assets/jersey-data.json";
// import JerseyItem from "./components/JerseyItem.js";

// function App() {
//   const [jerseysToDisplay, setJerseysToDisplay] = useState(jerseyData);

//   //locker
//   const [locker, setLocker] = useState([]);
//   const [inLocker, setInLocker] = useState(false);

//   //sport / region
//   const [sport, setSport] = useState("");
//   const [region, setRegion] = useState("");

//   //let lockerCost = 0;
//   const sumLocker = () => {
//     let lockerCost = locker.reduce((a, v) => (a = a + parseInt(v.price)), 0);
//     //reduce code: https://stackoverflow.com/questions/62358365/react-js-get-sum-of-numbers-in-array
//     return lockerCost;
//   };

//   const addOrRemove = (jerseyToAdd) => {
//     const inLocker = locker.includes(jerseyToAdd);
//     if (!inLocker) {
//       setLocker([...locker, jerseyToAdd]);
//     } else {
//       setLocker(
//         locker.filter(
//           (jersey) => jersey.id !== jerseyToAdd.id //from react docs
//         )
//       );
//     }
//   };

//   const sortPopular = () => {
//     const sortedByPopularity = [...jerseysToDisplay].sort((a, b) => {
//       return a.popularity - b.popularity;
//     });
//     setJerseysToDisplay(sortedByPopularity);
//   };

//   const sortUnpopular = () => {
//     const sortedByUnpopularity = [...jerseysToDisplay].sort((a, b) => {
//       return b.popularity - a.popularity;
//     });
//     setJerseysToDisplay(sortedByUnpopularity);
//   };

//   useEffect(() => {
//     if (sport.length > 0 && region.length > 0 && !inLocker) {
//       setJerseysToDisplay(
//         jerseyData.filter(
//           (jersey) => jersey.sport === sport && jersey.region === region
//         )
//       );
//     } else if (sport.length > 0 && region.length > 0 && inLocker) {
//       setJerseysToDisplay(
//         locker.filter(
//           (jersey) => jersey.sport === sport && jersey.region === region
//         )
//       );
//     } else if (sport.length == 0 && region.length == 0 && inLocker) {
//       setJerseysToDisplay(locker);
//     } else if (sport.length > 0 && region.length == 0 && inLocker) {
//       setJerseysToDisplay(locker.filter((jersey) => jersey.sport === sport));
//     } else if (sport.length == 0 && region.length == 0 && !inLocker) {
//       setJerseysToDisplay(jerseyData);
//     } else if (sport.length > 0 && region.length == 0) {
//       setJerseysToDisplay(
//         jerseyData.filter((jersey) => jersey.sport === sport)
//       );
//     } else if (sport.length == 0 && region.length > 0 && inLocker) {
//       setJerseysToDisplay(locker.filter((jersey) => jersey.region === region));
//     } else if (sport.length == 0 && region.length > 0) {
//       setJerseysToDisplay(
//         jerseyData.filter((jersey) => jersey.region === region)
//       );
//     }
//   }, [sport, region, inLocker]);

//   return (
//     <div className="App">
//       <h1>Jersey Locker</h1>
//       <div className="filterAndLocker ">
//         <div className="sorter-container">
//           <div className="sport-selection">
//             <p>Filter by Sport</p>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Hockey"
//                 name="sport"
//                 onChange={() => {
//                   setSport("");
//                 }}
//               />{" "}
//               All Sports
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Baseball"
//                 name="sport"
//                 onChange={() => {
//                   setSport("Baseball");
//                 }}
//               />{" "}
//               Baseball
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Basketball"
//                 name="sport"
//                 onChange={() => {
//                   setSport("Basketball");
//                 }}
//               />{" "}
//               Basketball
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Football"
//                 name="sport"
//                 onChange={() => {
//                   setSport("Football");
//                 }}
//               />{" "}
//               Football
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Hockey"
//                 name="sport"
//                 onChange={() => {
//                   setSport("Hockey");
//                 }}
//               />{" "}
//               Hockey
//             </div>
//           </div>
//           <div className="region-selection">
//             <p>Filter by Region</p>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Southwest"
//                 name="region"
//                 onChange={() => {
//                   setRegion("");
//                 }}
//               />{" "}
//               All Regions
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Northeast"
//                 name="region"
//                 onChange={() => {
//                   setRegion("Northeast");
//                 }}
//               />{" "}
//               Northeast
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Southeast"
//                 name="region"
//                 onChange={() => {
//                   setRegion("Southeast");
//                 }}
//               />{" "}
//               Southeast
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Central"
//                 name="region"
//                 onChange={() => {
//                   setRegion("Central");
//                 }}
//               />{" "}
//               Central
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Northwest"
//                 name="region"
//                 onChange={() => {
//                   setRegion("Northwest");
//                 }}
//               />{" "}
//               Northwest
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Southwest"
//                 name="region"
//                 onChange={() => {
//                   setRegion("Southwest");
//                 }}
//               />{" "}
//               Southwest
//             </div>
//           </div>
//           <div className="number-selection">
//             <p>Sort By</p>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Popular"
//                 name="popularity"
//                 onChange={sortPopular}
//               />{" "}
//               Popular
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Unpopular"
//                 name="popularity"
//                 onChange={sortUnpopular}
//               />{" "}
//               Least Popular
//             </div>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <div className="locker-selection">
//             <p>Locker Aggregator</p>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Locker 2"
//                 name="locker"
//                 onChange={() => {
//                   setInLocker(false);
//                 }}
//               />{" "}
//               All
//             </div>
//             <div className="textLeft">
//               <input
//                 type="radio"
//                 value="Locker 1"
//                 name="locker"
//                 onChange={() => {
//                   setInLocker(true);
//                 }}
//               />{" "}
//               My Locker
//             </div>
//             <p>Your locker would cost {sumLocker()} dollars </p>
//           </div>
//         </div>
//         <div>
//           {jerseysToDisplay.map((item) => (
//             <div key={item.id} className="display-locker">
//               <JerseyItem
//                 era={item.era}
//                 jerseyName={item.jerseyName}
//                 sport={item.sport}
//                 region={item.region}
//                 image={item.image}
//                 price={item.price}
//                 popularity={item.popularity}
//                 onPress={() => {
//                   addOrRemove(item);
//                 }}
//                 buttonText={locker.includes(item) ? "Remove" : "Add To Locker"}
//               ></JerseyItem>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
