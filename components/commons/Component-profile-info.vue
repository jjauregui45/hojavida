<template>
    <div class="pt-3 pb-5 pl-5">
       <div class="row container-fluid">
            <div class="col-6 offset-3 d-flex justify-content-center">
                <img src="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg" class="img-fluid rounded" alt="">
            </div>
            <div class="col-12 text-center mt-4">
                <h3>{{ profileData.first_name + ' ' + profileData.last_name }}</h3>
                <h5>{{ profileData.profesion}}</h5>
            </div>
            <div class="col-12">
                <div class="row d-flex justify-content-center text-center">
                    <div class="col-2" v-for=" social in socialNetworks " :key="social.name">
                        <img :src=" 'img/' + social.icon" :alt="social.name" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-12">
                <hr>
            </div>
            <div class="col-12 text-center text-umine-primary">
                <p v-if="profileData.birthday_date != '' "> <b>{{ $t('FechaNacimiento') }}:</b> {{profileData.birthday_date}} </p>
                <p v-if="profileData.dni != '' "> <b>{{ $t('DNI') }}:</b> {{profileData.dni}} </p>
                <p v-if="profileData.address != '' "> <b>{{ $t('Direccion') }}:</b> {{profileData.address}} </p>
                <p v-if="profileData.email != '' "> <b>{{ $t('Email') }}:</b> {{profileData.email}} </p>
                <p v-if="profileData.phone != '' "> <b>{{ $t('Fono') }}:</b> {{profileData.phone}} </p>
            </div>
            <div class="col-12">
                <hr>
            </div>
            <div class="col-12">
                <h3 class="text-center text-umine-primary">{{ $t('SobreMi') }}</h3>
                <p>{{ profileData.about }}</p>
            </div>
       </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            profileData: {
                first_name:'Karina Andrea',
                last_name: 'Kariman',
                profesion: 'Contador auditor',
                birthday_date: '13/08/1987',
                dni: '19.017.728-9',
                address: 'Santiago, Chile',
                email: 'k.kariman@uminetest.com',
                phone: '+569 77842252',
                about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt eum optio animi inventore quis dolorem totam illum quas vel!'
            },
            socialNetworks: [
                {
                    name: 'Facebook',
                    link:'http://algo.com',
                    icon:'fb_logo.png',
                },
                {
                    name: 'Instagram',
                    link:'http://algo.com',
                    icon:'ig_logo.png',
                },
                {
                    name: 'Twitter',
                    link:'http://algo.com',
                    icon:'tw_logo.png',
                }
            ]
        }
    },
    methods:{
        LogInAction(){
            window.location = '/home';
        }
    }
}

</script>
