import { FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RepoItem } from "../components/RepoItem";
import { getOneWeekAgoISODate } from "../helpers/helpers";

export const ListOfRepos = () => {
  const [allRepos, setAllRepos] = useState([]);
  const [reposToShow, setReposToShow] = useState([]);
  const [showStarredOnly, setShowStarredOnly] = useState(false);

  useEffect(() => {
    const dateOfOneWeekAgoUTC = getOneWeekAgoISODate();

    // possible improvements here to keep all the params as variables and allow changing them for the user
    // get the list of repos from GitHub api
    const queryParamsForGitHub = `>${dateOfOneWeekAgoUTC}&sort=stars&order=desc`;
    const github_url = `https://api.github.com/search/repositories?q=created:${queryParamsForGitHub}`;

    axios.get(github_url).then((response) => {
      const repos = response.data.items;

      setReposToShow(repos);
      setAllRepos(repos);
    });
  }, []);

  const handleChange = (event) => {
    const checked = event.target.checked;
    setShowStarredOnly(checked);
    var starredIDs = JSON.parse(localStorage.getItem("starred")) || [];

    if (checked) {
      const starredRepos = allRepos.filter((repo) =>
        starredIDs.includes(repo.id)
      );
      setReposToShow(starredRepos);
    } else {
      setReposToShow(allRepos);
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={showStarredOnly}
            onChange={handleChange}
            inputProps={{
              "aria-label": "primary checkbox",
              title: "show only starred repos",
            }}
          />
        }
        label="Show only starred repos"
      />

      {reposToShow.map((repo) => (
        <RepoItem
          name={repo.name}
          githubLink={repo.html_url}
          description={repo.description}
          stars={repo.stargazers_count}
          key={repo.id}
          objectID={repo.id}
        />
      ))}
    </div>
  );
};
