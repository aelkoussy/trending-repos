import React, { useState } from "react";
import Star from "@material-ui/icons/Star";
import ToggleButton from "@material-ui/lab/ToggleButton";

// Material toggle btn used with a star icon, given objectID to save it as starred
export const StarBtn = ({ objectID }) => {
  var starredItems = JSON.parse(localStorage.getItem("starred")) || [];
  const isItemSaved = starredItems && starredItems.indexOf(objectID) !== -1;
  const [selected, setSelected] = useState(isItemSaved);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        // here the next state is !selected
        setSelected(!selected);

        if (!selected && !isItemSaved) {
          starredItems = starredItems.concat(objectID);
          localStorage.setItem("starred", JSON.stringify(starredItems));
        } else {
          starredItems = starredItems.filter((item) => item !== objectID);
          localStorage.setItem("starred", JSON.stringify(starredItems));
        }
      }}
    >
      <Star style={{ color: selected ? "Orange" : "grey" }} />
    </ToggleButton>
  );
};
