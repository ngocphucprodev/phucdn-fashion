import { Container } from '@mui/material';
import React from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import Slider from './components/Slider';
import Dashboard from './pages/admin/Dashboard';
import Routes from './routes/Routes';
function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  let conponent
  // console.log(isLoggedIn.role)
  if (isLoggedIn) {
    (isLoggedIn.role ? conponent = <Dashboard /> : conponent = <>
      <Header />
      {/* <Slider /> */}
      <Container sx={{ mt: 25 }}>
        <Routes />
      </Container>
      {/* <Footer /> */}
    </>)
  } else {
    conponent
      = <>
        <Header />
        {/* <Slider /> */}
        <Container sx={{ mt: 25 }}>
          <Routes />
        </Container>
        {/* <Footer /> */}
      </>
  }

  return (
    <React.Fragment>
      {/* {isLoggedIn.role ? <Dashboard />
        :
        <>
          <Header />
          <Container sx={{ mt: 25 }}>
            <Routes />
          </Container>
        </>
      }
      {/* <Header />

      <Container sx={{ mt: 25 }}>
        <Routes />
      </Container> */}
      {conponent}
    </React.Fragment>
  );
}

export default App;
