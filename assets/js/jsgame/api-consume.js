// Buat variabel permintaan dan tetapkan objek XMLHttpRequest baru ke dalamnya
var request = new XMLHttpRequest()

// membua koneksi baru, menggunakana GET request di URL endpoint
request.open('GET', 'http://localhost:8080/api/assets/', true)

request.onload = function () {
  // mulai akses data JSON disini
  var data = JSON.parse(this.response)

  // player 1
  const player = document.getElementById('playerBtn')
  // com player
  const comArea = document.getElementById('comBtn')
    
    if (request.status >= 200 && request.status < 400) {
      data.forEach((asset) => {
        const baru = document.createElement('br')
        const enter = document.createElement('br')
        /**
         * Player
         */
        
        // buat button 
        const btn = document.createElement('button')
        btn.type = 'button' 
        btn.setAttribute('class', 'btn')
        // gambar
        const img = document.createElement('img')
        img.src = asset.images
        img.setAttribute('class', 'img-game')
        img.setAttribute('value', asset.name)
        
        /**
         * Computer
         */
        // gambar
        const gbr = document.createElement('img')
        gbr.src = asset.images
        gbr.setAttribute('id', 'img-game-com')
        gbr.setAttribute('class', 'img-game pt-3')
        gbr.setAttribute('value', asset.name)

        player.appendChild(btn)
        btn.appendChild(img)
        player.appendChild(baru)

        comArea.appendChild(gbr)
        comArea.appendChild(enter)
        // console.log(gbr,'-----', comArea)
      
    });
  } else {
    const errorMsg = document.createElement('marquee')
    errorMsg.textContent = 'Wah ada yang error nih'
    app.appendChild(errorMsg)
    console.log('error')
  }
}

// kirim permintaan
request.send()