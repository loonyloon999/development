import React from "react";

const JerseyItem = ({
  popularity,
  jerseyName,
  era,
  sport,
  region,
  image,
  onPress,
  buttonText,
  price,
}) => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ]);

  return (
    // <View style={{ flexDirection: "row" }}>
    <div className="jersey-container ">
      <p>{jerseyName}</p>
      <p>Popularity: {popularity}</p>
      <p>{era}</p>
      <p>{sport}</p>
      <p>{region}</p>
      <p>${price}</p>
      <img src={image} alt="logo" className="sizeImage" />
      <button onClick={onPress} className="addToFavoritesButton">
        {buttonText}
      </button>
    </div>

    // <FontAwesome name="sliders" style={styles.iconStyle} />
  );
};

export default JerseyItem;
