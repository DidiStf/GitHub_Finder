import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

import './Repos.css';

const Repos = ({ repos }) => (
  <div className='Repos'>
    {repos.map((repo) => (
      <RepoItem repo={repo} key={repo.id} />
    ))}
  </div>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
