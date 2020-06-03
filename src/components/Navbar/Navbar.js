import React, { Component } from 'react';

import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';



class NavBar extends Component {


    render() {
        return(
          <div className={styles.Navbar} id="home">
              <div className={styles.Name}>
                   <NavLink to={{hash: "#home"}}>Matthew Murphy</NavLink>
              </div>
          </div>
        );
    }

}


export default NavBar;