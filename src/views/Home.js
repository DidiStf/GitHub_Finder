import classnames from 'classnames';
import React, { useContext } from 'react';
import Search from '../components/users/Search';
import Users from '../components/users/Users';

import GithubContext from '../context/github/githubContext';

import './Home.css';

const HomeView = () => {
  const githubContext = useContext(GithubContext);

  return (
    <div
      className={classnames(
        'HomeView',
        githubContext.users.length > 0 && 'search'
      )}
    >
      <Search />
      {githubContext.users.length > 0 && <Users />}
    </div>
  );
};

export default HomeView;
