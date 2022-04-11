import Button from '../components/UI/Button/Button';
import Container from './../components/UI/Container';

function Login() {
  return (
    <Container>
      <h2>Login</h2>
      <form>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='password' />
        <Button>Login</Button>
      </form>
    </Container>
  );
}

export default Login;
