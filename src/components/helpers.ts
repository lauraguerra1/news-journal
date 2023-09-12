export const getStringDate = (date: string) => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const articleDate = new Date(date);
  return `${weekDays[articleDate.getDay()]} ${months[articleDate.getMonth()]} ${articleDate.getDate()}, ${articleDate.getFullYear()}`
}