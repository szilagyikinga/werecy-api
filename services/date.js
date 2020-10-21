const isOngoing = (startDate, endDate) => {
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  const currentDate = new Date();
  return startDate < currentDate && currentDate < endDate;
};

const isOver = (endDate) => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  endDate.setHours(23, 59, 59, 999);
  return endDate < currentDate;
};

const startOfDay = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return currentDate;
};

const endOfDay = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  return currentDate;
};

module.exports = { isOngoing, endOfDay, isOver, startOfDay };
