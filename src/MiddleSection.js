import React from "react";
import "./MiddleSection.css";
import science from "./assets/science.png";
import futureofvr from "./assets/futureofvr.jpg";
import heart from "./assets/heart.jpeg";
import book from "./assets/book.JPG";
import education from "./assets/education.jpg";
import traning from "./assets/traning.jpg";
import video2 from "./assets/video2.mp4";
function MiddleSection() {
	return (
		<div>
			<div
				className="middle"
				style={{ backgroundColor: "grey", color: "white", overflow: "hidden" }}
			>
				<div id="demo" class="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#demo"
							data-bs-slide-to="0"
							className="active"
						></button>
						<button
							type="button"
							data-bs-target="#demo"
							data-bs-slide-to="1"
						></button>
						<button
							type="button"
							data-bs-target="#demo"
							data-bs-slide-to="2"
						></button>
					</div>

					<div className="carousel-inner">
						<div className="carousel-item active">
							<video
								src={video2}
								alt="Los Angeles"
								className="d-block"
								style={{ width: "100%", textAlign: "right" }}
								controls
							/>
						</div>
						<div className="carousel-item">
							<img
								src="chicago.jpg"
								alt="Chicago"
								className="d-block"
								style={{ width: "100%" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="ny.jpg"
								alt="New York"
								className="d-block"
								style={{ width: "100%" }}
							/>
						</div>
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#demo"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon"></span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#demo"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon"></span>
					</button>
				</div>
				<div
					className="class10"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<div>
						<h1 style={{ marginLeft: "10px" }}>VR In Education & Industry</h1>
						<p>
							Learnofi-Ed is a versatile platform using the power of virtual and
							augmented reality for education and training.
						</p>
						<img
							src={science}
							alt="Girl in a jacket"
							width="100%"
							height="200"
							style={{ objectFit: "contain" }}
						/>
					</div>
					<div>
						<h1 style={{ marginLeft: "10px" }}>
							Download the free AR/VR guide
						</h1>
						<p>
							read our informative guide to using virtual and augmented reality
							in education
						</p>
						<img
							src={futureofvr}
							alt="Girl in a jacket"
							width="100%"
							height="200"
							style={{ objectFit: "contain" }}
						/>
						<p>
							introd learnofie-ed a groundbreaking technology designed to help
							raise engagement & increase knowledge retention for student of all
							ages,everything your school needs...
						</p>
					</div>
					<div>
						<h1 style={{ marginLeft: "10px" }}>standalone vr headsets</h1>
						<img
							src={heart}
							alt="Girl in a jacket"
							width="100%"
							height="200"
							style={{ objectFit: "contain" }}
						/>
					</div>
					<div>
						<h1 style={{ marginLeft: "10px" }}>Simple classroom controls</h1>
						<img
							src={book}
							alt="Girl in a jacket"
							width="100%"
							height="200"
							style={{ objectFit: "contain" }}
						/>
						<div>
							<h1 style={{ marginLeft: "10px" }}>
								Curriculumed aligned content....
							</h1>
							<img
								src={education}
								alt="Girl in a jacket"
								width="100%"
								height="200"
								style={{ objectFit: "contain" }}
							/>
						</div>
						<div>
							<h1 style={{ marginLeft: "10px" }}>
								Setup,training & Support...
							</h1>
							<img
								src={traning}
								alt="Girl in a jacket"
								width="100%"
								height="200"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
			</div>
		</div>
	);
}

export default MiddleSection;
