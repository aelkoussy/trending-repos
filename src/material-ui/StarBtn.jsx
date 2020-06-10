import React, { useState } from "react";
import Star from "@material-ui/icons/Star";
import ToggleButton from "@material-ui/lab/ToggleButton";

// Material toggle btn used with a star icon, given objectID to save it as starred
export const StarBtn = ({ objectID }) => {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        var starredItems = localStorage.getItem("starred");
        const isItemSaved = starredItems.indexOf(objectID) === -1;

        if (selected && !isItemSaved) {
          starredItems = starredItems.push(objectID);
          localStorage.setItem("starred", starredItems);
        } else {
          starredItems = starredItems.filter((item) => item !== objectID);
          localStorage.setItem("starred", starredItems);
        }
      }}
    >
      <Star style={{ color: selected ? "Yellow" : "grey" }} />
    </ToggleButton>
  );
};
