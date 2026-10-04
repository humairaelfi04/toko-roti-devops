# 1. Pilih Mesin Dapur (Sistem Operasi) yang ada cetakan Node.js-nya
FROM node:18-alpine

# 2. Bikin folder khusus "app" di dalam kotak bajanya
WORKDIR /app

# 3. Masukkan 'Daftar Belanja' (package.json) dulu ke dalam peti
COPY package*.json ./

# 4. Suruh robot di dalam peti beli bahan-bahannya
RUN npm install

# 5. Kalau bahan udah siap, masukkan sisanya (resep server.js, dll)
COPY . .

# 6. Bolongi peti bajanya di jendela nomor 3000 biar orang luar bisa melihat
EXPOSE 3000

# 7. Mantra terakhir biar kompornya otomatis nyala waktu peti dibuka
CMD ["node", "server.js"]
