## 🖥️ 사이트 링크
https://main--hyundaiapp1e.netlify.app/ (https://hyundaiapp1e.netlify.app/)

### 📌 이용 가이드
❗️ 메인페이지에는 **애니메이션 로딩 시간**이 있습니다. 화면이 뜨기까지 조금만 기다려주세요! 

💡 스토어페이지 진입 방법 : header > 스토어 버튼  

💡 상품상세페이지 진입 방법 : header > 스토어 > 제품  

💡 매장찾기페이지 진입 방법 : header > 스토어 버튼 > 매장찾기 버튼

## 🙋🏻‍♀️ 담당자
- 윤서진 : 메인 페이지 / 장바구니 페이지 / header
- 박준민 : 스토어 페이지
- 전우정 : 상품 상세페이지
- 김대호 : 매장찾기 페이지 / footer

## 📎 사이트명 & 선택사유
- 사이트명 : Apple
- 선택 사유 : 애플의 웹사이트는 심플하고 간결한 미니멀리즘을 추구하면서도, 디테일한 요소와 동적인 애니메이션을 통해 세련된 사용자 경험을 제공한다고 생각되어 선택하였습니다. 또한 애플 사이트는 최신 웹 기술과 트렌드를 반영하여 이를 클론 코딩하면서 반응형 웹 디자인, 애니메이션, 고급 CSS와 JavaScript 기능들을 학습하고 익힐 수 있을 거라 판단하였습니다.

## 🔍 구현 시 어려웠던 점(해결)
1. 메인페이지 : 애니메이션 구현의 어려움
  - 스크롤 화면 감지 : 각 스크롤 섹션 높이를 알아내고, 스크롤 감지하여 현재 씬 알아내기
  - 캔버스 다루기 : 반응형에 맞춰 캔버스의 크기를 계산하기

2. 스토어페이지 : swiper의 slide의 어려움 페이지 왼쪽으로 아이템이 숨겨지게 하고 싶었는데, margin 값을 주었더니 아이템이 숨겨지는 문제 발생. 해결하기 위해서 slider 옵션에 beforeOffset 값을 사용. 반응형으로 device-width 값에 따라 동적으로 offset을 주어 사용하고자 useEffect로 width에 따라 값을 계산하여 offset을 가지도록 하여 해결
   
3. 장바구니페이지 : 컬러를 선택할 수 있는 상품, 크기를 선택할 수 있는 상품 등 상품마다 필요한 UI 요소가 달라 이것을 어떤 로직으로 구현해야 할지 떠올리는데 어려움을 겪었습니다. 예를 들어 New를 표시해야 하는 새 상품에는 더미 데이터인 productList에 isNew라는 데이터를 boolean 값으로 넣어 true인 경우 span 태그의 hidden 속성을 제거해 표시하게 하는 등 상품 데이터에 필요한 데이터를 넣어 해결했습니다.
   
4. 매장찾기페이지 : 카카오 맵을 구현하는 과정에서 기능을 구현하기 어려웠지만 리액트 카카오 맵 라이브러리를 통해서 쉽게 기능들을 구현할 수 있었습니다. 지도의 크기를 화면에 맞게 반응형을 구현하는 과정에서도 테일윈드를 통해서 쉽게 구현할 수 있었다.

