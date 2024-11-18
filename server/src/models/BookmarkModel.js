import mongoose from 'mongoose';
import schemaOptions from './schemaOptions';

const bookmarkSchema = new mongoose.Schema(
	{
		itemSeq: {
			type: String,
			required: true,
			trim: true,
			maxlength: 50,
		},
		username: {
			type: String,
			required: true,
			trim: true, // 공백 삭제
		},
		itemName: {
			type: String,
			trim: true,
		},
		itemImage: {
			type: String,
			trim: true,
		},
		entpName: {
			type: String,
			trim: true,
		},
		efcyQesitm: {
			type: String,
			trim: true,
		},
	},
	schemaOptions
);

const BookmarkModel = mongoose.model('Bookmarks', bookmarkSchema);

export default BookmarkModel;
