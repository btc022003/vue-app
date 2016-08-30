/**
 *
 * https://github.com/sindresorhus/ora
 * 使用ora 在命令行中实现一个加载效果
 *
 */
const ora = require('ora');

const spinner = ora('加载中...').start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = '加载完成';
}, 1000);

setTimeout(()=>{
  spinner.succeed();
},2000)
