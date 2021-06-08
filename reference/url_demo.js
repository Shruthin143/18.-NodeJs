const url = require('url')
// const { URL } = require('url')

const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//Serialized url
console.log(myurl.href);
console.log(myurl.toString());
console.log(myurl.host);
console.log(myurl.pathname);

//serialized query
console.log(myurl.search);
console.log(myurl.searchParams);
myurl.searchParams.append('abc','123')
console.log(myurl.searchParams);

//loop thorugh params

myurl.searchParams.forEach((value, name)=>{
    console.log(`${name}: ${value}`);
})
