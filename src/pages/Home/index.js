import React from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row, Button, Icon, Carousel } from 'react-materialize';
import Lottie from 'react-lottie';
import ReactCompareImage from 'react-compare-image';
import animationData from '../../Lotties/girls-face.json';
import { motion } from "framer-motion";
import avatar from '../../assets/img/avatar.svg';
import olhos from '../../assets/img/olhos.svg';
import olhos2 from '../../assets/img/olhos2.svg';
import flower from '../../assets/img/flower.svg';
import { Link } from 'react-router-dom';

function Home() {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<>
			<main className="home">
				<Row className="main">
					<div className="col s12 m6 l6 animation">
						<Lottie
							options={defaultOptions}
						/>
					</div>

					<div className="col s12 m6 l6">
						<h1>Estética Rhoades</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                          </p>
						<Link to="/sobre">
							<Button
								node="button"
								waves="light"
							>
								Saber mais
                                                        <Icon left>
									add
                                                        </Icon>
							</Button>
						</Link>
					</div>
				</Row>
			</main>

			<div className="row benefitsBox">
				<div className="benefits">
					<div className="col s12 m4 l4">
						<motion.div
							className="square"
							whileHover={{ scale: 0.9 }}
							whileTap={{ scale: 1.3 }}
						>
							<div className="descBenefit">
								<img
									src={olhos}
									alt="olhos"
									width={150}
									height={150}
								/>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
							</div>

						</motion.div>
					</div>

					<div className="col s12 m4 l4">
						<motion.div
							className="square"
							whileHover={{ scale: 0.9 }}
							whileTap={{ scale: 1.3 }}
						>
							<div className="descBenefit">
								<img
									src={olhos2}
									alt="olhos"
									width={150}
									height={150}
								/>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        </p>
							</div>

						</motion.div>
					</div>

					<div className="col s12 m4 l4">
						<motion.div
							className="square"
							whileHover={{ scale: 0.9 }}
							whileTap={{ scale: 1.3 }}
						>
							<div className="descBenefit">
								<img
									src={olhos}
									alt="olhos"
									width={150}
									height={150}
								/>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        </p>
							</div>

						</motion.div>
					</div>

				</div>
			</div>

			{/* Compare */}
			<div className="compare">
				<h2>Lorem Ipsum</h2>
				<div className="container">
					<ReactCompareImage
						leftImage="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"
						leftImageLabel="Antes"
						rightImage="https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg"
						rightImageLabel="Depois"
						sliderLineColor="#9E53AB"
						handle={
							<img
								src={flower}
								alt="logo"
								width="60"
								height="60"
							/>
						}
					/>
				</div>
			</div>

			{/* Carousel */}
			<div className="carouselHome">
				<h3>Depoimentos</h3>

				<Carousel
					carouselId="Carousel-2"
					className="black-text center"
				>
					<div className="comment">
						<div>
							<img
								src={avatar}
								alt="Julia"
								width={120}
								height={120}
							/>
						</div>
						<h4>Julia</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          </p>
					</div>

					<div className="comment">
						<div>
							<img
								src={avatar}
								alt="Julia"
								width={120}
								height={120}
							/>
						</div>
						<h4>Julia</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          </p>
					</div>

					<div className="comment">
						<div>
							<img
								src={avatar}
								alt="Julia"
								width={120}
								height={120}
							/>
						</div>
						<h4>Julia</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          </p>
					</div>

					<div className="comment">
						<div>
							<img
								src={avatar}
								alt="Julia"
								width={120}
								height={120}
							/>
						</div>
						<h4>Julia</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          </p>
					</div>

				</Carousel>
			</div>
		</>
	)
}

export default Home;