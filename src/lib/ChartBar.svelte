<script>
    import Chart from 'chart.js/auto';
    import { onDestroy, onMount } from 'svelte';

    export let data;

    let chart;

    onMount(() => {
      const canvas = document.getElementById('bar-chart');
      chart = new Chart(canvas, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true,
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              position: 'top'
            }
          }
        }
      });
    });

    onDestroy(() => {
      chart.destroy();
    });
  </script>

  <canvas id="bar-chart"></canvas>
