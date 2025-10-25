import StyledLoginPageContainer from './styles';
import logo from '../../assets/sfp_logo.svg';
import Input from '../../components/Input/input.component';
import Button from '../../styles/Buttons';

const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      <section>
        <div>
          <img src={logo} alt='logo' />
        </div>

        <form action=''>
          <Input label='Email' />
          <Input label='Senha' />
          <Button>Log in</Button>
        </form>
      </section>
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
