

function fetchAPI() {
    return fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Not found`));
    });
  }
  export default fetchAPI