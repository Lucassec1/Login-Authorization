import React, { useState } from 'react';

import { 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signInWithPopup, 
  signOut,
  User 
} from 'firebase/auth';
import { auth } from '../../services/firebase';

import {
  Container,
  Form,
  Imgleft,
  // ImgTopRight,
  // ImgBottomRight,
  // ContBackground
} from './styles';

export function Login() {
  const [userGoogle, setUserGoogle] = useState<User | null>({} as User)
  const [userGithub, setUserGithub] = useState<User>({} as User)

  function handleGoogleSignIn() {
    const providerGoogle = new GoogleAuthProvider();

    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        setUserGoogle(result.user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleGithubSignIn() {
    const providerGithub = new GithubAuthProvider();

    signInWithPopup(auth, providerGithub)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function Signout() {
    signOut(auth)
    .then((response) => {
      console.log('Signout successful!')
      setUserGoogle(null)
      // setUserGithub(null)
    })
    .catch((error) => {
      console.log('Signout failed')
    });
 }

  return (
    <>
      <Container>
        <Form>
          <button onClick={handleGoogleSignIn}>Google</button>
          <button onClick={handleGithubSignIn}>Github</button>
        </Form>
        {/* <ImgTopRight />
        <ImgBottomRight /> */}
        <Imgleft />
      </Container>
    </>
  );
}

export default Login;