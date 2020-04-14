import { format } from 'date-fns';

const formatDate = (date) => {
  const adjustedDate= date.substr(0, date.indexOf('T')); 

  const adjustedDateArray = adjustedDate.split('-');

  return format(
    new Date(adjustedDateArray[0], adjustedDateArray[1] - 1, adjustedDateArray[2]),
    'MMM dd, yyyy'
  )
}

export default formatDate;
