import React from 'react'

export const Header = () => {
    return (
        <div className="Header">
            <div className="headTag">
               <h3>Make a website that connects your venue with your fans</h3>
               <p>We work with you for ypur long term success</p>
               <input 
                 type="text"
                 placeholder="Enter Email"
               />
               <button>Submit</button>
              <div className="headGrid">
                 <div className="one">
                     <h3>SEO</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                 </div>
                 <div className="two">
                     <h3>Branding</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                 </div>
                 <div className="three">
                     <h3>Design</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                 </div>
              </div>
            </div>
        </div>
    )
}
