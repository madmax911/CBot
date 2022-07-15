const http = require('http');
const dgram = require('dgram');

const udp_cli = dgram.createSocket('udp4');

udp_cli.connect(19487, '10.220.36.200');

http.createServer((req,resp) =>
{
  let str = Buffer.from(req.url.slice(1));
  console.log(str);

  udp_cli.send(str);

  resp.writeHead(200, {'Access-Control-Allow-Origin': '*'});
  resp.end();

}).listen(8004, 'localhost');

// udp_cli.send(Buffer.from('Hello there'));

// cli.on('data', (data) =>
// {
//     console.log(data.toString());
// });

// cli.write('Max:AddUser');
// cli.write('Max:SendMsg:Hello room.');
// cli.write('Max:SendMsg:How\'s everyone doing Friday?');
// cli.write('Max:Enjoy the fireworks!');

// cli.end();


//     host: '10.220.36.200',
//     port: 19487