const campoLista = document.getElementById('lista-videos')

function carregarVideos(){
    const videoItem = document.createElement('div')
    videoItem.className= 'video'
    videoItem.innerHTML = `
       <a href=""><img src="../img/thumnail.webp" alt="video" class="thumb" /></a>
       <div class="info">
          <img src="../img/profile.png" /> 
          <p>Título</p> 
        </div>
    `
    campoLista.appendChild(videoItem)
}

window.onload(carregarVideos())