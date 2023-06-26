<template>
    <div :class="tagClass">
      {{ title }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'verde-claro'
      }
    },
    computed: {
      tagClass() {
        return 'tag ' + this.color;
      }
    }
  }
  </script>
  
  <style scoped>
  .tag {
    display: inline-block;
    margin: 5px;
    padding: 5px 8px;
    border-radius: 10px;
    font-size: 1rem;
    height: fit-content;
    font-weight: bold;
  }
   
.verde-claro{
  background-color: #B7D739;
    color: #1B3C1D;
}
.verde-claro:hover{
  background-color: #1B3C1D;
    color: #B7D739;

}
   
  .red {
    background-color: #FF0000;
    color: #FFFFFF;
  }
  
  .blue {
    background-color: #0000FF;
    color: #FFFFFF;
  }
  
  .green {
    background-color: #00FF00;
    color: #000000;
  }
  </style>
  