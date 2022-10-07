import { useState } from 'react';

import photo from '../../assets/profile_icon.svg';

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
  User
} from 'firebase/auth';

interface SignIn {
  email: string;
  password: string;
}

export function Login() {
  const [userGoogle, setUserGoogle] = useState<User | null>({} as User)
  const [userGithub, setUserGithub] = useState<User | null>({} as User)
 
  const [ishoverButton, setIshoverButton] = useState(1)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleGoogleSignIn() {
    const providerGoogle = new GoogleAuthProvider();

    signInWithPopup(auth, providerGoogle)
      .then(result => {
        setUserGoogle(result.user);

        localStorage.setItem("userName", `${result.user.displayName}` )
        localStorage.setItem("userEmail", `${result.user.email}` )
        localStorage.setItem("userPhoto", `${result.user.photoURL}` )

        setTimeout(() => window.location.href = '/main', 500)
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

        localStorage.setItem("userName", `${res.user.displayName}` )
        localStorage.setItem("userEmail", `${res.user.email}` )
        localStorage.setItem("userPhoto", `${res.user.photoURL}` )

        setTimeout(() => window.location.href = '/main', 500)
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleSignIn () {
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      console.log(res)
      setTimeout(() => window.location.href = '/main', 500)
      localStorage.setItem("userName", 'Thiago Elias Lima Campos' )
      localStorage.setItem("userEmail", 'thiagolimacampos@gmail.com' )
      localStorage.setItem("userPhoto", `${photo}` )
      setEmail('');
      setPassword('');
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Container>
        <Form>
          <Title>Login</Title>

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
              border: "none",
            }}
            onMouseEnter={() => setIshoverButton(1)}
            onMouseLeave={() => setIshoverButton(2)}
            onMouseDown={() => setIshoverButton(3)}
          >
            <p>Entrar</p>
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