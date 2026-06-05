// Frontend logic for Financial Agent with Live Update capabilities
let myChart = null;

function renderChart(developers, overhead, tokens) {
    const ctx = document.getElementById('costChart').getContext('2d');
    const dataPoints = [developers, overhead, tokens, developers + overhead + tokens];
    
    if (myChart) {
        myChart.data.datasets[0].data = dataPoints;
        myChart.update();
        return;
    }
    
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Desarrolladores', 'Overhead', 'Tokens Nube Sim.', 'Costo Total'],
            datasets: [{
                label: 'Costo COP',
                data: dataPoints,
                backgroundColor: ['rgba(99, 102, 241, 0.2)', 'rgba(236, 72, 153, 0.2)', 'rgba(245, 158, 11, 0.2)', 'rgba(16, 185, 129, 0.2)'],
                borderColor: ['#6366f1', '#ec4898', '#f59e0b', '#10b981'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function exportToCSV(quotes) {
    let csvContent = "data:text/csv;charset=utf-8,ID,Cliente,Empleados,Costo Base,Margen %,Precio Total,Modelo Comercial,Fecha\n";
    quotes.forEach(q => {
        csvContent += `${q.id},"${q.client_name}",${q.workers_count},${q.base_cost},${q.margin_pct},${q.total_price},"${q.billing_type}",${q.createdAt}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `cotizaciones_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
