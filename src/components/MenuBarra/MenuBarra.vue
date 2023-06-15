<template>
    <nav class="menu-bar">
      <div class="menu-items">
        <button @click="goTo('UserPage')" class="menu-button">
          <i class="fas fa-user"></i>
        </button>
        <button @click="goTo('HomePage')" class="menu-button">
          <i class="fas fa-home"></i>
        </button>
        <button @click="goTo('ColaborePage')" class="menu-button">
          <i class="fas fa-users"></i>
        </button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MenuBarra',
    methods: {
      goTo(route) {
        this.$router.push({ name: route });
      },
    },
  };
  </script>
  
  <style scoped>
.menu-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background-color: #B7D739;
  padding: 10px;
  box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.123);
}


  
  .menu-items {
    display: flex;
    justify-content: center;
  }
  
  .menu-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    margin: 0 40px;
  }
  
  .menu-button i {
    font-size: 20px;
    color: #1B3C1D;
  }
  </style>
  