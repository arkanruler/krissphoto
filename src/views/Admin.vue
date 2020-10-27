<template>
<div>
   <form>
   <p><input placeholder="Ваше имя" name="user"></p>
   <p><input type="submit" value="Отправить" 
    formaction="Home.vue" formmethod="post"></p>
  </form>
</div>
</template>
   
<script>

export default{
    data(){
        return{
            mess:'KRISSTINA BAY'
        }
    },
    
}
    
</script>
<style >

</style>