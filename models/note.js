const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

// ÄLÄ KOSKAAN TALLETA SALASANOJA GitHubiin!
const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
.then(result => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB', error.message)
})
// `mongodb+srv://KuumaTanssi:${"23OhKe24."}@cluster0.rbci3un.mongodb.net/noteApp?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)