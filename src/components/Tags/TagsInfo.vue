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
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1rem;
    margin: 0 !important ;
    font-weight: bold;
  }
   
.verde-claro{
  background-color: #B7D739;
    color: #1B3C1D;
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
  