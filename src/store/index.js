import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { name:'Wake Up', done:false, category: 'Home'},
            { name: 'Morning Meditation', done:false, category: 'Home'},
            { name:'Brush Teeth', done:false, category: 'Home'},
            { name:'Shower', done:false, category: 'Home'},
            { name:'Answer Emails', done:false, category: 'Work'},
            { name:'Morning Stand Up', done:false, category: 'Work'},
            { name:'Fix A Bug', done:false, category: 'Work'},
           
        ]
    },
    mutations: {
        ADD_NEW_TODO(state, todo) {
            state.todos.push(todo);
        },
        FLIP_DONE(state, todoToChange){
            todoToChange.done = ! todoToChange.done;
        },
        DELETE_TODO(state, todo){
            var index = state.todos.findIndex(t => t.name == todo.name);
            state.todos.splice(index, 1);

        }
    },
    actions: {},
    modules: {},
    strict: true
});