import axios from 'axios';

export function loginUser(username) {
  return new Promise((resolve, reject) => {


    axios
      .post('http://localhost:3000/login', { username }) 
      .then(response => {
        if (response.data === 'Login successful!') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
