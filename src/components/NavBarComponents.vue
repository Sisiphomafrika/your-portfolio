<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active"  >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/About" class="nav-link active"  >About</RouterLink>
        </li>
        <li>
          <RouterLink to="/skills" class="nav-link active"  >Skills</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="nav-link active"  >Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/testimonials" class="nav-link active"  >Testimonials</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts" class="nav-link active"  >contacts</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&family=Philosopher:wght@700&display=swap');
.navbar {
  background-color: #199286;
  padding: 1rem;
}

.nav-link {
  font-family: "Lexend Deca";
  font-size:x-small;
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
