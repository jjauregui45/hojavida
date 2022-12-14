<template>
    <div>
        <CommonsComponentHead />
        <CommonsComponentBanner />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <NuxtLink to="/sheetslifes" class="float-end pt-4 pb-2 text-decoration-none text-umine-secondary">{{ $t('MisHojasDeVida') }}</NuxtLink>
                </div>
                <div class="col-12">
                    <hr>
                </div>
                <div class="col-12">
                    <h1 class="text-umine-primary">{{ $t('MiInformacion')}}</h1>
                    <CommonsComponentProfileInfo />
                </div>
                <div class="col-12 bg-gray">
                    <CommonsComponentExpLaboral />
                </div>
            </div>
            <CommonsComponentBottomMenu  active="home"/>
        </div>

        

    </div>
</template>
<script>
  export default {
    head() {
      // Set Meta Tags for this Page
    }
  }
</script>

<style>

</style>