import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

import './User.css';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className='User'>
      <Link to='/' className='User_back'>
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check User_hireable' />
      ) : (
        <i className='fas fa-times-circle User_not_hireable' />
      )}
      <div className='User_card'>
        <div className='User_avatar'>
          <img
            src={avatar_url}
            className='User_avatar_image'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <div>
              <h3>Bio</h3>
              <p>{bio}</p>
            </div>
          )}
          <a
            href={html_url}
            className='User_visit_github'
            target='_blank'
            rel='noreferrer noopener'
          >
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <div>
                  <strong>Username: </strong> {login}
                </div>
              )}
            </li>
            <li>
              {company && (
                <div>
                  <strong>Company: </strong> {company}
                </div>
              )}
            </li>
            <li>
              {blog && (
                <div>
                  <strong>Website: </strong>
                  <a href={blog} target='_blank' rel='noreferrer noopener'>
                    {blog}
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='User_badges'>
        <div className='User_badge_followers'>Followers: {followers}</div>
        <div className='User_badge_following'>Following: {following}</div>
        <div className='User_badge_public_repos'>
          Public Repos: {public_repos}
        </div>
        <div className='User_badge_public_gists'>
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
