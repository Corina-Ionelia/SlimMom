import RegistrationForm from 'components/RegistrationForm/RegistrationForm'; // importăm formularul de înregistrare
import Container from 'components/Container/Container'; // importăm containerul pentru layout

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
