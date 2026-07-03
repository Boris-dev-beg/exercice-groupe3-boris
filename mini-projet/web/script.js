async function LoadDatas() {
    try{
        const response = await fetch('../data.json');
        const data = await response.json()

        console.log(data)
        return data
    }catch(error){
      console.error("Error while loading file : ", error)
    }
}
window.addEventListener('load', () => onLoad())

async function onLoad() {
  const datas = await LoadDatas()
    const main = document.getElementById("main")

    datas.map((art) => (
        main.innerHTML += `
      <div class="article">
        <h2>${art.title}</h2>
        <p>${art.description}</p>
        <a href="${art.link}" target="_blank">Voir</a>
      </div>`
    ))
    return
}