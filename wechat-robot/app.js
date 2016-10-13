import express from 'express';
import webot from 'weixin-robot';
import config from './config';

const app = express();
const { token, port } = config;

// 指定回复消息
webot.set('hi', '你好');

webot.set('subscribe', {
  pattern: function(info) {
    return info.is('event') && info.param.event === 'subscribe';
  },
  handler: function(info) {
    return '欢迎订阅微信机器人';
  }
});

webot.set('test', {
  pattern: /^test/i,
  handler: function(info, next) {
    next(null, 'roger that!')
  }
});

webot.watch(app, { token, path: '/wechat' });

app.listen(port, () => {
  console.log('Server started at port %d', port);
});