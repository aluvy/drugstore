// libs
import { Router } from 'express';
// modules
import BookmarkModel from '../models/BookmarkModel.js';

// router init
const router = Router();

// 북마크 목록 조회
router.get('/', async (req, res) => {
	try {
		const docs = await BookmarkModel.find({
			createdBy: req.user._id,
		})
			.lean()
			.exec();

		res.status(200).json({
			bookmarks: docs,
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'sth wrong', error });
	}
});

// 북마크 추가
router.post('/', async (req, res) => {
	try {
		const doc = await BookmarkModel.create({
			...req.body,
			createdBy: req.user._id,
		});
		res.status(201).json({ data: doc });
	} catch (error) {
		console.log(error);
		if (error.code === 11000) {
			return res.status(400).send({ message: 'Duplicated Data', error });
		}
		res.status(400).send({ message: 'sth wrong', error });
	}
});

// 북마크 삭제
router.delete('/:id', async (req, res) => {
	// console.log('req.params.itemSeq', req);
	try {
		const removed = await BookmarkModel.findOneAndRemove({
			createdBy: req.user._id,
			// _id: req.params.id,
			itemSeq: req.params.id,
		})
			.lean()
			.exec();

		if (!removed) {
			return res.status(400).json({ message: 'cannot remove the data' });
		}

		return res.status(200).json({ ...removed });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'sth wrong', error });
	}
});

export default router;
