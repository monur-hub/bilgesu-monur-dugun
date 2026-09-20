# Bilgesu & Muhammed Onur — Düğün Davetiyesi

Tokat, Ankara ve Konya'daki törenler için hazırlanmış, tek sayfalık, animasyonlu düğün davetiyesi sitesi. React + Vite ile yazılmıştır.

## Geliştirme

```bash
npm install
npm run dev
```

`npm run build` ile `dist/` klasörüne production derlemesi alınır; site Netlify üzerinde yayınlanacak şekilde yapılandırılmıştır (`netlify.toml`).

## İçeriği düzenlemek

- **Tarihler, mekanlar, müzik, RSVP form ayarları:** [`src/data/config.js`](src/data/config.js) ve [`src/data/events.js`](src/data/events.js)
- **Görseller:** [`src/assets/`](src/assets)
- **Bölümler:** [`src/components/`](src/components) altında her bölüm (Hero, OurStory, EventDetails, RSVPForm, Footer, vb.) ayrı bir dosyadır.

## Katılım Formu

Site, katılımcı yanıtlarını gizli bir Google Form'a (`GOOGLE_FORM_ACTION_URL` ve `GOOGLE_FORM_ENTRIES`, bkz. `src/data/config.js`) `fetch` ile gönderir. Form alanları veya soruları değişirse bu ID'lerin de Google Form'un HTML kaynağındaki `FB_PUBLIC_LOAD_DATA_` değişkeninden yeniden alınması gerekir.
