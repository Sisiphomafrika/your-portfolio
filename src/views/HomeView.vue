<template>
    
            <div class="popup-body about-container">
                <div class="img-frame">
                    <img src="https://i.ibb.co/YDsvwSm/1710985860647.jpg" alt="" />
                </div>
                <div class="hero-content">
                    <h1>Sisipho Mafrika</h1>
                    <p>
                        I'm a front-end developer. I have dedicated myself to creating visually appealing and user-friendly websites. I'm always open to using new skill sets and I believe in the power of collaboration, working closely with designers and back-end developers to deliver cohesive and effective solutions.
                    </p>
                </div>
            </div>
            <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>30 Cole street,Observatory Cape Town, 7925</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>081 795 9869</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>sisiphomafrika99@gmail.com.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="" class="img-fluid" alt="logo"></a>
                            </div>
                            <div class="footer-text">
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address">
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="">Anup</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<style >
@import url("https://fonts.googleapis.com/css2?family=Marhey:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
}

img {
  width: 100%;
  pointer-events: none;
  user-select: none;
}

ul {
  list-style-type: none;
}

h1 {
  font-family: "Marhey", sans-serif;
  font-size: clamp(1.9rem, 2vw, 3rem);
  opacity: 0;
  animation: title 1.1s ease 0.3s 1 normal forwards;
}

@keyframes title {
  0% {
    opacity: 0;
    letter-spacing: 10px;
    color: rgba(255, 255, 255, 0.795);
  }

  100% {
    opacity: 1;
    letter-spacing: 0;
    color:#ffffff;
  }
}

.hidden {
  display: none;
}

html,
body {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/773ac512-567c-4316-81c9-511db0c8a094);
  background-repeat: no-repeat;
  background-size: cover;
}

section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* ------------ */
/* ICON STYLES */

.icon-container {
  position: absolute;
  bottom: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  border: 1px soli black(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
}

.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 12px;
  color: #fff;
  font-size: 1.5rem;
  padding: 5px;
  cursor: pointer;
  transition: all 0.4s;
}

.icon-box:hover {
  transform: scale(1.1);
}

.about {
  background: rgb(182, 164, 248);
  background: linear-gradient(
    30deg,
    rgb(182, 164, 248) 0%,
    rgb(75, 52, 159) 70%
  );
}

.testimonial {
  background-color: #f6c66e;
  background-image: linear-gradient(30deg, #f6c66e 0%, rgb(168, 78, 22) 100%);
}

.projects {
  background: rgb(169, 207, 124);
  background: linear-gradient(
    310deg,
    rgb(169, 207, 124) 0%,
    rgb(77, 120, 31) 60%
  );
}

.contact {
  background-color: rgb(224, 129, 157);
  background-image: linear-gradient(
    340deg,
    rgb(243, 151, 178) 0%,
    rgb(147, 20, 58) 100%
  );
}

/* ------- */
/* POPUP */

body.prevent-background-scroll {
  min-height: 100dvh;
  overflow-y: hidden;
}

.prevent-scroll {
  overflow: hidden;
}

#about {
  display: block;
}

.popup {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  
}

@keyframes openPopup {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.popup-container {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: min(900px, 90%);
  background: rgba(133, 133, 133, 0.2);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  color: #fff;
  z-index: 30;
  transition: all 0.5s ease-in-out;
}

.popup-header {
  position: relative;
  display: flex;
  gap: 8px;
  font-weight: 600;
  padding: 15px 20px 10px;
  font-size: 1.2rem;
}

.popup-body {
  color: #f7f7f7;
  height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 30px 50px;
}

.popup.maximized .popup-body {
  height: 100vh;
}

.button-container {
  display: flex;
  align-items: center;
  column-gap: 8px;
}

.circle-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 0;
  outline: 0;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s;
}

.circle-btn i {
  opacity: 0;
  transition: all 0.2s;
  font-size: 0.5rem;
  color: rgb(65, 66, 67);
}

.circle-btn:hover {
  opacity: 1;
  transform: scale(1.03);
}

.button-container:hover i {
  opacity: 1;
}

/* .button-container:hover i:hover,
.button-container:hover i:hover:nth-child(2),
.button-container:hover i:hover:nth-child(3) {
  opacity: 1;
} */

.red {
  background-color: rgb(255, 96, 92);
}

.red i {
  font-size: 0.8rem;
}

.yellow {
  background-color: rgb(255, 189, 68);
}

.yellow i {
  transform: translateY(-3px);
}

.green {
  background-color: rgb(0, 202, 78);
}

.green i {
  transform: rotate(90deg);
}

/* --------- */
/* SCROLLBAR */

.popup-body::-webkit-scrollbar {
  width: 0.7rem;
}

.popup-body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.375rem rgb(79, 78, 78);
  border-radius: 0.8rem;
}

.popup-body::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.375rem rgba(238, 238, 238, 0.9);
  outline: none;
  border-radius: 0.8rem;
}

