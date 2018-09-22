<template>
    <header class="ui header">
      <nav class="ui fixed menu">
        <div class="ui header item">Generator Konspektów</div>
        <div class="ui right floated header item">
          <div class="ui animated positive button" @click="$emit('newK')">
            <div class="visible content">Nowy</div>
            <div class="hidden content">
              <i class="plus icon"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default{
  name: "Modal",
  methods: {},
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 575px){
  .ui.right.floated.header.item::before{
    display:none;
    content: '';
  }
}

</style>
