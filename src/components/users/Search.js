import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

import './Search.css';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert(
        'Please enter something in the search field',
        'light'
      );
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='Search'>
      <form className='Search_form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' className='Search_submit' />
      </form>
      {githubContext.users.length > 0 && (
        <button className='Search_clear' onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
