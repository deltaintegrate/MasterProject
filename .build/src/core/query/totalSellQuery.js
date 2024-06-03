"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalSellQuery = void 0;
exports.totalSellQuery = `
WITH monthly_sales AS (
  SELECT 
      p.category,
      EXTRACT(MONTH FROM s.date) AS month,
      SUM(s.quantity * s.price) AS total_sales,
      ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY EXTRACT(YEAR FROM s.date), EXTRACT(MONTH FROM s.date)) AS month_order
  FROM 
      sale s
  INNER JOIN 
      product p ON s.product_id = p.id
  GROUP BY 
      p.category, EXTRACT(YEAR FROM s.date), EXTRACT(MONTH FROM s.date)
),
previous_month_sales AS (
  SELECT 
      category,
      month,
      LAG(total_sales) OVER (PARTITION BY category ORDER BY month_order) AS previous_month_sales
  FROM 
      monthly_sales
)
SELECT 
  m.category,
  m.month,
  m.total_sales,
  ROUND(((m.total_sales - p.previous_month_sales) / p.previous_month_sales) * 100, 2) AS growth_percentage
FROM 
  monthly_sales m
LEFT JOIN 
  previous_month_sales p ON m.category = p.category AND m.month = p.month
ORDER BY 
  m.category, m.month;
`;
