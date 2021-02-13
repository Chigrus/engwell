import * as path from 'path';
import * as fs from 'fs';
import {init} from '@lib/sql';

const AVAILABLE_FIELDS = [
    'title',
    'subtitle',
    'text',
    'image',
    'icon',
    'category',
    'customfield'
];

export async function post(req, res) {
    const {id, field, text} = req.body.data;
    if(!AVAILABLE_FIELDS.includes(field)) {
        res.writeHead(400);
        res.end();
        return;
    }
    const {connection} = await init();
    connection.query(`UPDATE posts SET ${field} = ? WHERE id = ?`, [text, id], (err, result) => {
        if(err) {
            console.log(err);
            res.writeHead(500);
            res.end();
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });   
        res.end(JSON.stringify(result));
    });
}

const DATE_RE = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
export function put(req, res) {
    const {id} = req.query;
    const date = new Date().toISOString().match(DATE_RE).slice(1).join('-');
    const file = path.join(process.cwd(), 'static/uploads', `${date}.jpg`);
    const url = `/uploads/${date}.jpg`;
    req.pipe(fs.createWriteStream(file)).once('finish', async () => {
      const {connection} = await init();
      connection.query('UPDATE posts SET image = ? WHERE id = ?', [url, id], err => {
          if(err) {
            console.log(err);
            res.writeHead(500);
            res.end();
            return;
          }
          res.writeHead(200, {
              'Content-Type': 'application/json'
          });   
          res.end(JSON.stringify({url}));
      });
    });
}