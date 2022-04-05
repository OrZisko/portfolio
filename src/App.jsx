import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/style/main.scss'

import Home from './pages/Home';
import Site from './pages/Site';
import SideBar from './cmps/SideBar.cmp';
import { useState } from 'react';

export function App() {
  const [isShown, onIsShown] = useState(false)
  const onShowMenu = () => {
    onIsShown(prevIsShown => prevIsShown = !prevIsShown)
  }
  return (
    <Router>
      <div id="app">
        <div className='burger-menu' onClick={onShowMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        <SideBar closeSideBar={onShowMenu} isShown={isShown}></SideBar>
        <main className='app-container'>
          <Switch>
            <Route component={Site} path='/site/:id'></Route>
            <Route component={Home} path='/' ></Route>
          </Switch>
        </main>
      </div>
    </Router >
  );
}

