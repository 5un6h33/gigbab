# 긱밥

> Front
> 
* Framework
- React Native

* Library
- react query
- react navigation
- axois
- material UI
- nodemon
- timeago js
- passport
- passport-kakao

> Pages
> 
1. 로그인
2. 회원가입
3. 메인 페이지
4. 채팅 리스트
5. 채팅
6. 튜토리얼

> Backend
> 
* Framework
- Node js

* DB
- mogoose
- GraphQL

* Cloud Server
- AWS EC2
- Microservice
- Nginx
- Redis

> API
> 

| METHOD | ROUTE | DESCRIPTION |
| --- | --- | --- |
| POST | /api/account/user | 회원가입 |
| POST | /api/account/login | 로그인 |
| POST | /api/account/check | 인증번호 확인 |
| POST | /api/chat/make | 방 만들기 |
| POST | /api/chat/send | 메세지 보내기 |
| POST | /api/chat/expulsion | 퇴출시키기 |
| POST | /api/chat/report | 신고 |
| POST | /api/chat/leave | 방 나가기 |
| GET | /api/chat/room | 채팅방 들어가기 |
| GET | /api/chat/all | 전체 채팅방 조회 (query로 필터 전송) |
| GET | /api/account/:chat_id | 내 채팅 리스트 조회 |

> Workflow
> 
1. 회원 가입 혹은 로그인을 합니다. 
    1. 기숙사 선택 ( 디테일하게 ) → 초반에는 경희대만 시작 → 국캠( 우정원, 제 2기숙사) 설캠 ( 행복기숙사, 세화원 ) → 마이페이지
    2. 카카오톡 회원가입  api 연동 후  
    3. 학생종합정보시스템 보류 ( 유저가 원하면 그때 넣기 )
2. 튜토리얼 이러이러하게 주문을 하고, 주문 및 배달은 외부앱을 이용해야 합니다. 긱밥은 기숙사생들을 이어주는 징검다리 역할입니다~ 설명 기획 
3. 어떤 방이 있는지 , 검색 ( 필터 , 배민 키워드 그대로 하고 )
4. 방에 들어가서 채팅해서 메뉴얼대로 주문하면 되고, ( 방 만들기 → 한 줄 소개글 ) 
5. 없으면 방 만들어서 ( 방 만들기 → 한 줄 소개글 ) 
6. 방 만들기
    1. 몇 명인지 설정
    2. 시간 설정 → 언제 먹을건지
    3. 뭐 먹을지 설정
    4. 방 제목 
    5. 한 줄 소개 
    6. 장소 
    7. 카테고리 설정 ( 한식 중식 일식 양식 잡식 )
    8. 그냥 실명으로 → ( 익명으로 → 실명으로 보류 )
    
7. 방 내에서
    1. 내보내기 기능 , 신고 기능  
    2. 채팅 기능 
    3. 모두가 “음식 잘 받으셨나요?” 안받으셨으면 신고해주세요” 저희가 혼내드림 → 탈퇴 기능 
    
8. 마이페이지 
    1. 내 긱밥 
    2. 이미지 
    3. 이름은 실명 
    4. 장소 설정
    5. 간단한 자기소개 
    6. 비밀번호 변경
    
9. 채팅리스트
    1. 채팅하고 있는 것 
    2. 마감임박 보류
