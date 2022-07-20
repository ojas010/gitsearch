import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import Octocat from '../images/Octocat.png';
const Login = () => {
  const {loginWithRedirect} = useAuth0()
  return <Wrapper>
    <div className='container'>
      <img src={Octocat} alt="logo" />
      <p>
      <h1>GitSearch</h1>
      <h4>A GitHub User Library</h4>
      </p>
      <br></br>
      <button className='btn' onClick={loginWithRedirect}>
        Login / Sign Up
      </button>
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 0rem;
  }
  h4 {
    color: var(--clr-primary-5);
    font-weight: 600;
  }
`;
export default Login;
