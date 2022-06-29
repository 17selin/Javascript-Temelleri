/*promise iki tane parametre alır; resolve ve reject .
işler yolunda gittiğinde resolve, bir sıkıntı olduğunda ise reject kullanılır.

 */

c
const asenkronFonksiyon = (sayi) => {
    return new Promise((resolve, reject) => {
        if (sayi === 4)
            resolve("her şey yolunda!");
        else
            reject('bir sorun var!');
    })
};
asenkronFonksiyon(5)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
        return 2;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

