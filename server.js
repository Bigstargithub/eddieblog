const app = require('./app');
const port = 3040;

app.listen(port, function(){
    console.log(port+ '번으로 연결중');
})