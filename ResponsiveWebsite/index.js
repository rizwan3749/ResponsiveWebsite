
// // pages navigation js
// const http = require('http');
// const fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;



// const home = fs.readFileSync('index.html');
// const about = fs.readFileSync('./about.html');
// const service = fs.readFileSync('./service.html');
// const contact = fs.readFileSync('/contact.html');

// const server = http.createServer((req, res)=>{
//     console.log(req.url)
//     url = req.url;
    

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html')
//     if(url == 'index.html'){
//         res.end(home)
//     }
//     else if(url == '/about.html'){
//         res.end(about)
//     }
//     else if(url == '/service.html'){
//         res.end(service)
//     }
//     else{
//         res.end("<h1>402 not found</h2>")
//     }

// });
// server.listen(port,hostname, ()=>{
//        console.log(`Server running at Responsive Websites${port}`);
//        });

  burger = document.querySelector('.burger')
  navbar = document.querySelector('.navbar')
  navlist = document.querySelector('.nav-list')   
  rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});






