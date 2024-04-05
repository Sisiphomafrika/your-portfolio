<template>
  <div class="container footer-container">
    <div class="row footer-row">
      <div class="col-xs-12 col-sm-6 col-md-6 text-center">
        <h4 class="text-center">Find me here</h4>
        <address>
          <strong><i class="fa fa-map-marker"></i> Monsters Inc.</strong><br>Lorem ipsum dolor, sir amet,<br>Mumbai, India 400050<br><br>
          <a class="tel" href="tel:9999988888" type="tel"><i class="fa fa-mobile"></i><span> +91 9876543210</span></a>
        </address>
      </div>

      <div class="col-xs-12 col-md-6 col-sm-6 social-section">
        <div class="text-center">
          <h4 class="text-center">Also, I can be found here</h4>
          <div class="text-center social-buttons">
            <a href="#" class="btn btn-default btn-lg social-button link-facebook"><i class="fa fa-facebook"></i></a>

            <a href="https://codepen.io/simplysuvi/" class="btn btn-default btn-lg social-button link-codepen"><i class="fa fa-codepen"></i></a>

            <a href="#" class="btn btn-default btn-lg social-button link-twitter"><i class="fa fa-twitter"></i></a>

            <a href="https://www.linkedin.com/in/simplysuvi" class="btn btn-default btn-lg social-button link-linkedin"><i class="fa fa-linkedin"></i></a>

            <a href="https://instagram.com/simplysuvi" class="btn btn-default btn-lg social-button link-instagram"><i class="fa fa-instagram"></i></a>
          </div>
          <hr class="footer-hr">
          <h4 class="author">Made with <i class="fa fa-heart"></i> by <strong>Suvrat Jain</strong></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  footer {
    background-color: #2C3E50;
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    padding: 3%;
  }

  a.tel,
  a.tel:hover {
    text-decoration: none;
    color: #fff;
  }

  a.social-button {
    background: #fff;
    font-size: 20px;
    border-radius: 50%;
    margin: 5px;
  }

  .address-container {
    display: inline-block;
    margin: 0 auto;
  }

  a.link-facebook,
  a.link-twitter,
  a.link-codepen,
  a.link-linkedin,
  a.link-instagram {
    transition: 0.4s ease;
  }

  a.link-twitter {
    color: #1da1f2;
  }

  a.link-facebook {
    color: #3b5998;
  }

  a.link-linkedin {
    color: #007bb6;
  }

  a.link-instagram {
    color: #e95950;
  }

  a.link-facebook:hover {
    background-color: #3b5998;
    color: #fff;
  }

  a.link-twitter:hover {
    background-color: #1da1f2;
    color: #fff;
  }

  a.link-codepen:hover {
    background-color: black;
    color: #fff;
  }

  a.link-linkedin:hover {
    background-color: #007bb6;
    color: #fff;
  }

  a.link-instagram:hover {
    background-color: #e95950;
    color: #fff;
  }

  .btn-default {
    color: #333;
    background-color: #fff;
    border-color: transparent!important;
  }

  .fa-heart {
    color: #f32323;
  }

  h4.author {
    letter-spacing: 4px;
  }

  hr.footer-hr {
    width: 50%;
  }

  hr.copyright {
    opacity: 0.4;
  }
</style>

  
