//서버를 생성합니다.
const app=require('express')();
const server=require('https').Sever(app);
const io=require('socket.io')(sever);

//서버를 실행시킵니다.
server.listen(52273);

app.get('/', (req, res)=> {
    res.sendFile(_dirname+'index.html');
});

io.on('connection', (socket)=> {
    socket.emit('news', {
        hello:'world'
    });
    socket.on('other event', (data)=> {
        console.log(data);
    });
});
