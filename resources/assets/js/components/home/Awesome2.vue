<template>
    <div>
        <vue-headful title="Component 2"/>
        <h3>Component 2</h3>
        <h2>This is the best component ever!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus totam atque nemo repellat, necessitatibus ab placeat veritatis iste inventore consequuntur ratione quo aliquid fuga aperiam odit possimus temporibus sed.</p>
    </div>
</template>
<script>
    export default {
        props: ['root_url'],
        mounted() {
            console.log(this.root_url)
        }
    }
</script>