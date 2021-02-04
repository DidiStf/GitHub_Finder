import React from 'react';
import PropTypes from 'prop-types';

import './RepoItem.css';

const RepoItem = ({ repo }) => (
  <div className='RepoItem'>
    <h3>
      <a href={repo.html_url} target='_blank' rel='noreferrer noopener'>
        {repo.name}
      </a>
    </h3>
  </div>
);

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
