# Ruang Cerita 📝

![Ruang Cerita](./public/ruang_cerita.png)

Ruang Cerita adalah sebuah platform web untuk menulis, membagikan, dan berinteraksi dengan cerita (blog) favorit Anda. Aplikasi ini dibangun dengan teknologi modern untuk memberikan pengalaman terbaik kepada pengguna.

## 🚀 Link Demo
Anda dapat mengakses versi live dari aplikasi ini melalui tautan berikut:
**[https://ruang-cerita-natagw.vercel.app](https://ruang-cerita-natagw.vercel.app)**

---

## ✨ Fitur Utama

1. **Sistem Autentikasi yang Fleksibel (NextAuth v5)**
   - Tersedia login menggunakan **Kredensial** (Email & Password).
   - Mendukung OAuth login menggunakan **GitHub**.
   - Mendukung OAuth login menggunakan **Google**.

2. **Manajemen Pengguna (Role-based)**
   - Terdapat sistem *role* seperti `admin` dan `writer` untuk mengatur otorisasi halaman.

3. **Sistem Blog / Artikel**
   - Fitur membuat, membaca, memperbarui, dan menghapus (CRUD) blog/cerita.
   - Penulisan konten yang kaya didukung oleh integrasi **CKEditor 5**.

4. **Interaksi Pengguna**
   - **Sistem Like (Like/Dislike):** Pengguna dapat menyukai cerita yang mereka baca.
   - **Sistem Komentar:** Pengguna dapat berdiskusi dan memberikan komentar pada setiap cerita.

---

## 🛠️ Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Database:** MySQL
- **ORM:** [Prisma Client](https://www.prisma.io/)
- **Authentication:** [Auth.js / NextAuth v5](https://authjs.dev/)
- **Editor:** CKEditor 5

---

## 💻 Cara Menjalankan secara Lokal

1. **Clone repository ini**
   ```bash
   git clone <repo-url>
   cd ruang-cerita-natagw
   ```

2. **Install Dependensi**
   ```bash
   npm install
   ```

3. **Atur Environment Variables**
   Buat file `.env` di *root* direktori dan isikan konfigurasi berikut (sesuaikan dengan database Anda):
   ```env
   DATABASE_URL="mysql://root:root123@localhost:3308/db_ruang_cerita"
   AUTH_SECRET="secret_acak_anda"
   
   AUTH_GOOGLE_ID="google_id_anda"
   AUTH_GOOGLE_SECRET="google_secret_anda"
   
   AUTH_GITHUB_ID="github_id_anda"
   AUTH_GITHUB_SECRET="github_secret_anda"
   ```

4. **Migrasi / Sinkronisasi Database**
   ```bash
   npx prisma db push
   ```

5. **Jalankan Server Development**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.
