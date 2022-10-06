import React, { useState } from 'react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
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
  const [user, setUser] = useState<User>({} as User)

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
    <Container>
      <Form>
        <button onClick={handleGoogleSignIn}>Google</button>
      </Form>
      {/* <ImgTopRight />
      <ImgBottomRight /> */}
      <Imgleft />
    </Container>
    </>
  );
}

export default Login;