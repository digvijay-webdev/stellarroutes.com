<template>
    <div class="main">
        <v-container>
            <v-row>
                <v-col class="mt-2" cols="12" sm="12" md="12" lg="4">
                    <div class="slider">
                        <div class="slider-container">
                            <div class="slide x"></div>
                            <div class="slide y"></div>
                            <div class="slide z"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="8">
                    <h1 class="heading">
                        WE ARE YOUR TECH <span>WIZARDS!</span>
                    </h1>
                    <p class="text-subtitle">
						With our magic touch, we turn your tech dreams into reality. Our expertise in crafting innovative solutions tailored to your needs makes us your go-to tech wizards. Let's create wonders together!
					</p>
                    <router-link to="/contact">
                        <v-btn color="#1D1D1D" outlined rounded large>Let's Get Started</v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.main {
    background: #e1e3e4;
    margin: 18px 0 0 0;
	width: 100%;
	height: 80vh;
	font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heading {
    font-size: 84px;
    font-weight: bolder;
}

.heading span {
    color: #E04F39; /* default color */
    animation-name: change;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    transition: all .3s ease;
}

@keyframes change {
    0% {
        color: #4CAF4F;
    }
    50% {
        color: #E04F39;
    }
    100% {
        color: #2096F3;
    }
}

@media screen and (max-width: 1200px) {
    .main {
        margin-top: 26px;
        padding: 24px 0;
        height: max-content;
    }
}

@media screen and (max-width: 660px) {
    .heading {
        margin-top: 24px;
        font-size: 54px;
    }
}


/* ONLY 3DCUBE ANIMATION BELOW THIS AREA */

.slider {
    border: 1px solid red;
	width: 200px;
	height: 200px;
 	margin: auto;
	-webkit-perspective: 600px;
	perspective: 600px;
}

.slider {
	-webkit-transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
	transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
}

.slider-container {
	width: inherit;
	height: inherit;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: rotateY(0deg) rotateX(0deg);
	transform: rotateY(0deg) rotateX(0deg);
}

.slide, .slide:after, .slide:before {
	display: block;
	width: inherit;
	height: inherit;
	background: url('https://cdn.dribbble.com/users/5031/screenshots/7008431/dribbble.png');
	position: absolute;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	background-size: cover;
	background-position: center;
}

.slide.x {
	-webkit-transform: rotateY(90deg);
	transform: rotateY(90deg);
} 

.slide.x:after {
	content: '';
	background-image: url('https://cdn.dribbble.com/users/730703/screenshots/6988911/elenidebo-thisiscolossal-theroad-forchicagodesignmuseum.jpg');
	-webkit-transform: translateZ(100px) rotateZ(-90deg);
    transform: translateZ(100px) rotateZ(-90deg);
}

.slide.x:before {
	content: '';
	background-image: url('https://cdn.dribbble.com/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg');
	-webkit-transform: translateZ(-100px) rotateZ(-90deg);
	transform: translateZ(-100px) rotateZ(-90deg);
}

.slide.y {
	-webkit-transform: rotateX(90deg);
	transform: rotateX(90deg);
} 

.slide.y:after {
	content: '';
	background-image: url('https://cdn.dribbble.com/users/63407/screenshots/5705689/dribbble_moonlight_2x.png');
	-webkit-transform: translateZ(100px) scale(-1);
	transform: translateZ(100px) scale(-1);
}

.slide.y:before {
	content: '';
    background-image: url('https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape_2x.jpg');
    -webkit-transform: translateZ(-100px);
    transform: translateZ(-100px);
}

.slide.z {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
} 

.slide.z:after {
    content: '';
    background-image: url('https://cdn.dribbble.com/users/3178178/screenshots/7013817/the_caravan_by_patryk_wojciechowicz_2x.png');
    -webkit-transform: translateZ(100px);
	transform: translateZ(100px);
}

.slide.z:before {
    content: '';
    background-image: url('https://cdn.dribbble.com/users/1361661/screenshots/6673317/music_girl.png');
    -webkit-transform: translateZ(-100px);
    transform: translateZ(-100px);
}


.slider-container {
    -webkit-animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
    animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
}

@-webkit-keyframes rotate {
	0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
	15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
	25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
	40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
	55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
	70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
	90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
}

@keyframes rotate {
	0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
	15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
	25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
	40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
	55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
	70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
	90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
}


.shadow {
	display: block;
	width: 200px;
	height: 200px;
	background: rgba(0,0,0,0.75);
	position: absolute;
	top: 60%;
	-webkit-transform: rotateX(90deg);
	        transform: rotateX(90deg);
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
	-webkit-filter: blur(20px);
	        filter: blur(20px);
	left: 0;
	right: 0;
	margin: auto;
	-webkit-animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
	animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
}

@-webkit-keyframes rotateShadow {
    0%, 10% {-webkit-transform: rotateY(0deg) rotateX(90deg);}	
	15%, 20% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
	20.1%, 20.9% {-webkit-transform: rotateY(180deg) rotateX(90deg) translatez(5px);}
	25%, 35% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
	35.1%, 35.9% {-webkit-transform: rotateY(180deg) rotateX(90deg) translatez(-5px);}
	40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
	55%, 65% {-webkit-transform: rotateY(0deg) rotateX(90deg);}
	70%, 80% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
	90%, 99% {-webkit-transform: rotateY(90deg) rotateX(90deg);}
	99.1%, 99.9% {-webkit-transform: rotateY(90deg) rotateX(90deg) translatez(-5px);}
}
</style>
