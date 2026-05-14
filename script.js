const siberVeriler = {
    korunma: {
        title: "Hacker Saldırılarından Korunma Yolları",
        icon: "fa-user-shield",
        content: `
            <div class="info-block">
                <h3>Siber Bilinç Nedir?</h3>
                <p>Siber bilinç, dijital ortamlarda karşımıza çıkabilecek tehditlerin farkında olmak ve bu tehditlere karşı doğru refleksleri göstermektir. Teknolojik araçları kullanırken güvenliğimizi birinci öncelik yapmak bu bilincin temelidir.</p>
            </div>
            <div class="info-block">
                <h3>Temel Korunma Kuralları</h3>
                <p>Hackerların en çok kullandığı yöntem kullanıcı hatalarından faydalanmaktır. Güvende kalmak için şu altın kuralları uygulayın:</p>
                <ul class="tips-list">
                    <li><strong>Güçlü ve Eşsiz Şifreler:</strong> Her hesabınız için farklı, harf, rakam ve sembol içeren karmaşık şifreler kullanın.</li>
                    <li><strong>İki Adımlı Doğrulama (2FA):</strong> Şifreniz ele geçirilse bile hesabınızı korumak için SMS veya doğrulama uygulamalarını aktif edin.</li>
                    <li><strong>Güvenilmeyen Bağlantılar:</strong> E-posta veya mesaj yoluyla gelen, kaynağını bilmediğiniz linklere kesinlikle tıklamayın.</li>
                    <li><strong>Güncellemeler:</strong> İşletim sisteminizi ve kullandığınız tüm programları her zaman güncel tutun.</li>
                </ul>
            </div>
        `
    },
    malware: {
        title: "Malware (Zararlı Yazılım) Nedir?",
        icon: "fa-virus",
        content: `
            <div class="info-block">
                <h3>Malware Tanımı</h3>
                <p><strong>Malware</strong> (Malicious Software), bilgisayarınıza, sunucunuza veya ağınıza zarar vermek amacıyla özel olarak tasarlanmış tüm kötü amaçlı yazılımların genel adıdır.</p>
            </div>
            <div class="info-block">
                <h3>Nasıl Bulaşır ve Amacı Nedir?</h3>
                <p>Genellikle güvenilir olmayan internet sitelerinden indirilen dosyalar, sahte reklamlar veya crackli (korsan) oyun/yazılımlar aracılığıyla bulaşır. Amaçları veri çalmak, sisteminizi kilitlemek veya bilgisayarınızı gizlice kontrol etmektir.</p>
            </div>
        `
    },
    trojan: {
        title: "Trojan (Truva Atı) Nedir?",
        icon: "fa-horse",
        content: `
            <div class="info-block">
                <h3>Görünüşte Faydalı, İçeride Tehlikeli</h3>
                <p>Adını tarihteki Truva Atı hikayesinden alan <strong>Trojan</strong>, kendisini yararlı veya zararsız bir program (örneğin bir oyun yaması, sistem hızlandırıcı) gibi göstererek sisteminize sızan zararlı yazılımlardır.</p>
            </div>
            <div class="info-block">
                <h3>Trojan Tehlikeleri</h3>
                <ul class="tips-list">
                    <li>Arka kapı (Backdoor) açarak hackerların bilgisayarınıza tam erişim sağlamasına neden olur.</li>
                    <li>Klavyede bastığınız tuşları (Keylogger yardımıyla) kaydederek şifrelerinizi çalabilir.</li>
                    <li>Kameranızı ve mikrofonunuzu gizlice aktif edebilir.</li>
                </ul>
            </div>
        `
    },
    pup: {
        title: "PUP (Potansiyel Olarak İstenmeyen Program) Nedir?",
        icon: "fa-box-open",
        content: `
            <div class="info-block">
                <h3>PUP Nedir?</h3>
                <p><strong>PUP</strong> (Potentially Unwanted Program), tam olarak doğrudan bir virüs olmasa da, bilgisayarınıza genellikle bilginiz dışında veya başka bir programın kurulumu sırasında "yan ürün" olarak yüklenen yazılımlardır.</p>
            </div>
            <div class="info-block">
                <h3>Belirtileri Nelerdir?</h3>
                <p>Tarayıcınızın giriş sayfasını değiştiren arama motorları, bilgisayarınızı yavaşlatan gereksiz temizlik araçları ve durup dururken açılan araç çubukları (toolbar) tipik PUP örnekleridir. İndirme yaparken "Gelişmiş Kurulum" seçeneğini seçerek bu ek tikleri kaldırmalısınız.</p>
            </div>
        `
    },
    popup: {
        title: "Pop-up Virüsleri ve Reklam Tehlikeleri",
        icon: "fa-window-restore",
        content: `
            <div class="info-block">
                <h3>Pop-up Virüsü Nedir?</h3>
                <p>İnternette gezinirken ekranda aniden beliren, genellikle "Bilgisayarınızda virüs bulundu!", "Ödül kazandınız!" gibi sahte uyarılar içeren agresif pencerelerdir.</p>
            </div>
            <div class="info-block">
                <h3>Nasıl Korunulur?</h3>
                <ul class="tips-list">
                    <li>Bu pencerelerdeki hiçbir butona tıklamayın, pencereyi doğrudan kapatın.</li>
                    <li>Güvenilir bir tarayıcı reklam engelleyicisi (AdBlocker) kullanın.</li>
                    <li>Tarayıcınızın bildirim izinlerini kontrol edin; bilmediğiniz sitelerin size bildirim göndermesini engelleyin.</li>
                </ul>
            </div>
        `
    },
    os: {
        title: "Hangi İşletim Sistemi Daha Güvenli?",
        icon: "fa-laptop-code",
        content: `
            <div class="info-block">
                <h3>İşletim Sistemleri ve Güvenlik Yaklaşımları</h3>
                <p>Tek başına hiçbir işletim sistemi %100 güvenli değildir, ancak mimari yapıları gereği siber saldırılara karşı dayanıklılıkları farklılık gösterir:</p>
            </div>
            <div class="info-block">
                <h3>Karşılaştırma</h3>
                <p><strong>Windows:</strong> Dünyada en çok kullanılan işletim sistemi olduğu için hackerların bir numaralı hedefidir. Güncel tutulduğunda ve Windows Defender aktif olduğunda güvenlidir ancak kullanıcının dikkatli olması şarttır.</p>
                <p style="margin-top: 10px;"><strong>Linux:</strong> Açık kaynak kodlu yapısı ve gelişmiş yetkilendirme (root) sistemi sayesinde siber güvenlik uzmanlarının ve sunucuların vazgeçilmezidir. Virüs bulaşma ihtimali Windows'a kıyasla oldukça düşüktür.</p>
                <p style="margin-top: 10px;"><strong>macOS:</strong> Unix tabanlı mimarisi ve Apple'ın kapalı ekosistemi sayesinde oldukça güvenlidir. Ancak popülerliği arttıkça macOS hedefli hedefli malware sayısı da artmaktadır.</p>
            </div>
        `
    }
};

// İçeriği dinamik olarak değiştiren ana fonksiyon
function showContent(key) {
    const data = siberVeriler[key];
    if (!data) return;

    const contentArea = document.getElementById("dynamic-content");
    
    // HTML içeriğini güncelleme
    contentArea.innerHTML = `
        <div class="content-header">
            <i class="fa-solid ${data.icon}"></i>
            <h2>${data.title}</h2>
        </div>
        <div class="content-body">
            ${data.content}
        </div>
    `;

    // Aktif menü elemanını değiştirme ve görsel efekt verme
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
    });
    document.getElementById(`nav-${key}`).classList.add("active");

    // Sayfa geçişinde yukarı yumuşak kaydırma efekti
    window.scrollTo({ top: document.getElementById("dynamic-content").offsetTop - 120, behavior: 'smooth' });
}

// Sayfa ilk açıldığında 'korunma' içeriğini varsayılan olarak yükle
document.addEventListener("DOMContentLoaded", () => {
    showContent("korunma");
});