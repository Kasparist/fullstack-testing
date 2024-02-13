const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://KuumaTanssi:${password}@cluster0.rbci3un.mongodb.net/noteApp?
    retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)


const notes = [{
  content: 'HTML is easy',
  important: true,
},
{
  content: 'Mongo is a goose, a mongoose',
  important: true,
},
{
  content: 'Weird how things tend to workout in mysterious ways',
  important: true,
},
{
  content: 'To understand or to not understand, where is the problem?',
  important: true,
}
]


// const note = new Note()

// const note = new Note({
//     content: 'Weird how things tend to workout in mysterious ways',
//     important: true,
// })

// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

Note.find({ important: true }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})