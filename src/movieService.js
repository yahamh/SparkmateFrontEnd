import axios from 'axios';

export function getFavoriteMovies(username) {
  return new Promise((resolve, reject) => {
    axios
        .get('http://localhost:3000/getFavoriteMovies', { params: { username } })
        .then(response => {
          resolve(response.data);
          console.log(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
}


export function getAllMovies() {
    return new Promise((resolve, reject) => {
      axios
          .get('http://localhost:3000/getAllMovies')
          .then(response => {
            resolve(response.data);
            //console.log(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
  }
