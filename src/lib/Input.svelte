<script>
    export let placeholder
    export let title = ""
    export let value
    export let main
</script>

<div class="content" title={title}>
    <div class="left">
        {placeholder + ":"}
    </div>
    <input type="text" bind:value={value} on:input={main}>
</div>

<style>
    input{
        width: 76%;
        height: 32px;
        padding: 0;
        border: 1px solid black;
        border-left: none;
        outline: none;
        border-radius: 0 15px 15px 0;
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 50%;
    }
    .left{
        border: 1px solid black;
        border-radius: 15px 0 0 15px;
        border-right: none;
        height: 32px;
        display: flex;
        justify-content: initial;
        align-items: center;
        padding-left: 10px;
        background-color: white;
    }
</style>