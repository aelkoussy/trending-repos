import React from "react";

export const RepoItem = ({ name, githubLink, description, stars }) => {
  return (
    <div>
      <a href={githubLink}>
        <h2>{name}</h2>
      </a>
      <p>{description}</p>
      <h4>{stars} stars</h4>
    </div>
  );
};
