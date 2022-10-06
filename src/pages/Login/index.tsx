import { useState } from 'react';

import illustrationLeft from '../../assets/illustration_left.svg';
import illustrationBottomRight from '../../assets/illustration_bottom_right.svg';
import illustrationTopRight from '../../assets/illustration_top_right.svg';
import google from '../../assets/google_icon.svg';
import github from '../../assets/github_icon.svg';

import {
  Container,
  Form,
  Input,
  Title,
  Divider,
  Imgleft,
  ImgTopRight,
  ImgBottomRight,
} from './styles';

import { auth } from '../../services/firebase';
import { 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signInWithPopup, 
  signInWithEmailAndPassword,
  signOut,
  User 
} from 'firebase/auth';

interface SignIn {
  email: string;
  password: string;
}

export function Login() {
  const [userGoogle, setUserGoogle] = useState<User | null>({} as User)
  const [userGithub, setUserGithub] = useState<User>({} as User)
  const [ishoverButton, setIshoverButton] = useState(1)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleGoogleSignIn() {
    const providerGoogle = new GoogleAuthProvider();

    signInWithPopup(auth, providerGoogle)
      .then(result => {
        setUserGoogle(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function handleGithubSignIn() {
    const providerGithub = new GithubAuthProvider();

    signInWithPopup(auth, providerGithub)
      .then(res => {
        setUserGithub(res.user);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleSignIn () {
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      console.log(res)
      setEmail('');
      setPassword('');
    })
    .catch(err => {
      console.log(err)
    })
  }

  function Signout() {
    signOut(auth)
    .then(response => {
      console.log('Signout successful!')
      setUserGoogle(null)
      // setUserGithub(null)
    })
    .catch(error => {
      console.log('Signout failed')
    });
  }

  return (
    <>
      <Container>
        <Form>
          <Title>Inscreva-se</Title>
          <div>
            <p>Email</p>
            <Input
              type="email"
              placeholder='Digite seu Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Senha</p>
            <Input
              type="password"
              placeholder='Digite sua Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleSignIn} 
            style={{
              background: ishoverButton === 1 ? `var(--green1)` :
                          ishoverButton === 2 ? 'var(--green2)' :
                          ishoverButton === 3 ? 'var(--secondary)' : 'var(--green1)',
              marginBottom: "24px",
              border: "1px solid var(--grey1)"
            }}
            onMouseEnter={() => setIshoverButton(1)}
            onMouseLeave={() => setIshoverButton(2)}
            onMouseDown={() => setIshoverButton(3)}
          >
            <p>Login</p>
          </button>

          <Divider />

          <button 
            onClick={handleGoogleSignIn} 
            style={{
              gap: "5px",
              marginTop: "16px",
            }}
          >
            <img src={google} alt="google-icon"/>
            <p>Continuar com o Google</p>
          </button>
          
          <button 
            onClick={handleGithubSignIn}
            style={{
              gap: "5px",
              marginTop: "16px",
            }}
          >
            <img src={github} alt="github-icon"/>
            <p>Continuar com o Github</p>
          </button>
        </Form>

        <Imgleft src={illustrationLeft} />
        <ImgTopRight src={illustrationTopRight} />
        <ImgBottomRight src={illustrationBottomRight} /> 
      </Container>
    </>
  );
}

export default Login;