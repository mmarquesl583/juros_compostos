<script>
    import Chart from 'chart.js/auto';
    import { onDestroy, onMount } from 'svelte';

    export let data;

    let chart;

    onMount(() => {
      const canvas = document.getElementById('pie-chart');
      chart = new Chart(canvas, {
        type: 'pie',
        data
      });
    });

    onDestroy(() => {
      chart.destroy();
    });
</script>

<canvas id="pie-chart"></canvas>