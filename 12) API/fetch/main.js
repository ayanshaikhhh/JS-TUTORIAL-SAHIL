// JavaScript का Fetch API एक built-in interface है, जिसका use हम HTTP requests (जैसे GET, POST, PUT, DELETE) भेजने और response data handle करने के लिए करते हैं।
// यह Promises पर काम करता है, इसलिए async/await के साथ भी use कर सकते हैं।




// fetch(url, options)
//   .then(response => response.json())   // response को JSON में convert करना
//   .then(data => console.log(data))     // data को use करना
//   .catch(error => console.error(error)); // error handle करना




// let p = fetch("https://goweather.xyz/weather/Berlin");
// p.then((value1) => {
//     console.log(value1.status);
//     console.log(value1.ok);
//     console.log(value1.headers);
//     return value1.json()
// }).then((value2) => {
//     console.log(value2);
// });








// ------------------------------------------------------------------------


// fetch('https://dummyjson.com/test').then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// });






// fetch('https://dummyjson.com/test', {
//     // method:'GET'  . 
//     method:'POST'

// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))












fetch('https://dummyjson.com/products/add', {
    method:'POST',
    body: JSON.stringify({
        title: 'BMW Pencil',
    })

})
.then(res => res.json())
.then(console.log)















