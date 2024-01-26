<template>
  <div class="container">
    <div class="image-container">
      <img src="https://i.postimg.cc/FH3qcbTZ/IMG-7811-1-removebg-preview.png=img" alt="Developer Image">
    </div>
    <div class="text-container">
      <h1 class="developer-name">I'm Sisipho Mafrika<br><span class="developer-role">Aspiring Developer</span></h1>
      <p class="welcome-message">🚀 Welcome to my coding odyssey! 🚀<br>
        Embark on this thrilling journey with me as I navigate the intricate realms of software development. 🌐 Here, I share regular updates on my projects and the exhilarating challenges I encounter along the way.<br><br>
        🛠️ Join me in the process of learning, building, and growing in the ever-evolving landscape of code. 🌱 Let's explore the fascinating world of software development together!<br><br>
        #CodeExplorer #LearningInProgress #SoftwareJourney</p>
      <button class="view-button">View my work</button>
    </div>
  </div>
</template>

<style scoped>
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
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.developer-role {
  font-size: 1.5rem;
  color: #777;
}

.welcome-message {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
}

.view-button {
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.view-button:hover {
  background-color: #0056b3;
}
</style>
