<template>
    <footer>
      <p>&copy; {{ currentYear }} Sisipho Mafrika's Portfolio. </p>
     <div>
        <a href="https://github.com/Sisiphomafrika" class="center"><img src="" alt="GitHub"></a>
        <a href="https://wa.me/message/6JUOQHZ3KU37O1" class="center"><img src="" alt="Email"></a>
        <a href="https://wa.me/message/6JUOQHZ3KU37O1" class="center"><img src="" alt="WhatsApp"></a>
     </div>
    </footer>
  </template>
  <style scoped>
  footer {
    
    color: black;
    text-align: center;
    padding: 10px;
    bottom: 0;
    width: 100%;
    position: fixed;
  }
  .social-icons a {
    margin: 0 10px;
  }
  /* Add styling for the icon */
  footer i {
    color:white; /* Change the color as needed */
    margin-left: 5px;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
