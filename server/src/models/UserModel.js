/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import schemaOptions from './schemaOptions';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true, // 필수
			unique: true, // 중복 허용 여부
			trim: true, // 공백 삭제
			maxlength: 50,
			primary: true,
		},
		password: {
			type: String,
			required: true,
		},
		nickname: {
			type: String,
		},
		email: {
			type: String,
			trim: true,
			unique: true, // 중복을 허용하지 않는다.
		},
		insertedDate: { type: Date, default: Date.now },
	},
	schemaOptions
);

const UserModel = mongoose.model('Users', userSchema);

export default UserModel;
