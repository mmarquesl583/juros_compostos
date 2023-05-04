<script>
  import Input from "./lib/Input.svelte";
  import Card from "./lib/Card.svelte";
  import juros from "./assets/juros";
  import ChartPie from "./lib/ChartPie.svelte";
  import ChartBar from "./lib/ChartBar.svelte";
  import { to_number } from "svelte/internal";

  let val_mensal = ""
  let val_inicial = ""
  let periodo = ""
  let taxa = ""
  let meses = ""
  let investido = ""
  let juros_mensal = ""
  let chart = false
  let total_investido = ""
  let total_final = ""
  let total_juros = ""
  let total_investido_formatado = ""
  let total_juros_formatado = ""
  let total_final_formatado = ""

  $: data_pie = {
    labels: ["Investimento", "Juros"],
    datasets: [
      {
        data: [1, 2],
        backgroundColor: ["red", "blue"],
      }
    ],
  }

  $: data_bar = {
    labels: meses,
    datasets: [
      {
        label: 'Valor investido',
        data: investido,
        backgroundColor: ['red']
      },
      {
        label: 'Total em juros',
        data: juros_mensal,
        backgroundColor: ['blue']
      }
    ]
  };

  let main = () => {
    if(val_mensal != "" && val_mensal != "" && periodo != "" && taxa != ""){
      let datas = calc_all()
      total_final = datas[0][0]
      total_investido = datas[0][1]
      total_juros = datas[0][2]
      meses = datas[1][0]
      investido = datas[1][1]
      juros_mensal = datas[1][2]
      total_final_formatado = format(total_final)
      total_investido_formatado = format(total_investido)
      total_juros_formatado = format(total_juros)
      data_pie = update_chart()
      console.log(data_pie)
    }
  }

  let calc_all = () => {
    val_inicial = to_number(val_inicial)
    val_mensal = to_number(val_mensal)
    periodo = to_number(periodo)
    taxa = to_number(taxa)
    return juros.calc(val_inicial, val_mensal, periodo, taxa / 100)
  }

  let format = (el) => {
    return juros.format_real(el)
  }

  let update_chart = () => {
    chart = false
    setTimeout(function(){
      chart = true
    }, 100)
    return {
      labels: ['Investimento', 'Juros'],
      datasets: [{
        data: [total_investido, total_juros],
        backgroundColor: ['red', 'blue']
      }]
    };
  }

</script>

<main>
  <h1>SIMULADOR DE INVESTIMENTOS</h1>
  <div style="display: flex; justify-content:space-between">
    <Input placeholder="Valor Inicial" bind:value={ val_inicial } main={main}/>
    <Input placeholder="Valor Mensal" bind:value={ val_mensal } main={main}/>
  </div>
  <div style="display: flex; justify-content:space-between">
    <Input placeholder="Taxa de juros" bind:value={ taxa } main={main}/>
    <Input placeholder="Período (anos)" bind:value={ periodo } main={main}/>
  </div>
  <div style="display: flex;">
    <h2>RESULTADO:</h2>
  </div>
  <div style="display: flex;">
    <Card title="Valor total final" bind:result={ total_final_formatado }/>
    <Card title="Valor total investido" bind:result={ total_investido_formatado }/>
    <Card title="Total em juros" bind:result={ total_juros_formatado }/>
  </div>
  {#if chart}
  <div style="height:350px; display:flex; justify-content:center; align-items:center; margin-top:35px">
      <ChartPie bind:data={ data_pie } bind:this={ chart } />
      <ChartBar bind:data={ data_bar } bind:this={ chart } />
    </div>
  {/if}
</main>
