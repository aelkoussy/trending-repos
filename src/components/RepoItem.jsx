import React from "react";
import { StarBtn } from "../material-ui/StarBtn";
import { Card } from "@material-ui/core";

export const RepoItem = ({
  name,
  githubLink,
  description,
  stars,
  objectID,
}) => {
  return (
    <Card variant="outlined">
      <div>
        <a href={githubLink}>
          <h2>{name}</h2>
        </a>
        <p>{description}</p>
        <h4>{stars} stars</h4>
        <StarBtn objectID={objectID} />
      </div>
    </Card>
  );
};
