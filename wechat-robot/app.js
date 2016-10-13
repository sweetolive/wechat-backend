import express from 'express';
import webot from 'weixin-robot';
import rules from './rules';
import config from './config';

const app = express();
const { token, port } = config;

// 载入回复规则
rules(webot);

webot.watch(app, { token, path: '/wechat' });

app.listen(port, () => {
  console.log('Server started at port %d', port);
});