import {init} from '@lib/sql';

export async function get(req, res){
    const {connection} = await init();
    connection.query('SELECT * FROM general', function(err, rows){
      if (err) console.log(err);
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });   
      res.end(JSON.stringify(rows));
    });
}