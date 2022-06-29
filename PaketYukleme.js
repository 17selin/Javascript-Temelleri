/*npm altında yüklediğimiz tüm modüller node_modeules altında işlenir.
Paketi kullanabilmemiz için önce paketi dosyamıza entegre etmmemiz gerekiyor.Daha sonra o paketin
açıklamasında nasıl yazmamız gerekiyorsa öyle yazıp uygularız.
paket=modül
node modülün altında kurulan her paket yerel paket olur.
global paket eklemek için terminal de : npm install -g slugify(bu kurduğumuz modül)
npm de global hangi paketleri kurduğumu görmek için: npm list -g
modüllerin nereye kurulduğunu görmek için : npm root -g
 */

const slugify = require('slugify');
const text="Fenerbahçe üçüncü maçına çıkıyor.";
const slug=slugify(text ,"*");
console.log(slug);