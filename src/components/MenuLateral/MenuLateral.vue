<template>
    <div class="menu-lateral">
    <div class="box-itens-menu">
      <ul>
        <li>Feiras</li>
        <li>Perfil</li>
        <li>Colabore</li>
      </ul>
    </div>

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
  width: 15%;
  background-color: #B7D739;
  padding: 20px;
}

.menu-lateral ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-lateral li {
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  border: 1px solid #242c06;
}

.box-itens-menu{
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items:center;
}


</style>