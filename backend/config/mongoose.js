import mongoose from 'mongoose'
;(async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log('mongodb is connected to ', db.connection.host)
  } catch (error) {
    console.log(error)
  }
})()
