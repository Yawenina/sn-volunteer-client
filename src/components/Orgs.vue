<template>
  <div class="container">
    <router-link class="btn btn-primary" to="/orgs/add">添加组织</router-link>
    <div class="row">
      <div v-for="org in orgs" :key="org.id"
        class="card text-white bg-primary col-md-4 col-sm-12" style="max-width: 20rem;">
        <div class="card-body">
          <h4 class="card-title">{{org.name}}</h4>
          <p class="card-text">org.desc</p>
          <div class="social-links">
            <div class="social">
              <img src="`./images/${social.name}`" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      orgs: []
    }
  },
  methods: {
    getOrgs() {
      axios.get('/api/orgs')
        .then(res => this.orgs = res.data)
    }
  },
  mounted() {
    this.getOrgs()
  }
}
</script>

<style>

</style>
