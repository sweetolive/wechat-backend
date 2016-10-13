import dialog from './dialog';

const rules = (webot) => {
  // 简单的纯文本对话，可以用单独的 yaml 文件来定义
  webot.dialog(dialog);

  const reg_help = /^(help|\?)$/i
  webot.set({
    // name 和 description 都不是必须的
    name: 'hello help',
    description: '获取使用帮助，发送 help',
    pattern: (info) => {
      //首次关注时,会收到subscribe event
      return info.is('event') && info.param.event === 'subscribe' || reg_help.test(info.text);
    },
    handler: (info) => {
      const reply = {
        title: '感谢你收听webot机器人',
        pic: 'https://raw.github.com/node-webot/webot-example/master/qrcode.jpg',
        url: 'https://github.com/node-webot/webot-example',
        description: [
          '你可以试试以下指令:',
            'game : 玩玩猜数字的游戏吧',
            's+空格+关键词 : 我会帮你百度搜索喔',
            's+空格+nde : 可以试试我的纠错能力',
            '使用「位置」发送你的经纬度',
            '重看本指令请回复help或问号',
            '更多指令请回复more',
            'PS: 点击下面的「查看全文」将跳转到我的github页'
        ].join('\n')
      };
      // 返回值如果是list，则回复图文消息列表
      return reply;
    }
  });
};

export default rules;
