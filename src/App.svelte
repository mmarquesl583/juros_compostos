<script>
  import Input from "./lib/Input.svelte";
  import Card from "./lib/Card.svelte";
  import juros from "./assets/juros";

  let val_mensal = 2000
  let val_inicial = 7000
  let periodo = 3
  let taxa = 5.5 / 100
  let total_final

  function calc_all() {
    total_final = juros.calc(val_inicial, val_mensal, periodo, taxa)
  }

</script>

<main>
  <div style="display: flex; justify-content:space-around">
    <Input placeholder="Valor Inicial" bind:value={ val_inicial }/>
    <Input placeholder="Valor Mensal" bind:value={ val_mensal }/>
  </div>
  <div style="display: flex; justify-content:space-around">
    <Input placeholder="Taxa de juros" bind:value={ taxa }/>
    <Input placeholder="Período" bind:value={ periodo }/>
  </div>
  <div style="display: flex;">
    <h2>RESULTADO:</h2>
  </div>
  <div style="display: flex;">
    <Card title="Valor total final" bind:result={ total_final }/>
    <Card title="Valor total investido"/>
    <Card title="Total em juros"/>
  </div>
  <button on:click={calc_all}>oi</button>
</main>

<style>

</style>
