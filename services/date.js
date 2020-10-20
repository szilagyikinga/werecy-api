const isOngoing = (startDate, endDate) => {
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  const currentDate = new Date();
  return startDate < currentDate && currentDate < endDate;
};

module.exports = { isOngoing };
