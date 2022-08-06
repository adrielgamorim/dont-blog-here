import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import { auth } from './firebase-config'
import { signOut } from 'firebase/auth';
import Home from './Components/pages/Home';
import CreatePost from './Components/pages/CreatePost';
import Login from './Components/pages/Login';
import PageNotFound from './Components/pages/PageNotFound';
import { GlobalStyle } from './Components/styled/GlobalStyle';
import { Navbar, Logo, LogoutButton } from './Components/styled/Navbar.styled';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  const userOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = './login'
    })
  }

  return (
    <>
      <GlobalStyle />
        <Router>

          <Logo>
            <Link to='/'> <img src="./images/logo.svg" alt="blog's logo" /> </Link>
            <Link to='/'><p>Don't Blog Here!</p></Link>
          </Logo>

        <Navbar>
          <Link to='/'> Home </Link>
          {!isAuth ? (
            <>
              <span />
              <Link to='/login'> Login </Link>
            </>
          ) : (
            <>
              <span />
              <Link to='/create-post'> Create post </Link>
              <span />
              <LogoutButton onClick={userOut}>
                Log Out
              </LogoutButton>
            </>
          )}
        </Navbar>
          
          <Routes>
            <Route path='/' element={ <Home isAuth={isAuth} /> } />
            <Route path='/create-post' element={ <CreatePost isAuth={isAuth} /> } />
            <Route path='/login' element={ <Login setIsAuth={setIsAuth} /> } />
            <Route path='/*' element={ <PageNotFound /> } />
          </Routes>

        </Router>
    </>
  );
}

export default App;
