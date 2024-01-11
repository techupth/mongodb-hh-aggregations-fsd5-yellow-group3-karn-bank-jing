db.pizzaOrders.aggregate([
  {
    $group: {
      _id: {
        month: "$created_at",
        year: "$created_at",
        total_sales: "$total_price",
      },
    },
  },
  { $sort: { _id: -1 } },
]);
