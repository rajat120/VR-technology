import React from "react";

function Footer() {
	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div style={{ background: "#0077b3", width: "100%", height: "150px" }}>
					<h5 style={{ margin: "20px" }}>
						SUBSCRIBE
						<span>
							<h6>Send me ClassVR news, events and Exclusive offers</h6>
						</span>
					</h5>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
						}}
					>
						<div>
							Email: &nbsp;
							<input type="text"></input>
						</div>
						<div>
							Name: &nbsp;
							<input type="text"></input>
						</div>
						<div>
							<button>join now</button>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					backgroundColor: "#002233",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div>
					<h4 style={{ color: "white", padding: "10px" }}>COMPANY</h4>
					<h5 style={{ color: "white", padding: "5px" }}>Careers</h5>
					<h5 style={{ color: "white", padding: "5px" }}>About Us</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Contact Us</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Avantis World</h5>
				</div>
				<div>
					<h4 style={{ color: "white", padding: "10px" }}>POLICIES</h4>
					<h5 style={{ color: "white", padding: "5px" }}>Privacy</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Terms of Service</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Terms & Conditions</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Health & Safety</h5>
				</div>
				<div>
					<h4 style={{ color: "white", padding: "10px" }}>RESOURCES</h4>
					<h5 style={{ color: "white", padding: "5px" }}>Downloads</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Site Map</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Blog</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Research</h5>
				</div>

				<div>
					<h4 style={{ color: "white", padding: "10px" }}>SUPPORT</h4>
					<h5 style={{ color: "white", padding: "5px" }}>Customer Support</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Partner Zone</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Blog</h5>
					<h5 style={{ color: "white", padding: "5px" }}>Find a Reseller</h5>
				</div>
			</div>
			<div style={{ background: "gray", padding: "40px" }}>
				<h5> Copyright © 2020 Avantis Systems Ltd.</h5>
			</div>
		</div>
	);
}

export default Footer;
