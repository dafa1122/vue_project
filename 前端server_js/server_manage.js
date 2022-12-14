const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');

const app = express();
// 启动gzip
app.use(compression());

// 在express中使用的时候需要注意一点的是，该中间件必须要放在express.static中间前的前面引入，否则会出现问题。
app.use(history());
app.use(bodyParser.json({
    limit: '10MB'
}));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cookieParser());

// app.use(express.static('dist'));

//app.use(express.static('ruoyi-manage'));
 app.use(express.static('dist'));
app.listen(3000)
