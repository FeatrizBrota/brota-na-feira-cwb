<template>
    <section class="section">
      <div class="container">
        <h1 class="title">Colaborar com Dicas, Melhorias e Bugs</h1>
        <form @submit.prevent="enviarFormulario">
          <div class="field">
            <label class="label">Nome</label>
            <div class="control">
              <input class="input" type="text" v-model="nome" placeholder="Seu nome">
            </div>
          </div>
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input class="input" type="email" v-model="email" placeholder="Seu e-mail">
            </div>
          </div>
          <div class="field">
            <label class="label">Mensagem</label>
            <div class="control">
              <textarea class="textarea" v-model="mensagem" placeholder="Digite sua mensagem"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary" type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: '',
        email: '',
        mensagem: ''
      };
    },
    methods: {
      enviarFormulario() {
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, chamar uma API ou executar outras ações
        console.log('Formulário enviado');
        console.log('Nome:', this.nome);
        console.log('E-mail:', this.email);
        console.log('Mensagem:', this.mensagem);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos do componente */
  </style>
  