<template>
  <div class="container">
    <h3>添加组织</h3>
    <form action="/api/orgs/add" method="POST">
      <div class="form-group">
        <label for="name">组织名称</label>
        <input class="form-control" type="text" name="name" placeholder="给你的组织取一个让人记住的名字吧~" required/>
      </div>
      <div class="form-group">
        <label for="weibo">微博</label>
        <input class="form-control" type="text" name="weibo" placeholder="官方微博名"/>
      </div>
      <div class="form-group">
        <label for="wechat">微信</label>
        <input class="form-control" type="text" name="wechat" placeholder="官方微信名"/>
      </div>
      <div class="form-group">
        <label for="qq">QQ</label>
        <input class="form-control" type="number" name="qq" placeholder="官方QQ号"/>
      </div>
      <div class="form-group">
        <label for="avatar">头像</label>
        <input class="form-control-file" type="file" name="avatar" />
      </div>
      <div class="form-group">
        <label for="desc">组织介绍</label>
        <textarea name="desc" class="form-control" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
