<template>
    <div>
        <img :src="url" :alt="alt" :class="className" :style="style">
    </div>
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