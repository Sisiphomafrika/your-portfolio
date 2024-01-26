<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link class="nav-link text-center" to="/" exact>Home</router-link>
        <router-link class="nav-link text-center" to="/about">About</router-link>
        <router-link class="nav-link text-center" to="/projects">Projects</router-link>
        <router-link class="nav-link text-center" to="/testimonials">Testimonials</router-link>
        <router-link class="nav-link text-center" to="/resume">Resume</router-link>
        <router-link class="nav-link text-center" to="/contacts">Contacts</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(to right, #8ce07d, #000000);
  padding: 1rem;
}

.nav-link {
  color: #fff;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #ffc107;
}

@media (max-width: 768px) {
  .navbar {
    background: #8f94fb;
  }

  .nav-link {
    color: #333;
  }

  .nav-link:hover {
    color: #ffc107;
  }
}
</style>
