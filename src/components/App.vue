<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark main-nav">
      <router-link class="navbar-brand" to="/">遂宁返乡大学生志愿者</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/orgs">
            <span class="nav-link">组织管理</span>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main-content {
  padding: 20px 0;
}
</style>
