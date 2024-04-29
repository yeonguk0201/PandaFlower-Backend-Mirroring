# Panda Flower - Backend

**엘리스 SW 트랙 6기 1차 프로젝트** <br>
쇼핑몰 웹 서비스 제작 프로젝트 <br>

<br>

## 1. 프로젝트 기간 & 인원

- 프로젝트 기간: 약 2주 (2023.10.02 ~ 2023.10.13)
- 개발 인원:  
  `Frontend`: 임정훈, 주효원, 김수환 <br>
  `Backend`: 김영운, 김영욱, 이정혜 <br>

<br>

## 2. 사용 기술

- **BackEnd** <br>

  JavaScript <br>
  Node.js <br>
  express <br>
  passport <br>
  mongoDB <br>
  mongoose <br>
  Rest API <br>
  배포: NginX, PM2, GCP

<br>

- **협업** <br>

  Git & Git lab <br>
  Postman <br>
  discord <br>
  Notion <br>
  Gather <br>
  Figma

<br>

## 3. 핵심 기능

쇼핑몰 웹사이트의 핵심 기능으로 크게 `사용자 관련`, `상품 관련`, `장바구니 관련`, `주문 관련` 기능을 구현하였습니다.

<br>

## 4. 내가 맡은 기능

1. 상품 정보 기능 <br>
2. 카테고리 기능 <br>

<br>

# 📍 상품 정보 편집 기능

<br>

**1. 상품 CRUD**

- **Create**
  - multer를 사용했기 때문에 이미지 또한 업로드 할 수 있습니다. 서버에 uploads라는 파일을 만들어 확장자를 png로 저장합니다.
  - req.body로 상품 이름, 카테고리, 서브 카테고리, 가격, 설명, 이미지를 업로드하면 상품이 추가 됩니다.

- **Read**
  - 카테고리 상품 조회
    - 카테고리 내 전체 상품과 서브 카테고리 내 전체 상품을 조회해야 하기 때문에 라우터를 두 개로 나눴습니다. 
    - 페이지 네이션을 구현하기 위해 skip, limit 메소드를 사용했습니다.
    - req.params로 category_id를 받아서 해당 카테고리 내부의 상품을 조회합니다.
    - 카테고리가 없을 경우 에러 메세지를 반환합니다.
  - 상품 상세 정보 조회
    - req.params에서 item_id를 조회합니다.
  - 전체 상품 조회
    - 모든 상품을 조회합니다.

- **Update**
  - params로 수정할 상품 id를 가져온 후, 수정할 정보를 req.body로 받고, 이미지 또한 새롭게 올리면 수정 가능합니다.
  - 상품 id를 잘못 가져오면 에러 메세지를 반환합니다.
 
- **Delete**
  - 상품을 여러 개 한번에 삭제해야 해서 상품 id를 배열로 받고 삭제할 id를 $in을 통해 여러 개를 삭제 가능하게 했습니다.
<br>

**2. 검색**

- 상품 이름이 DB에 있는지 확인 후 없을 시 에러 메세지를 반환합니다. 검색어가 없을 때 또한 에러 메세지를 반환합니다.
- 한글 검색을 위해 RegExp 정규식을 사용했습니다.
- 페이지 네이션을 구현하기 위해 skip, limit 메소드를 사용했습니다.

<br> 

# 📍 카테고리 관련 기능

**카테고리 CRUD**

- **Create**
  - 새로운 카테고리를 생성합니다. req.body로 전달 받은 카테고리 이름으로 새로운 카테고리를 추가합니다. 만약 존재하는 이름이면 에러 메세지를 반환합니다.
  - 서브 카테고리를 생성하 경우 메인 카테고리가 없을 경우 에러 메세지를 반환합니다.
  
- **Read**
  - 카테고리 전체 조회, 서브 카테고리 전체 조회 기능, 카테고리 내 서브 카테고리 조회 기능이 있습니다. 전체 조회는 find를 사용해 조회했습니다.
  - 카테고리 내 서브 카테고리 조회는 params로 카테고리 이름을 받아 해당 카테고리의 서브 카테고리를 조회합니다. 카테고리가 없을 경우 에러 메세지를 반환합니다.

