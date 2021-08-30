const back = document.querySelector('.back')
const toggle = document.querySelector('.show')

const base = JSON.parse(localStorage.getItem('students'))
const container = document.querySelector('.container')
const title = document.querySelector('.title')

toggle.addEventListener('click' , e =>{
    e.preventDefault();

    back.classList.toggle('activeBack')
})



const temp = base.map(({name , image, house , patronus , wand , id}) =>{
    container.innerHTML = `
    <div class="card">
            <div class="image">
                <img src="${image}">
            </div>


            <div class="content">
                
                <div class="name">
                    ${name}
                </div>

                <div class="divider"></div>

                <div class="info">
                    <p>House: ${house}</p>
                    <p>Patronus: ${patronus}</p>
                    <p>Wand: ${wand}</p>
                </div>

            </div>
     </div>
    `

        title.innerHTML = name
})

