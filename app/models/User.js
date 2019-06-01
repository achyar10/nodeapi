import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	email:{
		type: String,
		unique: true,
		required: true
	},
	fullName: {
		type: String,
		required: true
	}
})

export default mongoose.model('User', userSchema)