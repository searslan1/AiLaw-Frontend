# AiLaw: Yapay Zeka Destekli Hukuki Karar Destek Sistemi

## Proje Özeti
AiLaw, yapay zeka teknolojilerini kullanarak hukuki süreçleri otomatize eden, şeffaf ve etik bir karar destek sistemidir. Sistem, hukuki vakaların analizi, karar verme süreci ve temyiz işlemlerini modern bir mobil uygulama üzerinden yönetir.

## Sistem Mimarisi

### 1. Mobil Uygulama (Frontend)
- **Teknoloji Yığını:**
  - React Native 0.71.8
  - React Navigation 6
  - React Native Paper
  - TypeScript 4.8.4
- **Özellikler:**
  - Cross-platform (iOS & Android)
  - Native kamera ve dosya entegrasyonu
  - Offline veri desteği
  - Push bildirimler
- **Tema:** Modern, profesyonel ve güven verici

### 2. Sunucu Tarafı (Backend)
- **Ana API:**
  - Node.js/Express.js
  - TypeScript
  - Express Validator
  - JWT Authentication
- **Veritabanı:** MongoDB 5.0
- **Cache:** Redis 6
- **Dosya Depolama:** AWS S3
- **Güvenlik:**
  - CORS
  - Rate Limiting
  - Input Validation

### 3. AI Servisleri
- **Framework:** Python/FastAPI
- **AI Kütüphaneleri:**
  - TensorFlow 2.12.0
  - PyTorch 2.0.1
  - Transformers 4.29.2
  - OpenCV
- **Özellikler:**
  - Doğal Dil İşleme (NLP)
  - Görüntü İşleme (Mimik/Jest Analizi)
  - Karar Destek Algoritmaları
  - Etik Analiz Modülleri

## Modüler Yapı ve Kullanıcı Akışı

### 1. Kimlik Doğrulama Modülü
- **Ekranlar:**
  - Kayıt/Giriş
  - SMS/Email Doğrulama
  - Profil Oluşturma
- **Veri Akışı:**
  - Kullanıcı bilgileri
  - Doğrulama kodları
  - Rol tabanlı yetkilendirme

### 2. Vaka Giriş Modülü
- **Ekranlar:**
  - Olay Açıklama Formu
  - Doküman Yükleme
  - Taraf Bilgileri
- **Veri Akışı:**
  - Metin tabanlı açıklamalar
  - Dijital kanıtlar
  - Taraf bilgileri ve ilişkiler

### 3. AI Analiz Modülü
- **Ekranlar:**
  - Analiz İlerleme Göstergesi
  - Sonuç Özeti
  - Detaylı Rapor
- **Veri Akışı:**
  - AI analiz sonuçları
  - Hukuki referanslar
  - Benzer vakalar

### 4. Temyiz Süreci Modülü
- **Ekranlar:**
  - Temyiz Başvuru Formu
  - İlerleme Takibi
  - Karar Bildirim
- **Veri Akışı:**
  - Temyiz gerekçeleri
  - Ek kanıtlar
  - Süreç durumu

### 5. Etik ve Güvenlik Modülü
- **Ekranlar:**
  - Veri Gizlilik Ayarları
  - İzin Yönetimi
  - Etik Politika Onayları
- **Veri Akışı:**
  - Kullanıcı izinleri
  - Gizlilik tercihleri
  - Etik uygunluk kontrolleri

## Güvenlik ve Veri Koruma

### Veri Güvenliği
- End-to-end şifreleme
- GDPR uyumluluğu
- Düzenli güvenlik denetimleri

### Kullanıcı Gizliliği
- Anonim vaka işleme
- Veri minimizasyonu
- Şeffaf veri kullanım politikaları

## Geliştirme Yol Haritası

### Faz 1: Temel Altyapı (2-3 Ay)
- Veritabanı şeması
- API tasarımı
- Temel UI bileşenleri

### Faz 2: AI Entegrasyonu (3-4 Ay)
- NLP modelleri
- Karar destek algoritmaları
- Görüntü işleme sistemleri

### Faz 3: İleri Özellikler (2-3 Ay)
- Temyiz süreci
- Etik analiz
- Şeffaflık raporları

### Faz 4: Test ve Optimizasyon (2-3 Ay)
- Kullanıcı testleri
- Performans optimizasyonu
- Güvenlik denetimi

## Kalite Güvence

### Test Stratejisi
- Birim testleri
- Entegrasyon testleri
- Kullanıcı kabul testleri

### Performans Metrikleri
- Yanıt süreleri
- Doğruluk oranları
- Kullanıcı memnuniyeti

## Katkıda Bulunma
Projeye katkıda bulunmak için lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını inceleyin.

## Lisans
Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## Geliştirme Ortamı

### Gereksinimler
- Node.js 18 veya üzeri
- Python 3.9 veya üzeri
- Docker ve Docker Compose
- Android Studio (Android geliştirme için)
- Xcode (iOS geliştirme için, sadece macOS)
- MongoDB 5.0 veya üzeri
- Redis 6.0 veya üzeri

### Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/your-username/ailaw.git
cd ailaw
```

2. Docker ile çalıştırma:
```bash
docker-compose up
```

3. Mobil uygulamayı geliştirme modunda çalıştırma:
```bash
cd src/frontend
npm install
# Android için
npm run android
# iOS için
npm run ios
```

4. Backend'i geliştirme modunda çalıştırma:
```bash
cd src/backend
npm install
npm run dev
```

5. AI servislerini geliştirme modunda çalıştırma:
```bash
cd src/ai
pip install -r requirements.txt
uvicorn main:app --reload
```

### Portlar
- Frontend (React Native): 8081 (Metro bundler), 19000 (Dev server), 19001 (Debug)
- Backend API: 4000
- AI Servisleri: 8000
- MongoDB: 27017
- Redis: 6379

### Ortam Değişkenleri
Her servis için gerekli ortam değişkenleri `.env` dosyalarında tanımlanmalıdır:

#### Backend `.env`:
```
MONGODB_URI=mongodb://localhost:27017/ailaw
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

#### AI Servisleri `.env`:
```
MONGODB_URI=mongodb://localhost:27017/ailaw
REDIS_URL=redis://localhost:6379
MODEL_PATH=/path/to/ai/models
``` 