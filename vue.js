new Vue({

    el: '#app',

    data:{
        titulo: 'Aplicacion de tareas con Vue.js',
        tareas:[],
        nuevaTarea: ''
    },

    methods:{

        agregarTarea: function(){
            /* console.log('Diste Click', this.nuevaTarea); */
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
        },

        editarTarea(index){
            this.tareas[index].estado = true;
        },

        eliminar(index){
            this.tareas.splice(index, 1);
        }
    }
})