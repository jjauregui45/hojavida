<template>
    <div class="row">
        <div class="col-12 mt-4 mb-4 text-center">
            <h3 class="text-umine-primary">{{ $t('expLaboral') }}</h3>
        </div>
        <div class="col-12" v-for="exp in objExpLaboral" :key="exp.year" >
            <div class="row">
                <div class="col-4 offset-4 d-flex justify-content-center mb-4">
                    <div class="yearCircle">{{ exp.year }}</div>
                </div>

                <div class="col-12 mb-5" v-for="position in exp.positions" :key="position.id">
                    <h5 class="text-umine-primary">{{ position.position }} / {{ position.industry }}</h5>
                    <p class="mb-1"> <b class="text-umine-primary">{{ $t('date_init') }}</b>: {{ position.position_init }}</p>
                    <p> <b class="text-umine-primary">{{ $t('date_end') }}</b>: {{ position.position_end }}</p>
                    <p> {{ position.description }} </p>
                    <div class="row" v-if="(position.functions != undefined && position.functions.length > 0)">
                        <div class="col-12">
                            <h5 class="text-umine-primary">{{ $t('functions') }}:</h5>
                            <ul class="list-unstyled">
                                <li class="listDecorationBefore" v-for="functions in position.functions" :key="functions.id"> {{ functions.description }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            objExpLaboral: [
                {
                    year: '2021',
                    positions:[
                        { 
                            id:'2', 
                            position: 'Cargo desempeñado', 
                            industry: 'Industria', 
                            position_init: 'Agosto 2021', 
                            position_end: 'Octubre 2021', 
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt eum optio animi inventore quis dolorem totam illum quas vel!', 
                            functions:[ 
                                { id:'1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                                { id:'2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                                { id:'3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                             ] 
                        },
                    ]
                },
                {
                    year: '2022',
                    positions:[
                        { 
                            id:'2', 
                            position: 'Cargo desempeñado', 
                            industry: 'Industria', 
                            position_init: 'Agosto 2021', 
                            position_end: 'Octubre 2021', 
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt eum optio animi inventore quis dolorem totam illum quas vel!', 
                            functions:[ 
                                { id:'1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                                { id:'2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                                { id:'3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                             ] 
                        },
                    ]
                }

            ]
        }
    },
    methods:{
        
    }
}

</script>