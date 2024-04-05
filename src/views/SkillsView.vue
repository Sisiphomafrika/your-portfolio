<template>
  <div class="bg-black py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="e text-white mb-4">Education</h2>
          <div class="education-cards">
            <div v-for="(Education, index) in education" :key="'education-' + index" class="card bg-dark text-white mb-3">
              <div class="card-body">
                <img :src="Education.image" alt="Profile picture" class="card-img-top card-image">
                <h4 class="card-title">{{Education.place}}</h4>
                <h6 class="card-subtitle">{{ Education.description }}</h6>
                <span class="card-text">{{Education.year}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2 class="s text-white mb-4">Work Experience</h2>
          <div class="work Experience-cards">
            <div class="card bg-dark text-white mb-3">
              <div class="card-body">
                <h4 class="work-experience">Company: <span>Lifechoices Studio</span></h4>
                <h6 class="card-subtitle">Position: <span class="lead">Intern</span></h6>
                <h6 class="card-subtitle">Year: <span class="lead">2024</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <div class="work Experience-cards">
            <div class="card bg-dark text-white mb-3">
              <div class="card-body">
                <h4 class="work-experience">Company: <span>Silversands High School</span></h4>
                <h6 class="card-subtitle">Position: <span class="lead">End-user Computer Tutor</span></h6>
                <h6 class="card-subtitle">Year: <span class="lead">2020-20</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2 class="s text-white mb-4">Skills</h2>
          <div class="skills-cards">
            <div v-for="(Skills, index) in skills" :key="'skills-' + index" class="card bg-dark text-white mb-3">
              <div class="card-body">
                <img :src="Skills.Image" alt="Profile picture" class="card-img-top card-image">
                <h4 class="card-title">{{Skills.title}}</h4>
                <h6 class="card-subtitle">{{ Skills.description }}</h6>
              </div>
            </div>
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
                            <span>sisiphomafrika99@gmail.com</span>
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
  computed: {
    education() {
      return this.$store.state.education
    },
    skills() {
      return this.$store.state.skills
    },
    work() {
      return this.$store.state.work
    }
  },
  mounted() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchSkills');
    this.$store.dispatch('fetchWork');
  }
}
</script>


<style scoped>


</style>
