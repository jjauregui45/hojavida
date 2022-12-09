<template>
    
    <img 
        :src="url" 
        :alt="alt" 
        :class="className"
        :style="style"
    >

</template>

<script>

    export default {
        props: {
            url: String,
            alt:String,
            className:String,
            style:String
        }
    }
</script>