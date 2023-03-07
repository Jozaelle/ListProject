<template>
    
    <section class="todo-list">
        <h1 id="title">Daily Checklist</h1>
        <ul>
            <li v-for="todo in $store.state.todos" v-bind:key="todo.name" v-bind:class="{'todo-completed' : todo.done}">
                <input id="checkboxes" type="checkbox" v-bind:checked= "todo.done" v-on:click="checkTodoBox(todo)"/>
                <span v-bind:class="{ completed: todo.done }">{{todo.name}}</span>
                <span class= "category">{{ todo.category }}</span>
               
                <button class= "delete" v-on:click="removeTodo(todo)">Delete </button>
                
            </li>
        </ul>
            
    </section>
</template>

<script>
export default {
    methods: {
        checkTodoBox(todo) {
            this.$store.commit('FLIP_DONE', todo);
        },
        
        removeTodo(todo) {
            this.$store.commit('DELETE_TODO', todo);
          
}
    },
    
        

}




</script>

<style>
.todo-list {

  width:450px;
    background: #fff;
    margin: 50px auto;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 10px;
    

    background-color: bisque;
}
h1 {
    background: tan;
    color:black;
    
    font-size:30px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
    padding-bottom: 5%;
    padding-top: 15%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
span.category {
    font-size: 0.5em;
    color: gray;
    margin: 3px;
}
ul {
    list-style-type: none;
    margin:0px;
    padding:0px;
}
li {
    font-size: 24px;
    border-bottom:1px solid #f2f2f2;
    padding:10px 20px;
}
li:last-child{
    border:0px;
}
li.todo-completed {
    text-decoration: line-through;
    color: darkgray;
}
#title{
    text-decoration-line: underline;
}

</style>