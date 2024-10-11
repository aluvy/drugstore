/* eslint-disable prettier/prettier */
// libs
import bcryptjs from 'bcryptjs';
import { Router } from 'express';

// modules
// import passport from '../passport.js';
import { newToken, authenticateUser } from '../utils/auth.js';
import UserModel from '../models/UserModel.js';

// router init
const router = Router();

// router
router.post('/login', (req, res) => {
	// 요청죈 username이 데이터베이스에 있는지 찾는다.
	UserModel.findOne({
		username: req.body.username,
	})
		.then(user => {
			// non registered user
			if (!user) {
				res.status(401).send('Authentication failed. User not found.');
			}
			bcryptjs.compare(req.body.password, user.password, (error, result) => {
				if (error) {
					res.status(500).send('Internal Server Error');
				}
				if (result) {
					// create token with user info
					const token = newToken(user);

					// current logged-in user
					const loggedInUser = {
						username: user.username,
						nickname: user.nickname,
					};

					// return the information including token as JSON
					res.status(200).json({
						success: true,
						user: loggedInUser,
						message: 'Login Success',
						token: token,
					});
				} else {
					res.status(401).json('Authentication failed. Wrong password.');
				}
			});
		})
		.catch(error => {
			res.status(500).json('Internal Server Error');
			throw error;
		});
});

router.post('/signup', (req, res) => {
	const { username, password, nickname, email } = req.body;
	// encrypt password
	// NOTE: 10 is saltround which is a cost factor
	bcryptjs.hash(password, 10, (error, hashedPassword) => {
		if (error) {
			console.log(error);
			return res.status(500).json({
				error,
			});
		} else {
			const newUser = new UserModel({
				username,
				password: hashedPassword,
				nickname,
				email,
			});
			newUser.save((error, saved) => {
				if (error) {
					console.log(error);
					res.status(409).send(error);
				} else {
					console.log(saved);
					res.send(saved);
				}
			});
		}
	});
});

// TODO: Logout 구현 필요
// router.put('/logout', async (req, res) => {
// 	console.log(req, res);
// 	try {
// 		const updatedDoc = UserModel.findOneAndUpdate(
// 			{
// 				_id: req.user._id,
// 				// token: '',
// 			},
// 			{
// 				token: '',
// 			},
// 			req.body,
// 			{ new: true }
// 		)
// 			.lean()
// 			.exec();

// 		if (!updatedDoc) {
// 			return res.status(400).json({ message: 'cannot update the data' });
// 		}
// 		res.status(200).json({ ...updatedDoc });

// 		// (err, user) => {
// 		// if (err) return res.json({ success: false, err });
// 		// return res.status(200).send({ success: true });
// 		// }
// 	} catch (e) {
// 		console.error(error);
// 		res.status(400).json({ message: 'sth wrong', error });
// 	}
// });

// router.get('/logout', async (req, res, next) => {
// 	try {
// 		console.log('req.body', req.body.token);
// 		// var token = req.token;
// 		// if (token) {
// 		// 	//세션정보가 존재하는 경우
// 		// 	await req.token.destroy(function(err) {
// 		// 		if (err) console.log(err);
// 		// 		else {
// 		// 			res.redirect('/');
// 		// 		}
// 		// 	});
// 		// }
// 	} catch (e) {
// 		// console.log(e);
// 	}
// 	// res.redirect('/');
// });

app.get('/logout', authenticateUser, (req, res) => {
	//미들웨어에서 가져옴
	User.findOneAndUpdate({ username: req.body.username }, { token: '' }, (err, user) => {
		if (err) return res.json({ success: false, err });
		return res.status(200).send({
			success: true,
		});
	});
});

// router.get('/logout', async function (req, res, next) {
//   var session = req.session;
//   try {
//       if (session.user) { //세션정보가 존재하는 경우
//           await req.session.destroy(function (err) {
//               if (err)
//                   console.log(err)
//               else {
//                 res.redirect('/');
//               }
//           })
//       }
//   }
//   catch (e) {
//     console.log(e)
//   }
// res.redirect('/');
// })

// router.get('/logout', (req, res) => {
// 	UserModel.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
// 		if (err) return res.json({ success: false, err });
// 		return res.status(200).send({ success: true });
// 	});
// });

export default router;
