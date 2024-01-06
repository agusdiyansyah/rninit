## Start the Metro Server

Jalankan metro dengan perintah berikut

```bash
# untuk menjalankan environtment development
npm run start:development

# untuk menjalankan environtment staging
npm run start:staging
```

Setelah itu pilih perangkat yang digunakan

```bash
i - run on iOS
a - run on Android
d - open Dev Menu
j - open debugger (experimental, Hermes only)
r - reload app
```

Jalankan juga json server untuk test load `api` data

```bash
# json server
npx json-server -H 192.168.x.x --port 3000 --watch api-data.json
```

Kemudian sesuaikan server host dan port pada `.env.development`
