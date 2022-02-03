const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('요청을 수신하였습니다.');

  const target = process.env.TARGET || 'World';
  res.send(`본 Node JS 어플리케이션은 GKE 클러스터에 배포되었습니다.`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('리스닝 대상 포트: ', port);
});