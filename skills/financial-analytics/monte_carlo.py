# Monte Carlo Simulator for cost and margin distributions
import random

def run_simulation(base_cost, uncertainty_pct, iterations=5000):
    results = []
    for _ in range(iterations):
        # Normal distribution of costs around the baseline
        simulated_cost = random.gauss(base_cost, base_cost * (uncertainty_pct / 100.0))
        results.append(max(0.0, simulated_cost))
    
    results.sort()
    p10 = results[int(iterations * 0.10)]
    p50 = results[int(iterations * 0.50)]
    p90 = results[int(iterations * 0.90)]
    return {
        "p10_optimistic_cost": p10,
        "p50_expected_cost": p50,
        "p90_conservative_cost": p90,
        "variance": sum((x - p50)**2 for x in results) / iterations
    }
