# Prerequisites / 선행 조건
```
OS : Linux(Debian 10)
Language : Python
DB : MongoDB
```

# Installing / 설치

### Linux
Download the Linux binary from dist.ipfs.io (opens new window).
```
wget https://dist.ipfs.io/go-ipfs/v0.7.0/go-ipfs_v0.7.0_linux-amd64.tar.gz
```
### Unzip the file:
```
tar -xvzf go-ipfs_v0.7.0_linux-amd64.tar.gz
```
```
> x go-ipfs/install.sh
> x go-ipfs/ipfs
> x go-ipfs/LICENSE
> x go-ipfs/LICENSE-APACHE
> x go-ipfs/LICENSE-MIT
> x go-ipfs/README.md
```
### Move into the go-ipfs folder and run the install script:
```
cd go-ipfs
sudo bash install.sh
```
```
> Moved ./ipfs to /usr/local/bin
Test that IPFS has installed correctly:
```
```
ipfs --version
> ipfs version 0.7.0
```

*Optional : Focusing하는 Directory에 새로운 파일/수정 이벤트 발생을 감지 하는 SW 'Icrontab'을 통해 Script 자동화 가능


# Test / 테스트

아래의 순서대로 테스트를 진행할 수 있습니다.

### 테스트는 add_ipfs.sh -> [hash.txt 생성 -> insert_db.py] 순서로 뒷단에서 진행

  - add_ipfs.sh
    - Focusing 하고 있는 Directory에 있는 파일(업로드 된 파일)을 ipfs에 add
    - add한 파일은 DB에 저장하기 위해 결과 Log를 hash.txt에 생성
    - Python 명령어를 통해 inser_db.py(Hash파일 정제 후 DB에 Insert)
  - hash.txt 예시
    ```
    added QmQwtt8iQxSLDLoWFkHGhMQ48ApvvAnpd5ej83WBG63333 dddddd.png
    added QmWzW5W8ZpXL8XmY2XFsjhEjTVxZQYH18zMaWpWNZU3333 testcert1.txt
    added QmWzW5W8ZpXL8XmY2XFsjhEjTVxZQYH18zMaWpWNZU3333 testcert3.txt
    ```
  - insert_db.py
    - 해당 서버(VM)에 설치되어 있는 Mongo DB에 Connect
    - 파일 공백 단위로 Parse 후에 Mongo DB에 Insert
