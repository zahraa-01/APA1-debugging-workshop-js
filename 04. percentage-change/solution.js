function calculatePercentageChange(original, newAmount) {
  const difference = newAmount - original;
  if (difference === 0) return 0;
  return Math.round((difference / original) * 100);
}

module.exports = { calculatePercentageChange };