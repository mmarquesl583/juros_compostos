<script>
    export let title = ""
    export let result
</script>

<div class="card">
    <span> { title + ":"} </span>
    <span> { result } </span>
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