# Code Citations

## License: unknown
https://github.com/Corina-Ionelia/SlimMom/blob/main/src/pages/Register/Register.jsx

import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Container from 'components/Container/Container';

function Register() {
  return (
    <div className="background mainBackground">
      <section className="top-bottom">
        <Container className="left-right">
          <RegistrationForm />
        </Container>
      </section>
    </div>
  );
}

export default Register;