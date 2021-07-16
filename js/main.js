
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lula', 'Neutro', 'Bolsonaro'],
        datasets: [{
            data: [12, 12, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(32, 125, 231, 0.2)',
                'rgba(34, 230, 34, 0.2)',           
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(32, 125, 231, 1)',
                'rgba(34, 230, 34, 1)',          
            ],         
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false
            }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
    }
});
