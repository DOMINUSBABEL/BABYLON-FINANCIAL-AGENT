// App logic for financial calculator

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(mi => mi.classList.remove('active'));
            tabPanes.forEach(tp => tp.classList.remove('active'));

            item.classList.add('active');
            const tabId = item.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Cost Sliders logic
    const devSlider = document.getElementById('range-developers');
    const devVal = document.getElementById('val-developers');
    const overheadSlider = document.getElementById('range-overhead');
    const overheadVal = document.getElementById('val-overhead');
    const cloudSlider = document.getElementById('range-tokens');
    const cloudVal = document.getElementById('val-tokens');

    const totalCostEl = document.getElementById('total-internal-cost');
    const totalSavingsEl = document.getElementById('total-savings-val');

    function formatCurrency(val) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(val);
    }

    function calculateCosts() {
        const dev = parseInt(devSlider.value);
        const overhead = parseInt(overheadSlider.value);
        const cloud = parseInt(cloudSlider.value);

        devVal.textContent = formatCurrency(dev);
        overheadVal.textContent = formatCurrency(overhead);
        cloudVal.textContent = formatCurrency(cloud);

        // Under local AI paradigm, token cost is 0 because we run locally.
        const totalCost = dev + overhead;
        const savings = cloud; // Savings compared to cloud tokens

        totalCostEl.textContent = formatCurrency(totalCost);
        totalSavingsEl.textContent = formatCurrency(savings);

        updateChart(totalCost, savings);
    }

    devSlider.addEventListener('input', calculateCosts);
    overheadSlider.addEventListener('input', calculateCosts);
    cloudSlider.addEventListener('input', calculateCosts);

    // Initial Cost Chart setup
    let myChart = null;
    function updateChart(totalCost, savings) {
        const ctx = document.getElementById('costChart').getContext('2d');
        const labels = ['Costo Personal', 'Costos Operativos', 'Costo Nube Alternativo', 'Costo Real Local'];
        const dataValues = [
            parseInt(devSlider.value), 
            parseInt(overheadSlider.value), 
            parseInt(devSlider.value) + parseInt(overheadSlider.value) + parseInt(cloudSlider.value),
            totalCost
        ];

        if (myChart) {
            myChart.data.datasets[0].data = dataValues;
            myChart.update();
        } else {
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'COP ($)',
                        data: dataValues,
                        backgroundColor: [
                            'rgba(191, 90, 242, 0.6)',
                            'rgba(10, 132, 255, 0.6)',
                            'rgba(255, 69, 58, 0.4)',
                            'rgba(48, 209, 88, 0.6)'
                        ],
                        borderColor: [
                            '#bf5af2',
                            '#0a84ff',
                            '#ff453a',
                            '#30d158'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            grid: { color: 'rgba(255, 255, 255, 0.05)' },
                            ticks: { color: '#8e8a9f' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#8e8a9f' }
                        }
                    }
                }
            });
        }
    }

    calculateCosts(); // Initial call

    // Quoting Logic
    const btnCalc = document.getElementById('btn-calculate-quote');
    const emptyResults = document.getElementById('quote-results-empty');
    const contentResults = document.getElementById('quote-results-content');
    const quoteForm = document.getElementById('quote-form');

    const quotesHistoryBody = document.getElementById('quotes-history-body');

    // Load history
    function loadHistory() {
        fetch('/api/quotes')
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    quotesHistoryBody.innerHTML = '';
                    data.forEach(q => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td><strong>${q.client}</strong></td>
                            <td>${q.type === 'subscription' ? 'Membresía Anual' : q.type === 'one-time' ? 'Licencia Local' : 'Mantenimiento'}</td>
                            <td>${q.workers}</td>
                            <td>${q.margin}%</td>
                            <td class="success-text font-mono">${formatCurrency(q.totalPrice)}</td>
                            <td>${new Date(q.createdAt || q.id).toLocaleDateString()}</td>
                        `;
                        quotesHistoryBody.appendChild(tr);
                    });
                }
            })
            .catch(e => console.log('Error loading quotes:', e));
    }

    loadHistory();

    btnCalc.addEventListener('click', () => {
        if (!quoteForm.reportValidity()) return;

        const client = document.getElementById('client-name').value;
        const workers = parseInt(document.getElementById('num-workers').value);
        const marginPct = parseInt(document.getElementById('margin-target').value);
        const type = document.getElementById('billing-type').value;

        // Base cost is derived from developers / overhead proportional to worker size
        const totalBase = (parseInt(devSlider.value) + parseInt(overheadSlider.value)) / 12; // monthly base
        const scaledBase = totalBase * (1 + (workers / 50)); // scaled by workers size (up to 50)
        
        // Price to client
        const marginMultiplier = 1 / (1 - (marginPct / 100));
        const totalPrice = scaledBase * marginMultiplier;
        const marginValue = totalPrice - scaledBase;
        const supportVal = totalPrice * 0.1;

        // DOM Updates
        document.getElementById('res-client').textContent = client.toUpperCase();
        document.getElementById('res-badge-type').textContent = type === 'subscription' ? 'Membresía' : type === 'one-time' ? 'Licencia' : 'Soporte';
        document.getElementById('res-base-cost').textContent = formatCurrency(scaledBase);
        document.getElementById('res-margin-val').textContent = formatCurrency(marginValue);
        document.getElementById('res-total-sug').textContent = formatCurrency(totalPrice);
        document.getElementById('res-support-val').textContent = formatCurrency(supportVal);

        emptyResults.classList.add('hidden');
        contentResults.classList.remove('hidden');

        // Log to telemetry
        const telLog = document.getElementById('telemetry-logs');
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
        
        const logHtml = `
            <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-info">TESIS:</span> Procesando cotización para ${client}.</div>
            <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-success">SÍNTESIS:</span> Cotización calculada exitosamente. Precio final: ${formatCurrency(totalPrice)} (Margen del ${marginPct}%).</div>
        `;
        telLog.innerHTML += logHtml;

        // Post to API
        fetch('/api/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client,
                workers,
                margin: marginPct,
                type,
                baseCost: scaledBase,
                totalPrice: totalPrice
            })
        })
        .then(res => res.json())
        .then(() => loadHistory())
        .catch(e => console.log('Error saving quote:', e));
    });

    document.getElementById('btn-export-pdf').addEventListener('click', () => {
        window.print();
    });
});