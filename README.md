PRD (Product Requirements Document) - AŞAMALI PLAN
1. GİRİŞ VE PROJE VİZYONU
Proje Adı: AI Tabanlı Dijital Adalet ve Karar Verme Platformu
Vizyon:
•	Kullanıcıların hukuki, toplumsal veya kurumsal düzeydeki anlaşmazlıklarını; yapay zekâ destekli, güvenli, şeffaf ve modüler bir dijital platformda çözmelerini sağlamak.
•	Anayasa, toplumsal kurallar, kültürel normlar, dini öğeler gibi çeşitli veri kaynaklarına dayalı, etik ve adil kararlar sunmak.
Genel Strateji:
•	Modüler Yapı: Uygulama mimarisi; kullanıcı girişi, olay açıklama, toplumsal şikâyet, karar verme ve AI mikroservisleri gibi farklı modüllerden oluşacak. İleride yeni özellikler eklenebilir.
•	Aşamalı Gelişim: 1) Başlangıç (MVP), 2) Orta Vade, 3) Uzun Vade. Her aşamada büyüyen gereksinimlere karşılık verecek esneklikte tasarım yapılacak.
 
2. AŞAMALAR VE KAPSAMLARI
2.1 BAŞLANGIÇ AŞAMASI (MVP)
2.1.1 Amaç ve Hedefler
•	Hızlı Çıkış: Platformu düşük maliyetle ve kısa sürede kullanıma açmak.
•	Ana Fonksiyonların Doğrulanması: Temel kimlik doğrulama, olay açıklama, AI destekli karar önerisi ve basit itiraz mekanizması.
•	Minimum Gerekli Yapay Zekâ Entegrasyonu: GPT API (OpenAI veya muadili) gibi hazır bir servisle metin analizi ve karar desteğini hızlıca prototiplemek.
2.1.2 Fonksiyonel Gereksinimler (MVP)
1.	Kullanıcı Kayıt & Kimlik Doğrulama
o	E-posta veya telefon numarasıyla kayıt.
o	Doğrulama kodu (SMS veya e-posta).
o	(Gelecekte 2FA planlanacak, ilk aşamada zorunlu değil.)
2.	Olay Açıklama Formu
o	Kullanıcı, metin tabanlı bir form ile yaşadığı olayı anlatır.
o	Basit sorular: “Ne oldu? Kim? Nerede? Ne zaman?” gibi.
o	Eksik veya tutarsız veri varsa, AI’dan gelen geri bildirimle kullanıcıyı yönlendirme.
3.	AI Destekli Karar / Öneri
o	GPT API (veya benzeri) ile entegrasyon:
	Olayın metnini gönderir, özet veya öneri alır.
	Basit çelişki tespiti (varsa ek bilgi iste).
o	Karar sürecinin dayandığı mantığı (özet formda) kullanıcıya göstermek.
4.	İtiraz Mekanizması (Temel)
o	Kullanıcı, AI’nın ilk kararına/önerisine itiraz ederse, aynı API veya modelde farklı parametrelerle yeniden sorgu yapılır.
o	3-4 farklı “rota” üretip en makul olanı kullanıcıya sunma.
5.	Veri Güvenliği ve Gizlilik (Temel Seviye)
o	Verilerin MongoDB’de şifreli saklanması (ör. veritabanı bağlantısı TLS üzerinden).
o	Kullanıcı izni olmadan verileri üçüncü taraflarla paylaşmama.
o	GDPR uyumlu temel veri koruma politikası.
2.1.3 Teknik Gereksinimler (MVP)
1.	Frontend:
o	Next.js + TypeScript
o	Basit kullanıcı arayüzü: Kayıt/Giriş ekranları, olay açıklama formu, karar görüntüleme ve itiraz butonu.
o	Server-Side Rendering (SSR) veya Static Site Generation (SSG) ile SEO avantajı.
2.	Backend:
o	Node.js + TypeScript
o	Çerçeve olarak NestJS (önerilen) veya Express + TypeScript.
o	Kullanıcı oturum yönetimi (JWT veya benzeri).
o	AI API entegrasyon endpoint’i.
3.	Veritabanı:
o	MongoDB
o	Kullanıcı kayıtları, olay açıklamaları, karar geçmişi.
o	Şema (Schema) esnekliği ve doküman tabanlı yapı.
4.	Yapay Zekâ:
o	GPT API (OpenAI/Azure OpenAI) ile basit prompt tasarımı.
o	Model: Davranış / rol belirlemesiyle hukuki veya toplumsal yorum yapan bir “asistan” modu.
o	Entegrasyon: AI isteklerini backend’de basit bir servis ile yönlendirip yanıtları kaydetme.
5.	Güvenlik / Altyapı:
o	HTTPS zorunluluğu (SSL sertifikaları).
o	Docker tabanlı basit bir deployment (örn. AWS ECS veya DigitalOcean droplet).
o	Temel loglama (kullanıcı eylemleri, hatalar).
2.1.4 Başarı Kriterleri (MVP)
•	Kullanıcı Kayıtları: İlk 3 ay içinde hedeflenen kayıt sayısına ulaşmak.
•	İlk Karar Çıkarma Süresi: Kullanıcı olay girdikten sonra <30 sn’de karar veya öneri sunulması.
•	Maliyet Kontrolü: GPT API kullanımından kaynaklanan aylık masrafın öngörülebilir ve sürdürülebilir olması.