/* ------ */
/* ABOUT */

.about-container {
  display: grid;
  grid-template-columns: 40% 50%;
  gap: 30px;
  place-items: center;
}

.about-container h1 {
  margin-bottom: 20px;
  line-height: 1.4;
}

.about-container p {
  line-height: 1.6;
  font-size: 1.1rem;
}

.about-container .img-frame {
  overflow: hidden;
  width: 250px;
  border-radius: 8px;
  box-shadow: rgba(62, 63, 168, 0.8) 0px 10px 30px 8px,
    rgba(62, 63, 168, 0.8) 0px 0px 0px 2px;
}

.about-container .img-frame img {
  aspect-ratio: 6/7;
  object-fit: cover;
  transition: transform 1s;
}

.about-container .img-frame:hover img {
  transform: rotate(4deg) scale(1.25);
}

/* ------- */
/* SKILLS */

.skill-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.skill-list h1 {
  text-align: center;
  margin-bottom: 30px;
}

.skill-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: min(100%, 400px);
  margin: 0 auto;
}

.skill-list ul li {
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  background: linear-gradient(
    130deg,
    rgba(162, 234, 55, 0.7) 0%,
    rgba(46, 152, 74, 0.5) 100%
  );
  backdrop-filter: blur(30px);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px 12px;
}

/* --------- */
/* PROJECTS */

.project-container h1 {
  text-align: center;
  animation-delay: 0.8s;
  margin: 20px 0;
}

.all-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  gap: 30px;
  padding: 30px;
}

.all-projects img {
  height: 200px;
  object-fit: fill;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.project-box {
  position: relative;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(10, 98, 13, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #000;
  border-radius: 12px;
  list-style: none;
  z-index: 1;
  opacity: 0;
  transition: all 0.4s ease-in-out;
}

.overlay:hover {
  opacity: 1;
  backdrop-filter: blur(2px);
}

.overlay h3,
.overlay button {
  opacity: 0;
  transform: translateY(-100%);
  -webkit-transform: translateY(-100%);
  transition: all 0.25s ease;
  -webkit-transition: all 0.25s ease;
}

.overlay:hover h3,
.overlay:hover button {
  transform: translateY(0);
  -webkit-transform: translateY(0);
  opacity: 1;
}

.overlay:hover h3 {
  transition-delay: 0.3s;
  -webkit-transition-delay: 0.3s;
}

.overlay:hover button {
  transition-delay: 0.5s;
  -webkit-transition-delay: 0.5s;
}

.more-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #fff;
  background-color: transparent;
  margin-top: 20px;
  cursor: pointer;
}

.more-btn::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  z-index: -1;
  transition: all 0.4s;
}

.more-btn:hover::before {
  height: 100%;
  top: 0;
}

.more-btn span {
  color: #fff;
  line-height: 1;
  transition: color 0.4s;
}

.more-btn:hover span {
  color: #000;
}

/* ------------- */
/* TESTIMONIALS */

.testimonial-container h1 {
  text-align: center;
  margin-bottom: 40px;
  user-select: none;
}

.slider-container {
  width: 100%;
  position: absolute;
  top: 60%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.swiper {
  width: 94%;
  height: 100%;
  padding: 5px 0;
}

.swiper-slide {
  width: 260px;
  height: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  background: rgba(104, 104, 104, 0.5);
  color: #fff;
  outline: 0 solid rgba(225, 193, 88, 0.8);
  border-radius: 15px;
  padding: 20px 30px;
  margin-bottom: 16px;
  cursor: grab;
  user-select: none;
  transition: outline 0.3s linear;
}

.swiper-slide:hover {
  outline: 1px solid rgba(225, 193, 88, 0.8);
}

.user-info {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.user-info img {
  max-width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: rgba(225, 193, 88, 0.8) 0px 10px 30px 0px,
    rgba(225, 193, 88, 0.8) 0px 0px 0px 2px;
}

.user-info h2 {
  font-size: 1.1rem;
  transform: translateY(-5px);
}

.swiper-slide p {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 12px;
}

/* Control Buttons */

.control {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 6px;
  margin-top: 16px;
}

.control li {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(237, 223, 36, 0.8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4),
    inset 0px 4px 4px rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin: 3px;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease-in;
}

.control li:hover {
  background: rgba(224, 198, 26, 0.8);
  transform: scale(0.98);
}

.arrow {
  font-size: 1.8rem;
  color: #fff;
}

ul {
    margin: 0px;
    padding: 0px;
}
.footer-section {
  background: #151414;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
    max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
      color: #7e7e7e;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg{
  background: #3B5998;
}
.twitter-bg{
  background: #55ACEE;
}
.google-bg{
  background: #DD4B39;
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #ff5e14;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: #ff5e14;
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    background: #ff5e14;
    padding: 13px 20px;
    border: 1px solid #ff5e14;
    top: 0;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area{
  background: #202020;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a{
  color: #ff5e14;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color: #ff5e14;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}





</style>