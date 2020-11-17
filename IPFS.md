# Prerequisites / 선행 조건
```
OS : Linux(Debian 10)

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

### 테스트는 Seller -> Buyer -> Seller 순서로 진행
