<template>
    <div class="container">
       <div class="row">
            <div class="col-12">
                <div class="col-10 offset-1 col-md-4 mt-5 pt-5">
                    <img src="img/logowhite.png" class="img-fluid mt-5" alt="">
                    <p class="text-white float-end">{{ $t('hojadevida') }}</p>
                </div>
                <div class="col-10 offset-1 col-md-4 mt-5 text-center">
                    <p class="text-white">{{$t('ingUsuarioyContrasegna')}}</p>
                </div>
                <div class="col-10 offset-1 col-md-4 mt-2">
                    <input type="text" class="form-control form-control-lg" v-model="accessData.user" :placeholder="$t('usuario')">
                </div>
                <div class="col-10 offset-1 col-md-4 mt-4">
                    <input type="password" class="form-control form-control-lg" v-model="accessData.pass" :placeholder="$t('contrasegna')">
                </div>
                <div class="col-10 offset-1 col-md-4 mt-5 d-grid">
                <button class="btn btn-secondary btn-lg" @click="LogInAction()">Log in</button>
                <NuxtLink to="/recovery" class="text-white mt-3 text-center">{{$t('olvidasteUsuarioContraseña')}}</NuxtLink>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                accessData: {
                    user:'',
                    pass:'',
                }
            }
        },
        methods:{
            LogInAction(){
                window.location = '/home';
            }
        }
    }
</script>