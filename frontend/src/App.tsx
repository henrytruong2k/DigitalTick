import Footer from 'components/Global/Footer/Footer';
import Header from 'components/Global/Header/Header';
import About from 'pages/About/About';
import Active from 'pages/Active/[slug]';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/active/:slug" element={<Active />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
