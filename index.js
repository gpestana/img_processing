var express = require('express'),
processing = require('./lib/processing.js')

var img1 = '/home/gpestana/dev/img_processing/imgs/pic.jpg'

processing.getSize(img1, function(size) {
  console.log(size)
})

/*
processing.resize(img1, 200, 100, function(err){
  if(err) console.log(err)
})
*/

processing.transparent(img1, 'rgb(255,255,255)', function(err) {
  if(err) console.log(err)
})

//express for API
