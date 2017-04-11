// Require Node's http module and assign it to a variable
var http = require('http')
var joke = ''
var punchline = ''
function goodJoke () {
  var randomJoke = Math.random()
  if (randomJoke > 0.66) {
    joke = 'A horse walks into the bar. The bartender asks...'
    punchline = 'Why the long face?'
  } else if (randomJoke > 0.33) {
    joke = 'How does Orion keep his pants up?'
    punchline = 'With an asteroid belt.'
  } else {
    joke = 'A bear walks into a bar and says to the bartender, I\'ll have a pint of beer and a .......... packet of peanuts.'
    punchline = 'The bartender asks, Why the big pause?'
  }
  return {joke, punchline}
}
// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<div><p>Thank you for visiting my homepage!</p></div>'
    )
  } else if (request.url === '/random-joke') {
    var theirJoke = goodJoke()
    response.end(
      '<h1>Hahahahahah</h1>' +
      '<div><p>' + theirJoke.joke + '</p></div>' +
      '<div><p>' + theirJoke.punchline + '</p></div>' +
      '<a href="/"/>back home</a>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteeeee</h1>' +
      '<img src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="Cute Cat">' +
      '<a href="/"/>back home</a>'
    )
  } else {
    response.end(
      '<h1>Page Not Found</h1>' +
      '<div><p>You typed ' + request.url + ' is that what you\'re looking for?</p></div>' +
      '<div><p>Check your spelling! It\'s not us, it\'s you. </p></div>' +
      '<a href="/"/>back home</a>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
