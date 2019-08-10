var mongoose     = require('mongoose')
var Schema       = mongoose.Schema

var ResourceSchema = new Schema({
  author: Schema.Types.ObjectId,
  date: {type: Date, default: Date.now},
  type: String,
  tags: [String],
  resource: Schema.Types.Mixed,
  facilitatorOnly: String,
  worth: Number
}, {
    usePushEach: true
  }
)

module.exports = mongoose.model('Resource', ResourceSchema)
