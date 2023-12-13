  import React from 'react'
import './Navbar.css'
 
 const Navbar = () => {
   return (
     <div className="n-wrapper">
       <div className="n-left">
         <div className="n-name">ELOHO</div>
         <span>TOGGLE</span>
       </div>
       <div className="n-right">
         <div className="n-list">
           <ul>
             <li>HOME</li>
             <li>SERVICES</li>
             <li>EXPERIENCE</li>
             <li>PORTFOLIO</li>
             <li>TESTIMONIALS</li>
           </ul>
         </div>
         <button className="button n-button">
            CONTACT
         </button>
       </div>
     </div>
   );
 }
 
 export default Navbar