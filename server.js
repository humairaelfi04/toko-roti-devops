const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Toko Roti Sederhana</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #fff3e0; }
          h1 { color: #d84315; }
          .menu { background: white; padding: 20px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body>
        <h1>🍞 Selamat Datang di Toko Roti Sederhana! 🥐</h1>
        <div class="menu">
          <h3>Menu Hari Ini:</h3>
          <ul style="text-align: left;">
            <li>1. Roti Tawar (Asli Resep Programmer)</li>
            <li>2. Croissant (Berlapis-lapis macam Docker)</li>
            <li>3. Baguette (Panjang seperti Pipeline Jenkins)</li>
            <li>4. Donat (Bolong di tengah kayak Bug!)</li>
          </ul>
        </div>
        <p><i>Website ini dibuat untuk Mini Project DevOps!</i></p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Toko Roti sudah buka di http://localhost:${port}`);
});
