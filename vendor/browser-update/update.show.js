"use strict";
var $buo_show = function () {
    var op = window._buorgres;
    var bb = $bu_getBrowser();
    var burl = op.burl || ("http" + (/MSIE/i.test(navigator.userAgent) ? "" : "s") + "://browser-update.org/");
    if (!op.url) {
        op.url = burl + ((op.l && (op.l + "/")) || "") + "update-browser.html" + (op.test ? "?force_outdated=true" : "") + "#" + op.jsv + ":" + op.pageurl;
    }
    op.url_permanent_hide=op.url_permanent_hide || (burl + "block-ignore-browser-update-warning.html");
    /*
     if (Math.random()*1000<1 && !op.test && !op.betatest) {
     var i = new Image();
     var txt=op["text_"+ll]||op.text||"";
     var extra=encodeURIComponent("frac="+frac+"&txt="+txt+"&apiver="+op.apiver);
     i.src="https://browser-update.org/cnt?what=noti&from="+bb.n+"&fromv="+bb.v + "&ref="+ escape(op.pageurl) + "&jsv="+op.jsv+"&tv="+op.style+"&extra="+extra;
     }
     */
    function busprintf() {
        var args = arguments;
        var data = args[0];
        for (var k = 1; k < args.length; ++k) {
            data = data.replace(/%s/, args[k]);
        }
        return data;
    }


var t = {}, ta;
t.en= {'msg': 'Your web browser ({brow_name}) is out of date.', 'msgmore': 'Update your browser for more security, speed and the best experience on this site.', 'bupdate': 'Update browser', 'bignore': 'Ignore','remind': 'You will be reminded in {days} days.','bnever': 'Never show again','insecure':'Your web browser ({brow_name}) has a serious security vulnerability!'}
t.ar= {'msg': 'متصفح الإنترنت الخاص بك ({brow_name}) غير مُحدّث.','msgmore': 'قم بتحديث المتصفح الخاص بك لمزيد من الأمان والسرعة ولأفضل تجربة على هذا الموقع.','bupdate': 'تحديث المتصفح','bignore': 'تجاهل', 'remind': 'سيتم تذكيرك في غضون {days} أيام.', 'bnever': 'لا تظهر مرة أخرى'}
t.bg= {'msg': 'Вашият уеб браузър ({brow_name}) е остарял.','msgmore': 'Актуализирайте браузъра си за повече сигурност, бързина и най-доброто изживяване на този сайт.','bupdate': 'Актуализиране на браузъра','bignore': 'игнорирай', 'remind': 'Ще ви бъде напомнено след {days} дни.', 'bnever': 'Никога повече да не се показва'}
t.ca= {'msg': 'El teu navegador ({brow_name}) està desactualitzat.','msgmore': 'Actualitzeu el vostre navegador per obtenir més seguretat, velocitat i una millor experiència en aquest lloc.','bupdate': 'Actualitza el navegador','bignore': 'Ignorar', 'remind': 'T\'ho recordarem d\'aquí a {days} dies.', 'bnever': 'No ho tornis a mostrar'}
t.cs= {'msg': 'Váš prohlížeč ({brow_name}) je zastaralý.','msgmore': 'Aktualizujte prohlížeč pro lepší zabezpečení, rychlost a nejlepší zážitek z tohoto webu.','bupdate': 'Aktualizovat prohlížeč','bignore': 'Ignorovat', 'remind': 'Znovu budete upozorněni za {days} dnů.', 'bnever': 'Již nezobrazovat'}
t.cy= {'msg': 'Mae eich porwr gwe ({brow_name}) angen ei ddiweddaru.','msgmore': 'Diweddarwch eich porwr i gael mwy o ddiogelwch, cyflymder a\'r profiad gorau ar y safle hwn.','bupdate': 'Diweddaru porwr','bignore': 'Anwybyddu', 'remind': 'Byddwn yn eich atgoffa mewn {days} diwrnod.', 'bnever': 'Peidiwch â dangos eto'}
t.da= {'msg': 'Din web browser ({brow_name}) er forældet','msgmore': 'Opdater din browser for mere sikkerhed, hastighed og den bedste oplevelse på denne side.','bupdate': 'Opdater browser','bignore': 'Ignorer', 'remind': 'Du vil blive påmindet om {days} dage.', 'bnever': 'Vis aldrig igen'}
t.de= {'msg': 'Ihr Webbrowser ({brow_name}) ist veraltet.','msgmore': 'Aktualisieren Sie Ihren Browser für mehr Sicherheit, Geschwindigkeit und den besten Komfort auf dieser Seite.','bupdate': 'Browser aktualisieren','bignore': 'Ignorieren', 'remind': 'Sie werden in {days} Tagen wieder erinnert.', 'bnever': 'Nie wieder anzeigen','insecure':'Ihr Webbrowser ({brow_name}) hat eine ernsthafte Sicherheitslücke!'}
t.el= {'msg': 'Το πρόγραμμα περιήγησής σας ({brow_name}) είναι απαρχαιωμένο.','msgmore': 'Ενημερώστε το πρόγραμμα περιήγησής σας για περισσότερη ασφάλεια, ταχύτητα και την καλύτερη εμπειρία σ\' αυτόν τον ιστότοπο.','bupdate': 'Ενημερώστε το πρόγραμμα περιήγησης','bignore': 'Αγνοήστε', 'remind': 'Θα σας το υπενθυμίσουμε σε {days} ημέρες.', 'bnever': 'Να μην εμφανιστεί ξανά'}
t.es= {'msg': 'Su navegador web ({brow_name}) está desactualizado.','msgmore': 'Actualice su navegador para obtener más seguridad, velocidad y para disfrutar de la mejor experiencia en este sitio.','bupdate': 'Actualizar navegador','bignore': 'Ignorar', 'remind': 'Se le recordará en {days} días.', 'bnever': 'No mostrar de nuevo'}
t.et= {'msg': 'Teie veebilehitseja ({brow_name}) on vananenud.','msgmore': 'Veebilehitseja uuendamisega kaasneb nii parem turvalisus, kiirus kui ka kasutusmugavus.','bupdate': 'Uuenda veebilehitsejat','bignore': 'Eira', 'remind': 'Uus meeldetuletus {days} päeva pärast.', 'bnever': 'Ära kunagi enam näita'}
t.fa= {'msg': 'مرورگر شما ({brow_name}) قدیمی است.','msgmore': 'برای ایمنی، سرعت و تجربه بهتر مرورگر خود را به‌روز کنید.','bupdate': 'به‌روزرسانی مرورگر','bignore': 'نادیده گرفتن', 'remind': 'به شما تا {days} روز دیگر دوباره یاد‌آوری خواهد شد.', 'bnever': 'هرگز نمایش نده'}
t.fi= {'msg': 'Selaimesi ({brow_name}) on vanhentunut.','msgmore': 'Päivitä selaimesi saadaksesi tietoturvapäivityksiä, nopeutta sekä parhaan käyttökokemuksen sivustolla.','bupdate': 'Päivitä selain','bignore': 'Ohita', 'remind': 'Saat uuden muistutuksen {days} päivän päästä.', 'bnever': 'Älä näytä uudestaan'}
t.fr= {'msg': 'Votre navigateur Web ({brow_name}) n\'est pas à jour.','msgmore': 'Mettez à jour votre navigateur pour plus de sécurité et de rapidité et une meilleure expérience sur ce site.','bupdate': 'Mettre à jour le navigateur','bignore': 'Ignorer', 'remind': 'Vous serez rappelé dans {days} jours.', 'bnever': 'Ne plus afficher'}
t.gl= {'msg': 'Tá an líonléitheoir agat ({brow_name}) as dáta.','msgmore': 'Actualiza o teu navegador para obter máis seguridade, rapidez e mellor experiencia neste sitio.','bupdate': 'Actualizar navegador web','bignore': 'Ignorar', 'remind': 'Lembraralle en {days} días.', 'bnever': 'Non volver mostrar máis'}
t.he= {'msg': 'דפדפן ({brow_name}) שלך אינו מעודכן.','msgmore': 'עדכן/י את הדפדפן שלך לשיפור האבטחה והמהירות וכדי ליהנות מהחוויה הטובה ביותר באתר זה.','bupdate': 'עדכן דפדפן','bignore': 'התעלם', 'remind': 'תקבל/י תזכורת בעוד  {days} ימים.', 'bnever': 'אל תציג שוב'}
t.hi= {'msg': 'आपका वेब ब्राउज़र ({brow_name}) पुराना है।','msgmore': 'इस साइट पर अधिक सुरक्षा, गति और सर्वोत्तम अनुभव करने के लिए अपने ब्राउज़र को अपडेट करें ।','bupdate': 'ब्राउज़र अपडेट करें','bignore': 'नजरअंदाज करें', 'remind': 'आपको {days} दिनों में याद दिलाया जाएगा।', 'bnever': 'फिर कभी मत दिखाना'}
t.hu= {'msg': 'Az Ön webböngészője ({brow_name}) elavult.','msgmore': 'Frissítse böngészőjét a nagyobb biztonság, sebesség és élmény érdekében!','bupdate': 'Böngésző frissítése','bignore': 'Mellőzés', 'remind': 'Újra emlékeztetünk {days} napon belül.', 'bnever': 'Ne mutassa többet'}
t.id= {'msg': 'Peramban web ({brow_name}) Anda sudah usang.','msgmore': 'Perbarui peramban Anda untuk pengalaman terbaik, lebih aman, dan cepat di situs ini.','bupdate': 'Perbarui peramban','bignore': 'Abaikan', 'remind': 'Anda akan diingatkan kembali dalam {days} hari.', 'bnever': 'Jangan pernah tampilkan lagi'}
t.it= {'msg': 'Il tuo browser ({brow_name}) non è aggiornato.','msgmore': 'Aggiorna il browser per una maggiore sicurezza, velocità e la migliore esperienza su questo sito.','bupdate': 'Aggiorna browser','bignore': 'Ignora', 'remind': 'Riceverai un promemoria tra {days} giorni.', 'bnever': 'Non mostrare di nuovo'}
t.ja= {'msg': 'お使いのブラウザ（{brow_name}）は最新版ではありません。','msgmore': 'セキュリティ、スピード、そしてこのサイトでの最良の体験のためにお使いのブラウザを更新してください。','bupdate': 'ブラウザを更新する','bignore': '無視する', 'remind': '{days} 日後にもう一度お知らせします。', 'bnever': '次回から表示しない'}
t.ko= {'msg': '귀하의 웹 브라우저({brow_name})는 오래되었습니다.','msgmore': '이 사이트에서 보안, 속도와 최상의 경험을 얻으려면 브라우저를 업데이트하십시오.','bupdate': '브라우저 업데이트하기','bignore': '무시하기', 'remind': '{days}일 후에 알려 드립니다.', 'bnever': '다시 표시하지 않기'}
t.lt= {'msg': 'Jūsų naršyklė ({brow_name}) yra pasenusi.','msgmore': 'Atsinaujinkite savo naršyklę norėdami gauti daugiau saugumo, greičio ir pačių geriausių patirčių šioje svetainėje.','bupdate': 'Atnaujinti naršyklę','bignore': 'Nepaisyti', 'remind': 'Jums bus priminta po {days} dienų.', 'bnever': 'Daugiau niekada nerodyti'}
t.lv= {'msg': 'Jūsu pārlūkprogramma ({brow_name}) ir novecojusi.','msgmore': 'Atjaunojiet savu pārlūkprogrammu lielākai drošībai, ātrumam un labākai pieredzei ar šo vietni.','bupdate': 'Atjaunināt pārlūkprogrammu','bignore': 'Ignorēt', 'remind': 'Jums tiks parādīts atgādinājums pēc {days} dienām.', 'bnever': 'Vairs nerādīt'}
t.ms= {'msg': 'Pelayar web anda ({brow_name}) sudah lapuk.','msgmore': 'Kemas kini pelayar anda untuk lebih keselamatan, kelajuan dan pengalaman terbaik di laman web ini.','bupdate': 'Kemas kini pelayar','bignore': 'Abaikan', 'remind': 'Anda akan diingatkan dalam {days} hari.', 'bnever': 'Jangan tunjukkan lagi'}
t.nl= {'msg': 'Uw webbrowser ({brow_name}) is verouderd.','msgmore': 'Update uw browser voor meer veiligheid, snelheid en om deze site optimaal te kunnen gebruiken.','bupdate': 'Browser updaten','bignore': 'Negeren', 'remind': 'We zullen u er in {days} dagen aan herinneren.', 'bnever': 'Nooit meer tonen'}
t.no=t.nn=t.nb= {'msg': 'Nettleseren din ({brow_name}) er utdatert.','msgmore': 'Oppdater nettleseren din for økt sikkerhet, hastighet og den beste opplevelsen på dette nettstedet.','bupdate': 'Oppdater nettleser','bignore': 'Ignorer', 'remind': 'Du vil få en påminnelse om {days} dager.', 'bnever': 'Aldri vis igjen'}
t.pl= {'msg': 'Twoja przeglądarka ({brow_name}) jest nieaktualna.','msgmore': 'Zaktualizuj przeglądarkę, by korzystać z tej strony bezpieczniej, szybciej i po prostu sprawniej.','bupdate': 'Aktualizuj przeglądarkę','bignore': 'Ignoruj', 'remind': 'Przypomnimy o tym za {days} dni.', 'bnever': 'Nie pokazuj więcej'}
t.pt= {'msg': 'Seu navegador da web ({brow_name}) está desatualizado.','msgmore': 'Atualize seu navegador para ter mais segurança e velocidade, além da melhor experiência neste site.','bupdate': 'Atualizar navegador','bignore': 'Ignorar', 'remind': 'Você será relembrado em {days} dias.', 'bnever': 'Não mostrar novamente'}
t.ro= {'msg': 'Browserul tău ({brow_name}) nu este actualizat.','msgmore': 'Actualizează browserul pentru o mai mare siguranță, viteză și cea mai bună experiență pe acest site.','bupdate': 'Actualizează browser','bignore': 'Ignoră', 'remind': 'Ți se va reaminti peste {days} zile.', 'bnever': 'Nu mai arăta'}
t.ru= {'msg': 'Ваш браузер ({brow_name}) устарел.','msgmore': 'Обновите ваш браузер для повышения уровня безопасности, скорости и комфорта использования этого сайта.','bupdate': 'Обновить браузер','bignore': 'Игнорировать', 'remind': 'Вы получите напоминание через {days} дней.', 'bnever': 'Больше не показывать '}
t.sk= {'msg': 'Váš internetový prehliadač ({brow_name}) je zastaraný.','msgmore': 'Pre väčšiu bezpečnosť, rýchlosť a lepšiu skúsenosť s touto stránkou si aktualizujte svoj prehliadač.','bupdate': 'Aktualizovať prehliadač','bignore': 'Ignorovať', 'remind': 'Bude vám to pripomenuté o {days} dní.', 'bnever': 'Už nikdy viac neukazovať'}
t.sl= {'msg': 'Vaš spletni brskalnik ({brow_name}) je zastarel.','msgmore': 'Posodobite svoj brskalnik za dodatno varnost, hitrost in najboljšo izkušnjo na tem spletnem mestu.','bupdate': 'Posodobi brskalnik','bignore': 'Prezri', 'remind': 'Opomnik boste prejeli čez toliko dni: {days}.', 'bnever': 'Ne prikaži več'}
t.sq= {'msg': 'Shfletuesi juaj ({brow_name}) është i vjetruar.','msgmore': 'Përditësoni shfletuesin tuaj për më tepër siguri, shpejtësi dhe për më të mirin e funksionimeve në këtë sajt.','bupdate': 'Përditëso shfletuesin','bignore': 'Shpërfille', 'remind': 'Do t’ju rikujtohet pas {days} ditësh.', 'bnever': 'Mos e shfaq kurrë më'}
t.sr= {'msg': 'Vaš pretraživač ({brow_name}) je zastareo.','msgmore': 'Ima poznate sigurnosne probleme i najverovatnije neće prikazati sve funkcionalnisti ovog i drugih sajtova.','bupdate': 'Nadogradi pretraživač','bignore': 'Ignorisi', 'remind': 'Zaboravićete za {days} dana.', 'bnever': 'Ne prikazuj opet'}
t.sv= {'msg': 'Din webbläsare ({brow_name}) är föråldrad. ','msgmore': 'Uppdatera din webbläsare för mer säkerhet, hastighet och den bästa upplevelsen på den här sajten. ','bupdate': 'Uppdatera webbläsaren','bignore': 'Ignorera', 'remind': 'Du får en påminnelse om {days} dagar.', 'bnever': 'Visa aldrig igen'}
t.th= {'msg': 'เว็บเบราว์เซอร์ของคุณ ({brow_name}) ล้าสมัยแล้ว','msgmore': 'อัปเดทเบราว์เซอร์เพื่อเพิ่มความปลอดภัย, ความเร็ว และประสบการณ์ที่ดีที่สุดบนเว็บไซต์นี้','bupdate': 'อัปเดทเบราว์เซอร์','bignore': 'ข้าม', 'remind': 'คุณจะได้รับการแจ้งเตือนใน {days} วัน', 'bnever': 'ไม่ต้องแสดงอีก'}
t.tr= {'msg': 'Web tarayıcınız ({brow_name}) güncel değil.','msgmore': 'Daha fazla güvenlik ve hız ile bu sitede en iyi deneyim için tarayıcınızı güncelleyin.','bupdate': 'Tarayıcıyı güncelle','bignore': 'Yok say', 'remind': '{days} gün sonra bir hatırlatma alacaksınız.', 'bnever': 'Bir daha gösterme'}
t.uk= {'msg': 'Ваш браузер ({brow_name}) застарілий.','msgmore': 'Оновіть свій браузер для більшої безпеки, швидкості та повноцінної роботи цього сайту.','bupdate': 'Оновити браузер','bignore': 'Пропустити', 'remind': 'Ви отримаєте нагадування через {days} днів.', 'bnever': 'Більше не показувати'}
t.uz= {'msg': 'Sizning ({brow_name}) veb-brauzeringiz eskirgan','msgmore': 'Xavfsizlik, tezkorlik va ushbu sayt imkoniyatlaridan to`liq foydalanish uchun brauzeringizni yangilang.','bupdate': 'Brauzeringizni yangilang','bignore': 'E’tibor bermaslik', 'remind': 'Sizga {days} kundan so`ng eslatammiz.', 'bnever': 'Hech qachon qayta ko\'rsatmang'}
t.vi= {'msg': 'Trình duyệt web của bạn ({brow_name}) đã lỗi thời.','msgmore': 'Cập nhật trình duyệt của bạn để có thêm bảo mật, tốc độ và trải nghiệm tốt nhất trên trang web này.','bupdate': 'Cập nhật trình duyệt','bignore': 'Bỏ qua', 'remind': 'Bạn sẽ được nhắc nhở sau {days} ngày.', 'bnever': 'Không bao giờ hiển thị lại'}
t.zh= {'msg': '您的网页浏览器（{brow_name}）已过期。','msgmore': '更新您的浏览器，以便在该网站上获得更安全、更快速和最好的体验。','bupdate': '更新浏览器','bignore': '忽略', 'remind': '会在{days}天后提醒您。', 'bnever': '不再显示'}
t["zh-tw"]= t["zh-hans-cn"] ={'msg': '您的網路瀏覽器（{brow_name}）已過舊。','msgmore': '更新您的瀏覽器以獲得更佳的安全性、速度以及在此網站的最佳體驗。','bupdate': '更新瀏覽器','bignore': '忽略', 'remind': '您將在 {days} 天後收到提醒。', 'bnever': '不要再顯示'}

var custom_text = op["text_for_"  + bb.n + "_in_" + op.ll] || op["text_for_" + bb.n] || op["text_" + op.llfull] || op["text_in_" + op.ll] || op["text_" + op.ll]  ||   op.text



t = ta = t[op.llfull] || t[op.ll] || t.en;
if (custom_text) {
    if (typeof custom_text === 'string')
        t=ta=custom_text;
    else {
        for (var i in custom_text) {
            ta[i] = custom_text[i]
        }
    }
}
if (op.browser.is_insecure && ta.insecure) {
    ta.msg=ta.insecure
}
if (ta.msg)
    t = '<b class="buorg-mainmsg">' + t.msg + '</b> <span class="buorg-moremsg">' + t.msgmore + '</span> <span class="buorg-buttons"><a{up_but}>' + t.bupdate + '</a> <a{ignore_but}>' + t.bignore + '</a></span>'

var tar = "";
if (op.newwindow)
    tar = ' target="_blank" rel="noopener"';

var div = op.div = document.createElement("div");
div.id = div.className= "buorg";

var style = '<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/static/img/small/' + bb.n + '.png);}</style>';
var style2 = '<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}'
    + '.buorg-pad { padding: 9px;  line-height: 1.7em; }'
    + '.buorg-buttons { display: block; text-align: center; }'
    + '#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}'
    + '#buorgig { background-color: #edbc68;}'
    + '@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}'
    + '@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}'
    + '.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>';
if (ta.msg && (op.ll=="ar"||op.ll=="he"||op.ll=="fa"))
    style2+='<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>';
if (!ta.msg && t.indexOf && t.indexOf("%s") !== -1) {//legacy style
    t = busprintf(t, bb.t, ' id="buorgul" href="' + op.url + '"' + tar);

    style += '<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}'
        + '.buorg div { padding:5px 36px 5px 40px; }'
        + '.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}'
        + '#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}'
        + '#buorga{display:block;}'
        + '@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>';
    div.innerHTML = '<div>' + t + '<div id="buorgclose"><a id="buorga">&times;</a></div></div>' + style;
    op.addmargin = true;
}
else {
    if (op.style === "bottom") {
        style2 += '<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>';
    }
    else if (op.style === "corner") {
        style2 += '<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>';
    }
    else {
        op.addmargin = true;
    }
    t = t.replace("{brow_name}", bb.t).replace("{up_but}", ' id="buorgul" href="' + op.url + '"' + tar).replace("{ignore_but}", ' id="buorgig" role="button" tabindex="0"');
    div.innerHTML = '<div class="buorg-pad" role="status" aria-live="polite"><span class="buorg-icon"> </span>' + t + '</div>' + style + style2;
}

op.text = t;
if (op.container) {
    op.container.appendChild(div);
    op.addmargin = false;
}
else
    document.body.insertBefore(div, document.body.firstChild);

var updatebutton=document.getElementById("buorgul");
if (updatebutton) {
    updatebutton.onclick = function (e) {
        div.onclick = null;
        op.onclick(op);
        if (op.noclose)
            return
        op.setCookie(op.reminderClosed);
        if (!op.noclose) {
            div.style.display = "none";
            if (op.addmargin && op.shift_page_down !== false)
                hm.style.marginTop = op.bodymt;
        }
    };
}
if (!custom_text) {//make whole bar clickable except if custom text is set
    div.style.cursor="pointer";
    div.onclick = function () {
        if (op.newwindow)
            window.open(op.url, "_blank");
        else
            window.location.href = op.url;
        op.setCookie(op.reminderClosed);
        op.onclick(op);
    };
}

if (op.addmargin && op.shift_page_down !== false) {
    var hm = document.getElementsByTagName("html")[0] || document.body;
    op.bodymt = hm.style.marginTop;
    hm.style.marginTop = (div.clientHeight) + "px";
}
var ignorebutton = document.getElementById("buorga") || document.getElementById("buorgig");
if (ignorebutton) {
    ignorebutton.onclick = function (e) {
        div.onclick = null;
        op.onclose(op);
        if (op.addmargin && op.shift_page_down !== false)
            hm.style.marginTop = op.bodymt;
        op.setCookie(op.reminderClosed);
        if (!op.no_permanent_hide && ta.bnever && ta.remind) {
            op.div.innerHTML = '<div class="buorg-pad"><span class="buorg-moremsg">' + (op.reminderClosed > 24 ? ta.remind.replace("{days}", Math.round(op.reminderClosed/24)):"") + '</span> <span class="buorg-buttons"><a id="buorgpermanent" role="button" tabindex="0" href="' + op.url_permanent_hide +'"' + tar + '>' + ta.bnever + '</a></span></div>' + style + style2;
            div.className = "buorg buorg-fadeout";
            document.getElementById("buorgpermanent").onclick = function (e) {
                op.setCookie(24 * 365);
                op.div.style.display = "none";
            }
            op.div.style.opacity = 0;
            op.div.style.visibility = "hidden";
            return false;
        }
        op.div.style.display = "none";
        return false;
    }
    if (op.noclose || op.reminderClosed==0) {
        ignorebutton.parentNode.removeChild(ignorebutton)
    }
}


op.onshow(op);

if (op.test && !op.dont_show_debuginfo) {
    var e = document.createElement("script");
    e.src = op.domain + "/update.test.js";
    document.body.appendChild(e);
}

};

$buo_show();
