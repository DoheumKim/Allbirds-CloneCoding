// test-ranking.js


const MAX_SALES = 100;
const NEW_WINDOW = 30;
const ONE_DAY_MS = 1000 * 60 * 60 * 24;

const calculateScore = (product) => {
  // 가상의 createdAt이 문자열일 수도 있어서 Date 객체로 변환
  const createdDate = new Date(product.createdAt);
  
  // 1. 평점 (10점 만점)
  const ratingScore = (product.rating || 0) * 2;

  // 2. 판매량 (10점 만점)
  const salesScore = Math.min((product.sales / MAX_SALES) * 10, 10);

  // 3. 최신성 (5점 만점)
  const daysDiff = (new Date() - createdDate) / ONE_DAY_MS;
  const recencyScore = Math.max(0, ((NEW_WINDOW - daysDiff) / NEW_WINDOW) * 5);

  const total = ratingScore + salesScore + recencyScore;

  // 디버깅을 위해 점수표 리턴 (실제 코드에선 total만 리턴했었음)
  return { total, ratingScore, salesScore, recencyScore };
};

// ---------------------------------------------------------
// 2. 테스트용 가짜 데이터 만들기
// ---------------------------------------------------------
const now = new Date();
const yesterday = new Date(now.getTime() - ONE_DAY_MS);
const oldDay = new Date(now.getTime() - (ONE_DAY_MS * 40)); // 40일 전 (최신 점수 0점)

const mockProducts = [
  {
    name: "A. 1등 예상 (완벽함)",
    rating: 5,        // 10점
    sales: 150,       // 10점 (상한선)
    createdAt: now,   // 5점 (방금 등록)
    // 예상 총점: 25점
  },
  {
    name: "B. 스테디셀러 (평점/판매 좋지만 옛날 상품)",
    rating: 4.5,      // 9점
    sales: 80,        // 8점
    createdAt: oldDay,// 0점 (30일 지남)
    // 예상 총점: 17점
  },
  {
    name: "C. 신상 (판매/평점 없음)",
    rating: 0,        // 0점
    sales: 0,         // 0점
    createdAt: yesterday, // 약 4.8점
    // 예상 총점: 4.8점
  },
  {
    name: "D. 어중간한 상품",
    rating: 3,        // 6점
    sales: 30,        // 3점
    createdAt: oldDay,// 0점
    // 예상 총점: 9점
  }
];

// ---------------------------------------------------------
// 3. 실행 및 결과 출력
// ---------------------------------------------------------
console.log("=== 추천순 정렬 테스트 ===\n");

// 정렬 실행
mockProducts.sort((a, b) => {
  return calculateScore(b).total - calculateScore(a).total;
});

// 결과 확인
mockProducts.forEach((p, index) => {
  const score = calculateScore(p);
  console.log(`${index + 1}위: [${p.name}]`);
  console.log(`   총점: ${score.total.toFixed(2)}점`);
  console.log(`   (평점: ${score.ratingScore} + 판매: ${score.salesScore} + 최신: ${score.recencyScore.toFixed(2)})`);
  console.log("------------------------------------------------");
});