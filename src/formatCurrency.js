export default function formatCurrency(price) {
  const formattedRupees = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);

  return formattedRupees;
}
