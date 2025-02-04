import React, { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
import Loader from 'components/Loader/Loader';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

function Home() {
  return (
    <div className="background mainBackground">
      <section className="top-bottom">
        <Container className="left-right">
          <CaloriesCalc />
          <Outlet />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </Suspense>
        </Container>
      </section>
      <div className="footer-margin"></div>
    </div>
  );
}

export default Home;