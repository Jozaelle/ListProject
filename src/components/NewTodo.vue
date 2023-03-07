<template>
  <section class="new-todo">
      <form v-on:submit.prevent= "saveTodo" >
          <input id="add" type="text" placeholder="Add To List" v-model= "newTodo.name" >
          <select v-model= "newTodo.category">
              <option value="">--- Select a category ---</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
          </select>
          <button>Add</button>
      </form>
  </section>
</template>

<script>

export default{
    data() {
        return {
            newTodo: {
                name: '',
                category: '',
                done: false
                
                
            }
        }
    },
    methods: {
        saveTodo() {
            this.newTodo.done = false;
            this.$store.commit('ADD_NEW_TODO', this.newTodo);
            this.newTodo = {
                name: '',
                category: '',
                done: false,
                
            };


        },
       
    }
        
       
}

</script>

<style>
.new-todo {
    width: 450px;
    padding-left: 110%;
    font-family: 'Roboto condensed', sans-serif;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    margin: auto;
  
  
 
 
}
input, select, button {
    background-color: bisque;
    padding: 5px 15px;
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .4s;
    margin: 3px;
}

</style>