import React from "react";

export const RepoItem = ({ name, githubLink, description, stars }) => {
  return (
    <div>
      <h1>{name}</h1>
      <a href={githubLink}>github link</a>
      <p>{description}</p>
      <h4>{stars} stars</h4>
    </div>
  );
};
