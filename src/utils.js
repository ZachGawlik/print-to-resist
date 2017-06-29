import moment from 'moment';

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export function getShortDate(dateString) {
  return moment(dateString).format('MM/DD/YY');
}
