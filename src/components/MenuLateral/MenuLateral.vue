<template>
    <div class="menu-lateral">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </template>

<script>
export default {
    name:'MenuLateral'
 
}
</script>

<style  scoped>
.menu-lateral {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #030C15;
  padding: 20px;
}

.menu-lateral ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-lateral li {
  margin-bottom: 10px;
  cursor: pointer;
}


</style>