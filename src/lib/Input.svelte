<script>
    export let placeholder
    export let value
</script>

<input type="text" placeholder={ placeholder + ":"} value={value}>

<style>
    input{
        width: 45%;
        height: 30px;
        margin-top: 20px;
        padding-left: 10px;
    }
</style>