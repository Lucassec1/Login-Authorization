import React, { useState } from 'react';

import {
  Container,
  Card,
  CardImg,
  CardName,
  CardEmail,
} from './styles';

import { auth } from '../../services/firebase';
import { 
  signOut,
} from 'firebase/auth';


function MainPage () {
  const [ishoverButton, setIshoverButton] = useState(1)

  // const [googleUser, setGoogleUser] = useState();
  // const childToParentGoogle = (childdata: React.SetStateAction<undefined>) => {
  //   setGoogleUser(childdata);
  // }

  // const [githubUser, setGithubUser] = useState();
  // const childToParentGithub = (childdata: React.SetStateAction<undefined>) => {
  //   setGithubUser(childdata);
  // }

  function Signout() {
    signOut(auth)
    .then(response => {
      console.log('Signout successful!')
      setTimeout(() => window.location.href = '/login', 500)
      // setUserGoogle(null)
      // setUserGithub(null)
    })
    .catch(error => {
      console.log('Signout failed')
    });
  }

  console.log(localStorage)

  return (
    <Container>
      <Card>
        <CardImg photo={localStorage.getItem('userPhoto')}></CardImg>
        <CardName>{localStorage.getItem('userName')}</CardName>
        <CardEmail>{localStorage.getItem('userEmail')}</CardEmail>
        <button 
          onClick={Signout}
          style={{
            background: ishoverButton === 1 ? `var(--green1)` :
            ishoverButton === 2 ? 'var(--green2)' :
            ishoverButton === 3 ? 'var(--secondary)' : 'var(--green1)',
            border: "none",
          }}
          onMouseEnter={() => setIshoverButton(1)}
          onMouseLeave={() => setIshoverButton(2)}
          onMouseDown={() => setIshoverButton(3)}
        >
          <p>Sair</p>
        </button>
      </Card>
    </Container>
  )
}

export default MainPage;

