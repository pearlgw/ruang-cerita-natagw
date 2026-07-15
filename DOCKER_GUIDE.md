# 🐳 Panduan Docker - Ruang Cerita (v1)

Dokumen ini berisi instruksi terpusat untuk build, tag `v1`, serta menjalankan container dengan mengarahkan file environment (`--env-file`) ke path file `.env` Anda.

---

## 🛠️ Langkah-Langkah Utama

### 1. Build & Tag Image
Jalankan perintah ini di direktori root proyek untuk membuild image dengan tag `v1`:
```bash
docker build -t gayuh/ruang-cerita-natagw:v1 .
```

### 2. Jalankan Container (Lokal / Server)
Gunakan parameter `--env-file` untuk mengarahkan ke file `.env` kustom Anda. 

#### Pilihan A: Menggunakan Network Host (Sangat Direkomendasikan untuk Linux)
Pilihan ini membuat container menggunakan jaringan host langsung, sehingga Anda dapat menggunakan **`localhost`** untuk koneksi database MySQL (sesuai isi `.env` default Anda).

```bash
docker run -d \
  --name ruang-cerita-app \
  --network host \
  --env-file /path/to/your/.env \
  --restart unless-stopped \
  gayuh/ruang-cerita-natagw:v1
```

#### Pilihan B: Menggunakan Port Forwarding Biasa
Jika database MySQL Anda diakses via IP eksternal/domain (bukan localhost mesin saat ini):

```bash
docker run -d \
  --name ruang-cerita-app \
  -p 3000:3000 \
  --env-file /path/to/your/.env \
  --restart unless-stopped \
  gayuh/ruang-cerita-natagw:v1
```

> [!TIP]
> **Jika MySQL Anda berjalan sebagai Container Docker Terpisah:**
> Jika container MySQL Anda berjalan di host yang sama dan di-publish ke port host (misalnya di port `3308`), Anda perlu menambahkan flag `--add-host` agar container aplikasi dapat meresolusi hostname database Anda (misalnya `mysql-container`):
> ```bash
> docker run -d \
>   --name ruang-cerita-app \
>   -p 3000:3000 \
>   --add-host=mysql-container:host-gateway \
>   --env-file /path/to/your/.env \
>   --restart unless-stopped \
>   gayuh/ruang-cerita-natagw:v1
> ```


### 3. Push ke Docker Hub
Kirim image ke akun Docker Hub Anda:
```bash
docker push gayuh/ruang-cerita-natagw:v1
```

---

## ⚙️ Variabel yang Perlu Dipersiapkan di Berkas `.env`

Pastikan Anda telah mengisi variabel berikut pada berkas `.env` sebelum menjalankan container:

| Nama Variabel | Deskripsi | Nilai Default / Contoh |
| :--- | :--- | :--- |
| `DATABASE_URL` | URL Koneksi ke Database MySQL | `mysql://root:root123@localhost:3308/db_ruang_cerita` |
| `AUTH_SECRET` | Kunci keamanan acak untuk session NextAuth | `8a7b6c5d4e3f2g1h8a7b6c5d4e3f2g1h` |
| `AUTH_TRUST_HOST` | Diperlukan `true` jika dijalankan di Docker/Proxy agar host dipercaya oleh NextAuth | `true` |
| `AUTH_GOOGLE_ID` | Client ID untuk OAuth Google (Opsional) | *Isi jika menggunakan Google Login* |
| `AUTH_GOOGLE_SECRET` | Client Secret untuk OAuth Google (Opsional) | *Isi jika menggunakan Google Login* |
| `AUTH_GITHUB_ID` | Client ID untuk OAuth GitHub (Opsional) | *Isi jika menggunakan GitHub Login* |
| `AUTH_GITHUB_SECRET` | Client Secret untuk OAuth GitHub (Opsional) | *Isi jika menggunakan GitHub Login* |

---

## 📄 Deskripsi untuk Docker Hub (Copy-Paste)

Gunakan teks markdown berikut untuk deskripsi repositori di halaman Docker Hub Anda:

```markdown
# Ruang Cerita (Next.js 14 Web App)

Docker Image untuk platform web **Ruang Cerita**, yang dibangun menggunakan Next.js 14 (App Router & Standalone), Prisma ORM, dan database MySQL.

## Cara Menjalankan Container

### 1. Persiapkan File `.env`
Buat berkas `.env` yang berisi kredensial sebagai berikut:

```env
DATABASE_URL="mysql://username:password@localhost:3306/db_ruang_cerita"
AUTH_SECRET="kunci_acak_rahasia_anda"
AUTH_TRUST_HOST="true"
```

### 2. Jalankan Container
Arahkan `--env-file` ke path absolut file `.env` Anda:

```bash
docker run -d \
  --name ruang-cerita-app \
  --network host \
  --env-file /path/to/your/.env \
  --restart unless-stopped \
  gayuh/ruang-cerita-natagw:v1
```
*(Gunakan `--network host` agar container dapat mengakses database MySQL di `localhost` server).*

```
docker run -d --name ruang-cerita-app --add-host=<nama_container_db>:host-gateway -p 3000:3000   --env-file <path_ke_env>/.env   --restart unless-stopped   gayuh/ruang-cerita-natagw:v1