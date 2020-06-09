import React, { useEffect, useState } from "react";
import { RepoItem } from "../components/RepoItem";
import axios from "axios";

export const ListOfRepos = () => {
  const [arrayOfRepos, setArrayOfRepos] = useState([]);
  useEffect(() => {
    //Get today's date using the JavaScript Date object.
    var ourDate = new Date();
    //Change it so that it is 7 days in the past.
    var dateOfOneWeekAgo = ourDate.getDate() - 7;
    ourDate.setDate(dateOfOneWeekAgo);
    const dateOfOneWeekAgoUTC = ourDate.toISOString().split("T")[0];

    // possible improvements here to keep all the params as variables and allow changing them for the user
    // get the list of repos from GitHub api
    const queryParamsForGitHub = `>${dateOfOneWeekAgoUTC}&sort=stars&order=desc`;
    const github_url = `https://api.github.com/search/repositories?q=created:${queryParamsForGitHub}`;
    axios.get(github_url).then((response) => {
      const repos = response.data.items;
      console.log(repos);
      setArrayOfRepos(repos);
    });

    // retrieve the starred repos from localstorage
  }, []);

  return (
    <div>
      {arrayOfRepos.map((repo) => (
        <RepoItem
          name={repo.name}
          githubLink={repo.html_url}
          description={repo.description}
          stars={repo.stargazers_count}
          key={repo.id}
        />
      ))}
    </div>
  );
};
