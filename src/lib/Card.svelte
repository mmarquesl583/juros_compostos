<script>
    export let title = ""
    export let result
    export let color
</script>

<div class="card">
    <span>  { title + ":"} </span>
    <span  style="color: {color}; font-size: x-large;"><strong> { result } </strong></span>
</div>

<style>
    .card{
        text-align: center;
        background-color: #fff;
        padding: 20px 20px 24px;
        border: 1px solid #dddddd;
        border-radius: 6px;
        width: 100%;
        display: grid
    }
</style>