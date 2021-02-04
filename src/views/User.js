import React from 'react';
import User from '../components/users/User';

import './User.css';

const UserView = ({ match }) => {
  return (
    <div className='UserView'>
      <User match={match} />
    </div>
  );
};

export default UserView;
