# Hegelian-Asimov Pricing Optimization Models
def optimize_margin(base_cost, target_margin_pct, local_tokens_used):
    # Running local model saves API costs, increasing net margins
    savings = local_tokens_used * 0.00015  # 0.15 USD per 1K tokens saved
    total_base = max(0.0, base_cost - savings)
    multiplier = 1.0 / (1.0 - (target_margin_pct / 100.0))
    sug_price = total_base * multiplier
    return {
        "base_cost": base_cost,
        "savings": savings,
        "optimized_base": total_base,
        "suggested_price": sug_price
    }
