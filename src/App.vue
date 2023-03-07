
<template>
  <div id="app" >
    <todo-summary />
    <todo-list />
    <new-todo />
  </div>
  
  
  

</template>

<script>
import TodoList from './components/TodoList.vue'
import NewTodo from './components/NewTodo.vue'
import TodoSummary from './components/TodoSummary.vue'


export default {
  name: 'app',
  components: {
    TodoList,
    NewTodo,
    TodoSummary,
    
  }

}



</script>

<style>
#app {
    background: url("https://bestanimations.com/media/nature/1315285075flowing-waterfall-cliff-green-nature-animated-gif.gif ") ;

    height:950px; /*height of your image*/
    margin:0; /* If you want no margin */
    padding:0; /*if your want to padding */
    
    background-size:  cover;
    background-position: top center;
    overflow:scroll;
    width: 100%;

    
}

 
 



</style>
