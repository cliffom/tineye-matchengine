# tineye-matchengine

TinEye MatchEngine API node.js library

## Installation
```
npm install tineye-matchengine
```

## Usage
```js
const {MatchEngine} = require('tineye-matchengine')
matchengine = new MatchEngine('USERNAME', 'PASSWORD', 'BASE_URL')

// Search your index for an image
url = 'http://tineye.com/images/meloncat.jpg'
matchengine.search({image_url: url}, function(err, data) {
    console.log(err, data)
})

// Add an image to your index
matchengine.add({url: url, filepath: "meloncat.jpg"}, function(err, data) {
    console.log(err, data)
})

// Delete an image from your index
matchengine.delete({filepath: "meloncat.jpg"}, function(err, data) {
    console.log(err,data)
})

// Ping the service
matchengine.ping(function(err, data) {
    console.log(err,data)
})

// Get the number of items in the collection
matchengine.count(function(err, data) {
    console.log(err,data)
})

// List the images present in your API
matchengine.list({offset: 0, limit: 5}, function(err, data) {
    console.log(err,data)
})
```

## Contributing
