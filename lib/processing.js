var gm = require('gm')//.subClass({imageMagick: true })

var output_folder = '/home/gpestana/dev/img_processing/imgs/'

function resize(img_path, width, height, cb) {
  gm(img_path).resize(width, height).
  write(output_folder+'out.jpg', function(err) {
    if(err) cb(err)
 })
}

function getSize(img_path, cb) {
  gm(img_path).size(function(err, value) {
    if(err) {
      console.log('error | '+err)
      return
    }
    cb(value)
  })  
}

function transparent(img_path, color, cb){
  gm(img_path).transparent(color).
  write(output_folder+'white.jpg', function(err) {
    if(err) cb(err)
  })
}

exports.transparent   = transparent
exports.getSize       = getSize
exports.resize        = resize
