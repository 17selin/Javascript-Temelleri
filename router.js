/* bir yere veri göndereceksek post gönderilir. herhangi bir data göndermeyeceksek get kullanılır.
Yani google'a kayıt olurken butona bastığımız halde bir post işlemi gerçekleşir.
put güncelleme işleminde kullanılır.
delete silme işleminde.

* */


const http=require('http');

const server=http.createServer((request , response) => {
   response.writeHead(200, {'contect-type': 'text/html  charset=utf-8' } );

   if(request.method === 'GET'){
       if (request.url === '/')
           response.write("ana sayfa");
       else if (request.url === '/iletisim')
           response.write("iletisim sayfasi");
       else
       response.write("Hatali giris yaptiniz!!");
   }
   response.end();

});
server.listen(3000);