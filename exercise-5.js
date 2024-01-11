// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
  $group: {
  _id: { month: "$created_at" , year: "$created_at" },
  totalPrice: { $sum: "$total_price" },
  },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } },
  ]);