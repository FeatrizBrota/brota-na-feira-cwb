<template>
  <div>
    <!-- Show the loading tag -->
    <div v-if="loading" class="tag loading-tag">loading</div>

    <!-- Show the actual tag -->
    <div
      v-else
      :class="[tagClass, { selecionada: selected }]"
      @click="selectDay(title, $event)"
    >
      <span v-if="type == 'dia'">{{ retornaDia(title) }}</span>
      <span v-else>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      default: "home",
    },
    color: {
      type: String,
      default: "verde-claro",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "dia",
    },
  },
  data() {
    return {
      loading: true, // Add a loading state
    };
  },
  computed: {
    tagClass() {
      return "tag " + this.color;
    },
  },
  methods: {
    retornaDia(numeroDia) {
      const diasDaSemana = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ];
      return diasDaSemana[numeroDia];
    },
    selectDay(tag, event) {
      
      if (this.page != "home" || this.type!='tipo-home') {
        event.stopPropagation();
        const routeParams = { tag: tag };
        this.$router.push({ name: "HomePage", params: routeParams });
      }
    },
  },
  mounted() {
    // Simulate an asynchronous action (e.g., fetching data) with a delay
    setTimeout(() => {
      this.loading = false;
    }, 1500); // Set the time as per your requirement
  },
};
</script>

<style scoped>
.tag {
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 1rem;
  height: fit-content;
  font-weight: bold;
  z-index: 100000;
}

.verde-claro {
  background-color: #b7d739;
  color: #1b3c1d;
}

.verde-claro:hover {
  background-color: #1b3c1d;
  color: #b7d739;
}

.selecionada {
  background-color: #1b3c1d;
  color: #b7d739;
}

/* Styling for the loading tag */
.loading-tag {
  background-color: #dddddde5; /* Grey background */
  color: #ffffff00; /* White text */
}
</style>
