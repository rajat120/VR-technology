import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "./assets/LOGO1.png";
import "./Header.css"
function Header() {
  return <div>
   	<nav>
       <Link to="/">
				<div className="logo">
					<img
						src={LOGO}
						width="104"
						height="74"
						style={{ borderRadius: "50%" }}
					/>
				</div>
        </Link>
				<input type="checkbox" id="click" />
				<label for="click" class="menu-btn">
					<i className="fas fa-bars" ></i>
				</label>
				<ul>
					<li>
						<Link style={{textDecoration:"none"}} className="active" to="/">
							Home
						</Link>
					</li>
					<li>
					<Link  style={{textDecoration:"none"}} to="learno">LEARNOFI-ED</Link>
					</li>
					<li>
          <Link  style={{textDecoration:"none"}} to="/about">ABOUT</Link>
					</li>
					<li>
						<Link  style={{textDecoration:"none"}} to="/contact">CONTACT</Link>
					</li>
					<li>
          <Link  style={{textDecoration:"none"}} to="/login">LOGIN</Link>
					</li>
          <li>
          <Link  style={{textDecoration:"none"}} to="/signup">SIGNUP</Link>
					</li>
				</ul>
			</nav>
  </div>;
}

export default Header;
