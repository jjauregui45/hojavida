<template>
    <div class="row sticky-bottom bg-light text-primary-umine pt-3 pb-2 shadow-lg border-top">
        <div class="col-12 bottomMenu">
            <ul class="d-flex justify-content-between align-items-center list-unstyled px-2">
                <li>
                    <NuxtLink to="/home" v-if="active === 'home'"
                        class="bg-umine-secondary text-white px-3 py-2 text-decoration-none rounded-pill">
                        <CommonsIcon name="home" className="text-green-500" /> Home
                    </NuxtLink>
                    <NuxtLink to="/home" v-if="active !== 'home'" class="text-umine-secondary px-3 py-2 text-decoration-none rounded-pill">
                        <CommonsIcon name="home" className="text-green-500" /> Home
                    </NuxtLink>
                </li>
                <li>
                    <div v-if="active === 'qrcode'" class="bg-umine-secondary text-white px-3 py-1 text-decoration-none rounded-pill">
                        <CommonsIcon name="qrcode" className="text-green-500" />Qr
                    </div>
                    <div v-if="active !== 'qrcode'" class="text-umine-secondary px-3 py-1 text-decoration-none rounded-pill">
                        <CommonsIcon name="qrcode" className="text-green-500" />Qr
                    </div>
                </li>
                <li>
                    <NuxtLink to="/profile" v-if="active === 'profile'"
                        class="bg-umine-secondary text-white px-3 py-2 text-decoration-none rounded-pill">
                        <CommonsIcon name="account" className="text-green-500" /> Perfil
                    </NuxtLink>
                    <NuxtLink to="/profile" v-if="active !== 'profile'" class="text-umine-secondary px-3 py-2 text-decoration-none rounded-pill">
                        <CommonsIcon name="account" className="text-green-500" /> Perfil
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Menu-mobile',
    props: {
        active: '',
    },
    methods: {
        changeActive() {
            this.active = 'home';
        },
    },

}


</script>