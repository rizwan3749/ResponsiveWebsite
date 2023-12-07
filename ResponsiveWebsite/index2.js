
const express = require("express")
const path = require("path")
const app = express();
const port = 300;

// for serving static files
app.use('/static', express.static('static'))
//  Html data files you have been submit in crome their Data has been loaded this app.use parameter
app.use(express.urlencoded())

app.set('views', path.join(__dirname, 'views'))  // set view of directory of pug

// app.get('/index', (req, res) => {
//  res.status(200).render('index', { title: 'Hey', message: 'Hello there!' })
// });

app.get('/index', (req, res) => {
  
  const con = "This is content part of Html! you to envolve in this"
   const params = { 'title': 'Pubg is the best game', content: con }
  res.render('index', params);
})
app.post("/", (req, res) => {
  // req.body use for encoded the data from your form submit buttun
  // console.log -> se ye yhi sara Data terminal m hi print ho jyega crome m nhi dikhega
   console.log(req.body);
  // -------------------------------------------------------------------------------------->

  Form = req.body
  const params = {'message': 'Your Form has been submitted successfully' }
  res.render('index', params);
})
app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`)
})