
## Getting Started / 어떻게 시작하나요?

이 곳에서 설치에 관련된 이야기를 해주시면 좋습니다.

### Prerequisites / 선행 조건

```
OS : Linux(Debian 10)
```

### Installing / 설치

아래 명시된 Package Install은 필수 사항 입니다.

```
Nginx : 1.10.3
IPFS : 0.7.0
Incron : 0.5.10
Node.js : v12.19.0
```

## Running the tests / 테스트의 실행

어떻게 테스트가 이 시스템에서 돌아가는지에 대한 설명을 합니다

```
Seller와 Buyer의 계정은 아래를 참고하시면 됩니다.
Seller
  ID : alice
  PW : Alice!234
Buyer
  ID : bob
  PW : Bob!234
```
### 테스트는 Seller -> Buyer -> Seller 순서로 진행
```
[인증서 판매 등록]
  1. Seller 계정인 Alice로 로그인
  2. 화면 우측에 '파일 선택'클릭 후 Local에 저장되어 있는 인증서(Pdf) 선택
  3. '인증서 올리기' 클릭하여 판매 등록
  4. 우측 상단의 계정 클릭 후 'Logout' 클릭
  
[인증서 구매 및 진위 확인]
  5. Buyer 계정인 Bob으로 로그인
  6. 구매하려는 인증서 Section에서 'Download(Preview)' 클릭 후 인증서 파일 확인
  7. 'Buy' 클릭을 통해 인증서 진위여부 확인 및 송금
  8. 우측 상단의 계정 클릭 후 'Logout' 클릭
  
[인증서 구매 및 진위 확인]
  9. 구매된 해당 파일은 Status에서 활성화 된 'Send' 클릭으로 코인 받기 완료
  
```

## Deployment / 배포

### Jenkins 사용
```
Git Bash 및 Jenkins를 통한 배포 방법입니다.
  1. master Branch에 Push
  2. OO.OO...:8080 (Jenkins Server)에 접속
    ID : azureadmin
    PW : OO..
  3. 'skbcweb' 작업을 클릭 후 Build Now 클릭
```
### VScode 사용
```
VScode 사용시 ftp-simple을 설치 후 Config를 아래와 같이 설정합니다.
  1. F1키 입력 후 'ftp-simple:Config - FTP connection setting' 클릭
  2. 설정 정보(입력 후 저장)
    host : WEB Server IP
    port : 22
    type : sftp
    username : WEB Server 접속 계정명
    password : WEB Server 접속 계정 암호
    paht : WEB 코드가 있는 최상위 Directory
  3. 'ftp-simple: Remote directory open to workspace' 클릭
  4. 해당 디렉토리 및 코드들이 보이면 수정 후 저장하면 서버에 배포
```
*단, 해당 배포는 서버의 재기동이 필요 없을 경우(필요시 서버 직접 접근 후 아래 방법으로 재기동)*
### 서버 재기동
```
  1. OO 로 SSH 접근
    username : azureadmin
    password : OO..
  2. /home/azureadmin/.....해당 디렉토리 접근
  3. command 입력
    forever stop 0
    forever start main.js
```
