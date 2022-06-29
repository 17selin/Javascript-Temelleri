/*function soyle(text){
    console.log(text);
}
soyle("merhaba");

 */
/* bir fonksiyon call bback alıyorsa return edilmez direkt çağrılır.
bir fonsyion bittikten sonra diğerinin çalışmasını istediğimiz fonksiyonlar için kullanılır.
*/

function bir(callback){
    setTimeout(()=>{
        console.log("birinci fonksiyon");
        callback();
    },3000);
}

function  iki(callback) {
    setTimeout(() => {
        console.log("ikinci fonksiyon");
    }, 2000);
}
bir(iki);






