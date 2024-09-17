# Web Portfolio

## Config Server 
#### 구성에 사용할 키 생성
``` bash
$ keytool -genkeypair -keyalg RSA -alias selfsigned -keystore keystore.jks -storepass password -validity 10000
```

#### 생성된 키를 사용하여 암호화
``` bash
curl {service-config-server}/encrypt -d "password"
```

#### 서비스에서 암호화된 비밀번호 사용
datasource:
      driver-class-name: org.mariadb.jdbc.Driver
      url: jdbc:mysql://{DBServer}/webdb?characterEncoding=utf8
      username: webdb
      password: '{cipher}AQC3QkSYiQPShNYRPR7Yqg8DbGvEo2jC+VEf8XL1naBtSvw4YyC5n7JPCaKgqQMgZE9ksm59myUAt5WWtWYENqkQH+J3LjiHurLQXTmOGML58f+Tq6Q='

#### 구성 정보 내용 확인

- service-api1
   - `default` : http://{service-config-server}/service-api1/default

   - `development` : http://{service-config-server}/service-api1/development

   - `production` : http://{service-config-server}/service-api1/production