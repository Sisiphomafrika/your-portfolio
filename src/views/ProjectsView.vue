<template>
  <div class="container-fluid portfolio-container-holder content-section" id="portfolio">
    <div class="portfolio-container container">
      <h1 class="text-center">My Projects</h1>
      <hr class="star-portfolio">
      <div class="row">
        <div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder" v-for="(project, index) in projects" :key="index">
          <div class="portfolio-card">
            <div class="card-ho">
              <img :src="project.image" alt="Portfolio" class="img-responsive portfolio-img">
            </div>
            <div class="portfolio-img-desc">
              <p>{{ project.description }}</p>
            </div>
            <a :href="project.gitHub" class="btn btn-primary btn-block" id="btn-space">Github</a>
            <a :href="project.netlify" class="btn btn-primary btn-block" id="btn-space">Netlify</a>
          </div>
        </div>
      </div>
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

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: " mobicare",
          description: "An eCommerce site built using HTML 5, CSS, and Bootstrap 5",
          image:  "https://i.ibb.co/wsNKpyL/medicalnew.png",
          gitHub: "https://sisiphomafrika.github.io/mobcare/",
          netlify: "https://vermillion-dusk-797f36.netlify.app/",
        },
        {
          id: 2,
          name: "Temperature Converter",
          description: "I built my portfolio using HTML 5, CSS, Bootstrap.",
          image:  "https://i.ibb.co/gjdsfZ3/Screenshot-2024-01-11-083936.png" ,
          gitHub: "https://github.com/yourusername/project2",
          netlify: "https://project2.netlify.app"
        },
        {
          id: 2,
          name: "Project 2",
          description: "Description of Project 2",
          image: "https://i.ibb.co/gjdsfZ3/Screenshot-2024-01-11-083936.png",
          gitHub: "https://github.com//temperatureConvertor.git",
          netlify: "https://project2.netlify.app"
        },
        {
          id: 2,
          name: "Project 2",
          description: "I built this application using HTML 5, CSS, and Javascript.",
          image: "https://i.ibb.co/FXPtrgL/Screenshot-2023-11-03-121254.png",
          gitHub: "https://github.com/form.git",
          netlify: "https://weportfolio.netlify.app/",
        },
        {
          id: 2,
          name: "To-do List",
          description: "I built this application using HTML 5, CSS, and Javascript.",
          image:  "https://i.ibb.co/1bhCMYH/Screenshot-2024-01-11-091408.png",
          gitHub: "https://github.com/SIVUPE/To-Do-list.git",
          netlify: "https://todolist.netlify.app/"
        },
        {
          id: 2,
          name: "Project 2",
          description: "Description of Project 2",
          image: "https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg",
          gitHub: "https://github.com/yourusername/project2",
          netlify: "https://project2.netlify.app"
        },
        // Add more projects as needed
      ]
    };
  }
};
</script>

<style scoped>
.portfolio-card {
  border: 1px solid #ccc;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
}

.portfolio-img {
  width: 80%;
  height: auto;
}

.portfolio-img-desc {
  height: 30%;
  margin-top: 10px;
}

.btn-block {
  margin-top: 10px;
}
.portfolio-card{
  height: 100%;
    box-shadow: 0px 2px 5px #888888;
    /* background: #eee; */
    border-radius: 4px;

}
.card-ho{
  height: 20%;
}

.portfolio-card:hover{
	box-shadow: 0px 10px 10px #888888;
  cursor: pointer
}

/* .portfolio-container-holder{
	background: #eee;
	padding-bottom: 20px;
} */


.portfolio-card-holder{
  width: 200px;
	padding: 5px;
	margin-bottom: 5px;
}

.portfolio-img{
	width: 100%;
	border-radius: 4px 4px 0 0;
}

.portfolio-img-desc{
	position: relative;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background: #fff;
	color: #000;
	text-align: center;
	padding: 5px;
}
</style>
