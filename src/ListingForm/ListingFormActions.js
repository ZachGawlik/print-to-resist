const API_ROOT = process.env.NODE_ENV === 'production' ?
  'http://printtoresist.org/api' :
  'http://localhost:3000/api';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function submitForm(data) {
  fetch(`${API_ROOT}/listing`, {
    method: 'POST',
    body: data
  })
  .then(checkStatus)
  .then(response => {
    console.log('success');
  })
  .catch(err => {
    console.log(err);
  });
}
