import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

import './Alert.css';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className='Alert'>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
