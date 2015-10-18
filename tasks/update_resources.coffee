gulp = require 'gulp'
async = require 'async'
del = require 'del'
fs = require 'fs-extra'
utils = require './utils'

gulp.task 'update:resources', (done) ->
  del './resources/linux/icons/*'
  [16, 32, 48, 64, 128, 256, 512].forEach (size) ->
    fromPath = './resources/source/icon@' + size + 'w.png'
    toPath = './resources/linux/icons/' + size + '.png'
    fs.copy fromPath, toPath, utils.log
  done