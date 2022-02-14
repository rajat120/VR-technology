import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import VRTechnology from "./VRTechnology";
import Login from "./Login";
import Signup from "./Signup";

function App() {
	return (
		<div className="App">
			<Router path="/">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/product-overview" element={<VRTechnology />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
