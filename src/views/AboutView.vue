<template>
  <div class="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h2 class="section-title">Empowering Digital Journeys</h2>
          <p class="lead">Greetings! I'm a young woman navigating the dynamic and thrilling world of web development. With each line of code, I'm crafting my unique journey in the digital realm. Coding isn't just a task for me; it's an art, a constant challenge, and an exploration of endless possibilities.</p>

          <p class="lead">Specializing in front-end development, my ambitions soar beyond boundaries. My commitment extends to becoming a proficient full-stack developer. The excitement of learning and mastering new technologies fuels my motivation, propelling me to explore every facet of this ever-evolving field.</p>

          <p class="lead">In this ever-changing landscape, I thrive on continuous learning and adaptation. Every project is an opportunity to enhance my skills, pushing the boundaries of what I can achieve. Collaboration lies at the heart of my journey—working with diverse individuals, exchanging ideas, and building connections not only expands my horizons but also enriches my understanding of the digital universe.</p>

          <p class="lead">I'm not just a web developer; I'm a passionate explorer, an avid learner, and a creative problem-solver. Each challenge is an opportunity to innovate, to create something extraordinary. I'm deeply grateful for the friendships made, the experiences gained, and the endless possibilities that lie ahead in this ever-inspiring world of web development.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .about {
    background: linear-gradient(to right, #3498db, #1abc9c);
    color: #ecf0f1;
    padding: 50px 0;
    animation: fadeIn 1.5s ease-out;
  }

  .section-title {
    font-size: 3em;
    font-family: 'Avenir Next', sans-serif;
    font-weight: bold;
    margin-bottom: 30px;
    color: #ecf0f1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .lead {
    font-size: 1.3em;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #ecf0f1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
