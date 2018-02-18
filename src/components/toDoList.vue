<template>
  <div class="toDoList">
    <h1>To do</h1>
    <ul>
        <li v-for="(toDo,index) in toDos" :key= index><input class="toggle" type="checkbox"/>{{toDo.text}}</li>
    </ul>
  </div>
</template>

<script>

export default {
   computed: {
       toDos(){
           return this.$store.state.toDos;
       }
   }
 
    

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toDoList{
    margin: 130px 0 40px 0;
	padding: 0;
	list-style: none;
    background: #ffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
 h1 {
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
    margin:10px;

}
li{
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    list-style: none;
   
}
input{
    margin-right: 30px;
}
</style>
