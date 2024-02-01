<template>
  <div class="body">
  <div class="container">
    <div class="image-container">
      <img src="https://i.postimg.cc/FH3qcbTZ/IMG-7811-1-removebg-preview.png=img" alt="Developer Image">
    </div>
    <div class="text-container">
      <h1 class="developer-name">I'm Sisipho Mafrika Aspiring Developer</h1>
      <p class="welcome-message">🚀 Welcome to my coding odyssey! 🚀<br>
        Embark on this thrilling journey with me as I navigate the intricate realms of software development. 🌐 Here, I share regular updates on my projects and the exhilarating challenges I encounter along the way.<br><br>
        🛠️ Join me in the process of learning, building, and growing in the ever-evolving landscape of code. 🌱 Let's explore the fascinating world of software development together!<br><br>
        #CodeExplorer #LearningInProgress #SoftwareJourney</p>
      <button class="view-button">View my work</button>
    </div>
  </div>
  </div>
</template>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&family=Philosopher:wght@700&display=swap');
.body{   background-color: #F3EFE0;


}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-container {
  margin-right: 2rem;
}

.image-container img {
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
}

.text-container {
  max-width: 600px;
}

.developer-name {
  font-family: "Lexend Deca";
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #199286;
}

/* .developer-role {
  font-size: 1.5rem;
  color:#199286;
} */

.welcome-message {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
}

.view-button {
  background-color: #199286;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-transform: uppercase;
  font-family: "Lexend Deca";
  color: #000000;


}

 .view-button:hover {
  background-color: #0056b3;
} 
</style>
