import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema(
	{
		atpnQesitm: {
			type: String,
			// required: true,
			trim: true,
			// maxlength: 50,
		},
		atpnWarnQesitm: {
			type: String,
			// required: true,
			trim: true, // 공백 삭제
		},
		bizrno: {
			type: String,
			trim: true,
		},
		depositMethodQesitm: {
			type: String,
			trim: true,
		},
		efcyQesitm: {
			type: String,
			trim: true,
		},
		entpName: {
			type: String,
			trim: true,
		},
		intrcQesitm: {
			type: String,
			trim: true,
		},
		itemImage: {
			type: String,
			trim: true,
		},
		itemName: {
			type: String,
			trim: true,
		},
		itemSeq: {
			type: String,
			required: true,
			trim: true,
		},
		openDe: {
			type: String,
			trim: true,
		},
		seQesitm: {
			type: String,
			trim: true,
		},
		updateDe: {
			type: String,
			trim: true,
		},
		useMethodQesitm: {
			type: String,
			trim: true,
		},
		createdBy: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Users',
			required: true,
		},
	},
	{ timestamps: true }
);

// bookmarkSchema.index({ Users: 1, title: 1 }, { unique: true });
const BookmarkModel = mongoose.model('Bookmarks', bookmarkSchema);

export default BookmarkModel;
