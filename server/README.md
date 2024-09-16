# DrugStore Server

```shell
* npm run start
```
<br>

### mongoDB cloud & swagger
```
* monggoDB
  - https://cloud.mongodb.com/
* swagger
  - http://localhost:3000/api/docs/
```

<br>

### mongoDB connect error & fail
1. Deployment > database
https://cloud.mongodb.com/v2/65c2cc691c9404608a1cd118#/clusters   
connect 활성화 되어있는지 확인

2. mongoose.connect() 부분 확인   
mongodb+srv://test:`<password>`@cluster0.`string`.mongodb.net/