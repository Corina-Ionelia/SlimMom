import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import Container from 'components/Container/Container';

function Login() {
  return (
    <div className="background mainBackground">
      <section className="top-bottom">
        <Container className="left-right">
          <LoginForm />
        </Container>
      </section>
    </div>
  );
}

export default Login;