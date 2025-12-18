// sync-soldcount.js
// orders 데이터를 기반으로 products의 soldCount를 동기화하는 스크립트

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from '../src/models/Order.js';
import Product from '../src/models/Product.js';

// .env 로드
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/allbirdsDB';

async function syncSoldCount() {
  try {
    console.log('MongoDB 연결 중...');
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB 연결 완료');

    // 1. 모든 상품의 soldCount를 0으로 초기화
    console.log('\n1단계: 모든 상품의 soldCount를 0으로 초기화...');
    await Product.updateMany({}, { $set: { soldCount: 0 } });
    console.log('초기화 완료');

    // 2. 모든 주문 데이터 조회
    console.log('\n2단계: 주문 데이터 집계 중...');
    const orders = await Order.find({}).lean();
    console.log(`총 ${orders.length}개의 주문을 찾았습니다.`);

    // 3. productId별로 quantity 합산
    const soldCountMap = new Map();
    
    for (const order of orders) {
      for (const item of order.items) {
        const currentCount = soldCountMap.get(item.productId) || 0;
        soldCountMap.set(item.productId, currentCount + item.quantity);
      }
    }

    console.log('\n3단계: 상품별 판매량 집계 결과:');
    for (const [productId, count] of soldCountMap.entries()) {
      console.log(`  상품 ID ${productId}: ${count}개 판매`);
    }

    // 4. 각 상품의 soldCount 업데이트
    console.log('\n4단계: 상품 soldCount 업데이트 중...');
    for (const [productId, count] of soldCountMap.entries()) {
      await Product.updateOne(
        { _id: productId },
        { $set: { soldCount: count } }
      );
      const product = await Product.findById(productId);
      console.log(`  ✓ ${product?.name || `상품 ${productId}`}: soldCount = ${count}`);
    }

    console.log('\n동기화 완료!');
    
    // 5. 결과 확인
    console.log('\n최종 확인: 판매량 상위 5개 상품');
    const topProducts = await Product.find({})
      .sort({ soldCount: -1 })
      .limit(5)
      .select('_id name soldCount')
      .lean();
    
    console.table(topProducts);

  } catch (error) {
    console.error('에러 발생:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nMongoDB 연결 종료');
  }
}

// 스크립트 실행
syncSoldCount();
