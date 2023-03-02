<script>
export default {
  data: () => ({
    apiResponse: null,
  }),

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const url = "http://localhost:8001/";
      let res = await fetch(url);
      this.apiResponse = await res.json();
    },
  },
};
</script>

<template>
  <div>
    <div v-if="!apiResponse">Pinging the api...</div>

    <div v-else>
      The api responded with: <br />
      <pre>
        {{ apiResponse }}
      </pre>
    </div>
  </div>
</template>
