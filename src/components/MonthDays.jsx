function MonthDays(n) {
  const year = 2023;
  const month = n; // January is represented by 0 in JavaScript's Date object

  const days = [];
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  for (let day = startDate.getDate(); day <= endDate.getDate(); day++) {
    const formattedDate = `${day} ${startDate.toLocaleString('default', {
      month: 'short',
    }).toLowerCase()} ${year}`;

    

    days.push(formattedDate);
  }

  

  return days
}


export default MonthDays;
