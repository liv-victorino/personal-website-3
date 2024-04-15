
function myFunction() {
    // Copy the text inside the text field
   navigator.clipboard.writeText('livmusicx@gmail.com');
  
   // Alert the copied text
   alert("Email copied to clipboard: " + 'livmusicx@gmail.com');
  }

  
let valueArray;

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyAWSCkSO9yswabQf0TJTsMwBLYpGvYboPk'
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://sheets.googleapis.com/v4/spreadsheets/1CYIk7HDAxFyYa0gZBUPqs1jXAUNRQMiVh5rWHALo3kA/values/Concerts!A2:B5',
    
   })
  }).then(function(response) {
   valueArray = response.result.values;
   console.log(valueArray);
    updateCalendar(valueArray);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);


function updateCalendar(data){

  const numShows = data.length;
  console.log(numShows);
 
  const concert = document.getElementById("concert-container")

  let ul = document.createElement('ul')
  ul.style = 'list-style-type:none; padding:0;'

  for (let i = 0; i < numShows; i++){

    let showTitle = data[i][0];   
    let showLink = data[i][1];
    const li = document.createElement('li')
      const a = document.createElement('a')
      a.className = 'headerLink showLink'
      a.href = showLink;
        const span = document.createElement('span')
        span.className = 'subHeader header1'
        span.innerHTML = showTitle + " ";
      a.appendChild(span)
    console.log(li);
      if(showLink){
        a.insertAdjacentHTML('beforeend', '<img style="max-height:1rem;" src="./images/link_icon.png">')
      }

    li.appendChild(a)


    ul.appendChild(li)

    
  }
  console.log(concert)
  concert.prepend(ul)


}