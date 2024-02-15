import { useState } from "react";
import { useEffect } from "react";
// import SideBar from "./Components/SideBar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch as Switching } from "react-router";
import Switch from '@material-ui/core/Switch'
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import avatar from "./images/Logo.png";



function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div className="App">
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`} >
        <NavigationStyled>
          <div className="avatar">
              <img src={avatar} alt=""/>
          </div>
          <ul className="nav-items">
              <li className="nav-item">
                  <NavLink onClick={() => setNavToggle(!navToggle)} to="/" activeClassName="active-class" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink onClick={() => setNavToggle(!navToggle)} to="/about" activeClassName="active-class" exact>About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink onClick={() => setNavToggle(!navToggle)} to="/resume" activeClassName="active-class" exact>Resume</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink onClick={() => setNavToggle(!navToggle)} to="/portfolios" activeClassName="active-class" exact>Portfolio</NavLink>
              </li>
              {/* <li className="nav-item">
                  <NavLink onClick={() => setNavToggle(!navToggle)} to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
              </li> */}
              <li className="nav-item">
                  <NavLink onClick={() => setNavToggle(!navToggle)} to="/contact" activeClassName="active-class" exact>Contact</NavLink>
              </li>
          </ul>
          <footer className="footer">
              <p>@2024</p>
          </footer>
      </NavigationStyled>
        </SidebarStyled>

        <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="small"
                  onClick={themeToggler}
                  
                />
              </div>
            </div>
        </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>

          <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/portfolio" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/resume" exact>
              <ResumePage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/blogs" exact>
               <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switching>

        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;


const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar{
      width: 50%;
      border-bottom: 1px solid var(--border-color);
      text-align: center;
      padding: 1rem 0;
      img{
          width: 70%;
          border-radius: 50%;
          border: 8px solid var(--border-color);
      }
  }
  .nav-items{
      width: 100%;
      text-align: center;
      .active-class{
          background-color: var(--primary-color-light);
          color: white;
      }
      li{
          display: block;
          a{
              display: block;
              padding: .45rem 0;
              position: relative;
              z-index: 10;
              text-transform: uppercase;
              transition: all .4s ease-in-out;
              font-weight: 600;
              letter-spacing: 1px;
              &:hover{
                  cursor: pointer;
                  color: var(--white-color);
              }
              &::before{
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 0;
                  height: 50%;
                  background-color: var( --primary-color);
                  transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                  opacity: 0.21;
                  z-index: -1;
              }
          }
          a:hover::before{
              width: 100%;
              height: 100%;
          }
      }
  }
  footer{
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      width: 100%;
      p{
          padding: 1.3rem 0;
          font-size: 1.1rem;
          display: block;
          text-align: center;
      }
  }
`;

export default App;