import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UserItem.css';

const UserItem = ({ user: { avatar_url, login } }) => (
  <div className='UserItem'>
    <img
      src={avatar_url}
      alt='avatar'
      className='UserItem_image'
      style={{ width: '60px' }}
    />
    <h3>{login}</h3>
    <div>
      <Link to={`/user/${login}`} className='UserItem_more'>
        More
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