- **Update**
  - params로 카테고리 id를 받고, req.body에서 카테고리 id를 받아 카테고리를 수정합니다. 이때, 해당 카테고리 안에 있는 모든 상품들의 카테고리 또한 업데이트 합니다.
  - 서브 카테고리 또한 동일한 방식으로 업데이트 합니다.

- **Delete**
  - params로 카테고리 id를 받아서 카테고리를 삭제합니다. 서브 카테고리 또한 같은 방식으로 삭제됩니다.

<br>

# 📍 폴더 구조

**Layered Pattern**
![캡처](https://user-images.githubusercontent.com/126956430/276858664-0478fa17-5ef0-4f47-bbf1-e1423af26e46.png)

`단방향 의존성`과 `관심사 분리` 라는 두가지 핵심 원리에 기반하여 폴더 구조를 구성했습니다.

App → Router → Controller → Service → Models 순으로 갈수록 데이터베이스의 접근에 가까워 집니다.

- **App.js:** Express App 으로 서버를 여는 로직입니다. 그리고 Express App 인스턴스를 만들고, 필요한 미들웨어를 붙이는 로직입니다.
- **routes:** 라우팅(엔드 포인트 나누기) 로직을 담당합니다.
- **controllers:** 엔드포인트에 해당하는 함수 로직 - http 요청에 따른 에러 핸들링, service 로직에서 데이터를 받아와서 응답으로 내보내는 로직입니다
- **services:** controller 에서 넘겨받은 인자로 다양한 알고리즘(필터, 정렬 등..)을 처리해서 데이터에 접근하는 로직입니다.
- **models:** 데이터베이스에 접근하기 위한 모델(DAO)이 정의되어 있는 폴더입니다.
- **utils:** 의존성 없이 모든 레이어에서 공통적으로 자주 사용되는 로직을 모듈화 해 놓는 폴더입니다.
- **middlewares:** 컨트롤러에 닿기 전에 반복되는 로직을 모듈화 해 놓는 폴더입니다. (ex. validateToken - 인증 / 인가)
  <br>

# 📍 트러블 슈팅

**1. CORS 에러**
![캡처](https://user-images.githubusercontent.com/126956430/276878012-3a03034a-c071-4ad6-84ae-65780ff2f18d.png)

- CORS 는 Cross Origin Resource Sharing 의 약자로, **Domain 주소가 다를 때** ( = Origin이 다를 때 = Cross Origin 일 때), http 요청 (Resource Sharing) 을 어떻게 처리하는가에 대한 규약입니다.
- **동일한 localhost 라도, port 번호가 다르면 (3000, 5000 등) 다른 Domain** 입니다.
- 일반적으로 Domain 주소가 다르면, 보안을 위해 resource 요청을 수용하지 않아야 합니다.
- 따라서 서버는, 다른 Domain 에서 요청이 왔을 때 이 요청을 수용하는지 안 하는지 대답을 해 주어야 합니다. 이 대답은 서버가 브라우저에 응답할 때의 Response Header 의 {ACCESS-CONTROL-ALLOW-ORIGIN: ~~} 형태로 주게 됩니다.
- 이 때 ~~ 부분에 요청 Domain 이 포함되어 있거나 혹은 \* 로 표시했을 경우, 요청을 수용하겠다는 의미이며, 별도 헤더 표시가 없는 경우는 수용하지 않겠다라는 의미입니다. 이 경우 CORS 에러가 발생합니다.

- ### 해결 방법

1. `npm install cors` 를 통해 cors 모듈을 설치합니다.
2. express 서버를 시작하는 코드가 담긴 app.js 에서 `import cors from “cors”` 를 합니다.
3. `app.use(cors())` 를 통해 express 에 cors 객체를 연결합니다.
