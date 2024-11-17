require('dotenv').config(); // .env 파일 로드

// libs
import { Router } from 'express';
// import express from 'express';
import axios from 'axios';

// ENV
const API_URL = process.env.API_URL;
const API_KEY_DECODING = process.env.API_KEY_DECODING;

// router init
const router = Router();

router.get('/', async (req, res) => {
	try {
		// 요청 데이터
		const { pageNo, numOfRows, entpName, itemName, itemSeq, efcyQesitm, useMethodQesitm, atpnWarnQesitm, atpnQesitm, intrcQesitm, seQesitm, depositMethodQesitm, openDe, updateDe } = req.query;

		const response = await axios.get(API_URL, {
			params: {
				serviceKey: API_KEY_DECODING, // 공공데이터포털에서 받은 인증키
				pageNo, // 페이지번호
				numOfRows, // 한 페이지 결과 수
				entpName, // 업체명
				itemName, // 제품명
				itemSeq, // 품목기준코드
				efcyQesitm, // 이 약의 효능은 무엇입니까?
				useMethodQesitm, // 이 약은 어떻게 사용합니까?
				atpnWarnQesitm, // 이 약을 사용하기 전에 반드시 알아야 할 내용은 무엇입니까?
				atpnQesitm, // 이 약의 사용상 주의사항은 무엇입니까?
				intrcQesitm, // 이 약을 사용하는 동안 주의해야 할 약 또는 음식은 무엇입니까?
				seQesitm, // 이 약은 어떤 이상반응이 나타날 수 있습니까?
				depositMethodQesitm, // 이 약은 어떻게 보관해야 합니까?
				openDe, // 공개일자
				updateDe, // 수정일자
				type: 'json', // 응답데이터 형식(xml/json) Default:xml
			},
		});

		res.json({
			success: true,
			data: response.data.body,
			header: response.data.header,
		}); // 프론트엔드에 전달
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'API 호출 오류', error });
	}
});

export default router;
