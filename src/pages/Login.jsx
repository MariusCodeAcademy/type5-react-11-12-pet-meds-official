import { useContext } from 'react';
import Button from '../components/UI/Button/Button';
import AuthContext from '../store/authContext';
import Container from './../components/UI/Container';

function Login() {
  const { login } = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();
    const username = 'james';
    const pass = '123';
    login(username, pass);
  }

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='password' />
        <Button>Login</Button>
      </form>
    </Container>
  );
}

export default Login;
