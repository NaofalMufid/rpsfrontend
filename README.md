# batu-kertas-gunting

Challenge 4 Binar Academy : Jankenpon Game with HTML,CSS and Javascript.

Challenge 5 Binar Academy :
Jankenpon game sebelumnya dirubah untuk bisa menggunakan backend service,
di sini backend service digunakan untuk menyediakan assets game berupa gambar dan lainya.

Backend dibuat dengan :
- nodejs X express.js
- data assets disimpan di file json
- gambar ditaruh di https://cloudinary.com/
- repo backend https://github.com/NaofalMufid/rpsbackend


Api yang tersedia di backend sekarang :
- get all assets -> http://localhost:2020/api/assets
- get asset detail -> http://localhost:2020/api/assets/:id
- login -> http://localhost:3000/api/login
- register -> http://localhost:3000/api/regsiter
Frontend :
- javascript dengan XMLHttpRequest
frontend jalankan di vscode dengan liveserver
