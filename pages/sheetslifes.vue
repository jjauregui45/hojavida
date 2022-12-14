<template>
    <div>
        <CommonsComponentHead />
        <div class="container">
            <div class="row">
                <div class="col-12 pt-4">
                    <h3>Mis hojas de vida</h3>
                    <hr>
                </div>
                <div class="vh-100">
                    <div class="col-12">
                        <div class="col-12 bg-gray mb-2 py-2 px-3 rounded" v-for="item in listado" :key="item">
                            <div class="row">
                                <div class="col-10">
                                    <h5 class="text-umine-primary" style="font-size: 16px;">{{ item.name }}</h5>
                                    <span class="text-umine-primary" style="font-size: 13px;">Ultima Actualización: {{item.last_update}}</span>
                                    <br>
                                    <span class="text-umine-primary" style="font-size: 13px;">
                                        <CommonsIcon name="eye" className="text-green-500 text-umine-gray" /> {{item.views}} Visitas
                                    </span>
                                </div>
                                <div class="col-2 text-center">
                                    <CommonsIcon name="chevron-down" className="text-green-500 text-umine-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 d-grid pt-3">
                            <button class="btn btn-secondary">Crear hoja de vida</button>
                        </div>
                    </div>
                </div>
            </div>
            <CommonsComponentBottomMenu active="profile" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            listado: [
                {
                    id: 23,
                    name: 'CV para TI',
                    last_update: '22/04/2022',
                    views: '5',
                },
                {
                    id: 25,
                    name: 'Curriculum de prueba',
                    last_update: '22/06/2022',
                    views: '59',
                },
                {
                    id: 29,
                    name: 'CV definitivo',
                    last_update: '22/10/2022',
                    views: '9',
                }
            ]
        }
        
    },
    methods: {
        
    }
}
</script>