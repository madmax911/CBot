const dgram = require('dgram');

const udp_srv = dgram.createSocket('udp4', (msg, rinfo) =>
{
    console.log(msg.toString());

}).bind(19487);


// let clients = ["Admin"];

// let messages = [{ name: "Admin",
//                   date: new Date().toISOString(),
//                   msg: 'Hi guys.'}];


        // let d = data.toString().split(':', 3);
        
        // let usr = d[0];
        // let cmd = d[1];
        // let msg = d[2];

        // l(data.toString() + "\n\n");
        // // l(cmd);

        // if (cmd === 'AddUser')
        // {
        //     clients.push(usr);
        //     // l('Message added: ' + usr);
        // }
        // else if (cmd === 'SendMsg')
        // {
        //     messages.push({  name: usr,
        //                      date: new Date().toISOString(),
        //                      msg:  msg                        });

        //     // l('Message added: ' + usr);
        // }
        // // l('clients: ', clients);
        // // l('messages: ', messages);
