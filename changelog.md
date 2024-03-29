# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Types of changes

- `Added` for new features
- `Changed` for changes in existing functionality.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.

- `Bug` for any issue/error occurred
- `Installed` for installing new dependencies
- `Setting` for adding/changing the general settings

## [0.1.17] - 2022-02-07

written by 조효형

`Added`

- collection 선택 시 뒤로가기 버튼 추가
- 좋아요 클릭시 디테일페이지 이동 부분 수정
- 주소이름 추가

`Changed`

- collection슬라이더 데이터 상수로 변경
- collection 쿼리파라미터 추가
- 데이터 필드 이름 수정
- mockAPI 핸들러 수정

`Remove`

- 불필요한 utill 함수 제거

## [0.1.16] - 2022-01-26

written by minervatea

`Summary`

Cart 통합, Info Modal Layout

`Installed`

- nanoid library

`Changed`

- dynamic url for restaurant detail page

`Added`

- Info Modal

## [0.1.15] - 2022-01-15

`Installed` webpack Merge 설정

`Setting` webpack 설정(분리 => dev(devtool 변경),prod,common)

written by esther615kim

`Summary`

- Navbar 검색창 추가 & 반응형, FavList 추가

`Changed`

- path={PATH_RESTAURANTS_DETAIL} to StorePage
- App.jsx to add FavList and status
- Header/index.tsx to add responosive styling, rename components('Styled-element') and add menu buttons

`Added`

- cartSlicer
- FavList component
- Basket folder in src/components

## [0.1.1] - 2022-01-09

`Setting`

- swagger api 문서 추가

## [0.1.1] - 2022-01-08

written by 조효형

`Added`

- 스켈레톤 추가
- env_sample 추가

`Changed`

- restaurants 모바일 ui 작업

## [0.1.0] - 2022-01-05

written by Minju

`Added`

- 토핑들 추가될시, 토핑과 토탈 계산해서 리덕스 스토어에 저장
- 메뉴 카테고리 선택시 그 섹션으로 스크롤 이동

`Changed`

- changed component name from ShopDetail to RestaurantDetail
- 모달창 x 버튼 색깔이 가려져서 변경

## [0.0.9] - 2022-01-03

written by 조효형

`Added`

- Kakao dotEnv 카카오 env 설정
- LeftNavBar 추가
- 목서버 restaurants 연동

`Changed`

- restaurants 카드리스트 ui 수정

`Remove`

- restaurtsSlider 상점 상단노출 이벤트 관련 슬라이더 제거

### [0.0.8] - 2021-12-13

written by Hoin

`Installed`

- msw (목 서버, 테스트에 용이함, 실제로 적용가능)
- copy-webpack-plugin(특정 파일 복사해서 빌드시 편리함)
- mui/lab (연구중인 mui 컴포넌트 )

`Setting`

- mock service worker 환경 구축(https://imch.dev/posts/experiment-of-mock-service-worker)
- Webpack Config CopyPlugin 활용 mockServiceWorker.js build 시 카피

`Added`

- addressApi => redux-toolkit 을 활용한 api mock 관 연동 및 활용
- AddressSearchComponent => 검색 된 장소를 서버와 연동 후 응답에 따른 액션 추가

### [0.0.7] - 2021-12-11

written by Hoin
Added

- add Header.jsx
- Installed/Setting - Webpack Env Config
  - https://www.cluemediator.com/how-to-set-environment-variables-in-react-with-webpack
- Installed/Setting - installed Axios, setting react Async Await(regeneratorRuntime config)
  - https://velog.io/@haebin/React-regeneratorRuntime-is-not-defined-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0

## [0.0.6] - 2021-12-12

written by 조효형

`Added`

- add Slider Component
- add restaurants Page
- add typescript

## [0.0.5] - 2021-12-06

written by minju

`Added`

- add ShopHedaer/index.js
- add ShopDetails/index.js
- add ShopDetails/data.js

`Installed`

- file-loader
- url-loader
-

## [0.0.4] - 2021-12-06

written by esther615kim

`Added`

- add ThemeMenu.jsx
- add landing.test.js
- add data.js for mock data
  `Changed`
- add new font to index.html and theme.js

## [0.0.3] -

## [0.0.2] -

## [0.0.1] - 2021-11.27

written by esther615kim
`Added`

- add changelog
  `Installed`
- styled-components
- jest --save-dev
  `Changed`
- mute PATH_USER `Bug`
- change the folder structure in components>Sign>SignUp/LogIn -fixed

`Bug`

- ERROR in ./src/components/Sign/SignUp/index.js
  Module not found: Error: Can't resolve '../../constants/PathConstants' in 'C:\Users\MKKIM\Desktop\butler-ui\butler-web\src\components\Sign\SignUp

https://keepachangelog.com/en/0.3.0/
