<template>
    <div class="md" v-html="html"></div>
</template>

<script>
  import '../assets/css/highlight.css'
  import showdown from 'showdown'
    export default {
      name: "ViewMd",
      data(){
        return{
          html:''
        }
      },
      mounted() {
        let md = this.getHtml()
      },
      methods:{
        getHtml(){
          this.$axios.get(this.$api + this.$route.query.md).then((resp)=>{
            if(resp.status === 200){
              this.html = new showdown.Converter().makeHtml(resp.data.toString())
            }
          })
        }
      }
    }
</script>
<style>
  .md{
    position: absolute;
    top: 0;
    padding: 30px;
  }
</style>
