function fetchData() {
    return new Promise(function(resolve, reject) {
      fetch('https://fakestoreapi.com/products/1')
        .then(function(response) {
          if (response) {
            console.log("got the response");
            return response.json();
          } else {
            throw new Error('Error occurred while fetching data');
          }
        })
        .then(function(data) {
          console.log('Data is fetched successfully');
          resolve(data);
        })
        .catch(function(error) {
          console.log('Error occurred:', error.message);
          reject(error);
        });
    });
  }
  
  fetchData()
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log('Error occurred while fetching data:', error.message);
    });
  


console.log("start");



// async function fetchData() {
//     console.log("Data fetch started");
//     const response = await fetch("https://fakestoreapi.com/products/1");
//     console.log("Data is fetched from API and JSON parsing starts");
//     const data = await response.json();
//     console.log("Data is converted into JSON");
//     return data
//   }
  
//   console.log("Start");
//   fetchData()
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log("Error occurred while fetching data:", error.message);
//     });
//   console.log("End line");
  