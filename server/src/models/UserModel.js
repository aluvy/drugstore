/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import schemaOptions from './schemaOptions';

/**
 * user_id ==> _id, 자동생성
 * login_id ==> username
 * password
 * nickname
 * email
 * created_at ==> createdAt, 자동생성
 * updated_at ==> updatedAt TODO: 요소 체크
 */

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
			minlength: 10,
		},
		nickname: {
			type: String,
			required: true,
			trim: true,
			// minlength: 10,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true, // 중복을 허용하지 않는다.
			// minlength: 50,
		},
		// createdAt: {
		// 	type: Date,
		// 	default: Date.now,
		// },
		// updatedAt: {
		// 	type: Date,
		// 	default: Date.now,
		// },
		token: {
			type: String,
		},
		tokenExp: {
			type: Number,
		},
	},
	schemaOptions
);

const UserModel = mongoose.model('Users', userSchema); // 스키마를 모델로 감싼다.

export default UserModel;
