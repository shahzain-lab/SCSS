import React from 'react';
import logo from '../images/logo.png';

export const NavBar =() => {
    return(
        <div className="Navbar">
           <nav>
               <img src={logo} alt="logo" width="7%"/>

               <ul>
                   <li className="active">Home</li>
                   <li>About</li>
                   <li>Services</li>
                   <li>Blogs</li>
                   <li>Content</li>
               </ul>
           </nav>
        </div>
    )
}