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
            </div>
        </div>
    )
}
