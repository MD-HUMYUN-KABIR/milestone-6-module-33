//go json placeholder
//JSON - javascript object notation
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())// .json is not similer but close to json parse
      .then(json => console.log(json)) */

      const url = 'https://jsonplaceholder.typicode.com/todos/1'
      fetch(url)
      .then(Response => Response.json()) // convert the data to json object
      .then(json => console.log(json)) // display the json object

      function loadData(){
        fetch(url)
        .then(Response => Response.json())
        .then(json => console.log(json))
      }