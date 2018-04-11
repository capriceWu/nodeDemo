var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var mail = require("../mail.js");
/*//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//发送邮件接口
router.get('/sendMail', function(req, res, next) {
    mail.sendMail('lin1945684543@163.com','这是nodejs测试邮件', 'hello!!!');
    res.json({status: '发送成功'});
});

module.exports = router;
