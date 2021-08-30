const database = [
    {
        id: 1,
        name: 'Harry Potter',
        house: 'Gryffindor',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/44/4d/a8/444da82c74259179922d28bbc492f9d2.png'
    },
    {
        id: 2,
        name: 'Hermione Granger',
        house: 'Gryffindor',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://myhero.com/images/guest/g282317/hero105677/image2.jpg'
    },
    {
        id: 3,
        name: 'Ron Weasley',
        house: 'Gryffindor',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
    },
    {
        id: 4,
        name: 'Draco Malfoy',
        house: 'Slytherin',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://5factum.com/wp-content/uploads/2021/05/draco-malfoy.webp'
    },
    {
        id: 5,
        name: 'Blaze Zabini',
        house: 'Slytherin',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/564x/c9/d3/14/c9d314bb22e56f8516e3a4b991f76639.jpg'
    },
    {
        id: 6,
        name: 'Hanna Abbot',
        house: 'Hufflepuff',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://pbs.twimg.com/profile_images/378800000236364825/bd5579800629d95829ba4aa00b292c68_400x400.jpeg'
    },
    {
        id: 7,
        name: 'Fleur Delacour',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/qghficsimjkaeibhfztnpjrqiezhzuadzsjxwpnxusefbthfes/images/a/a6/Fleur_Dealcour_promo.jpg/revision/latest?cb=20130412163253'
    },
    {
        id: 8,
        name: 'Gregory Goyle',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/10/e6/6c/10e66c6495d126d7634b81bf20b8a194.jpg'
    },
    {
        id: 9,
        name: 'Seamus Finnigan ',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/warner-bros-entertainment/images/d/d5/EFB22AB7-B76F-4A92-A236-75BF3FC33DA0.jpeg/revision/latest?cb=20180320024649'
    },
    {
        id: 10,
        name: 'Neville Longbottom',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020526/rs_634x1024-200626105420-634-matthew_lewis-6-26-20.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top'
    },
    {
        id: 11,
        name: 'Luna Lovegood',
        house: '',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/Mam68Vfou2OO6kqEcyW8W/41657e4dbb7d42d2cab591276105bcc1/LunaLovegood_WB_F6_LunaLovegoodInQuibblerSpecsOnHogwartsExpress_Still_080615_Port.jpg?w=1200&fit=fill&f=top'
    },
    {
        id: 12,
        name: 'Ernie Macmillan',
        house: 'Hufflepuff',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harryalbuspotter/images/7/73/Macmillan_Ernie.jpg/revision/latest/scale-to-width-down/250?cb=20190110182910'
    },
    {
        id: 13,
        name: 'Cormac McLaggen',
        house: 'Gryffindor',
        year: '5th year',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        patronus: 'Stag',
        image: 'https://i.pinimg.com/originals/3c/a7/70/3ca770389fc55e3bc5771da72ae9fd0e.jpg'
    },
    {
        id: 14,
        name: 'Lavender Brown',
        house: 'Gryffindor',
        year: '5th year',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        patronus: 'Stag',
        image: 'https://static.wikia.nocookie.net/heroes-and-villain/images/6/61/LavenderBrown_WB_F6_LavenderWritingInBook_Still_080615_Port.jpg/revision/latest?cb=20190531202456'
    },
    {
        id: 15,
        name: 'Theodore Nott',
        house: 'Slytherin',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://pbs.twimg.com/media/EkM7CRoUcAEMjIP.jpg'
    },
    {
        id: 16,
        name: 'Pansy Parkinson',
        house: 'Slytherin',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/18/08/39/180839e277064516b81e19b9458f3439.jpg'
    },
    {
        id: 17,
        name: 'Padma Patil',
        house: 'Ravenclaw',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.stack.imgur.com/WWAfv.jpg'
    },
    {
        id: 18,
        name: 'Parvati Patil',
        house: 'Ravenclaw',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.stack.imgur.com/WWAfv.jpg'
    },
    {
        id: 19,
        name: 'Zacharias Smith ',
        house: 'Hufflepuff',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fac67f3e-e06c-4a51-81fc-2f59b7b01f3b/dttlwb-8c7378e1-2cec-40af-b6e0-f4828fd856b8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZhYzY3ZjNlLWUwNmMtNGE1MS04MWZjLTJmNTliN2IwMWYzYlwvZHR0bHdiLThjNzM3OGUxLTJjZWMtNDBhZi1iNmUwLWY0ODI4ZmQ4NTZiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.WAZ4XMroe55aHTr9ykzQmTk34MItaYJErilvxeffaro'
    },
    {
        id: 20,
        name: 'Alicia Spinnet',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://people.clarkson.edu/~jerorh/group/images/bell.jpg'
    },
    {
        id: 21,
        name: 'Dean Thomas',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harrypotterfanon/images/a/a5/Dean_Thomas.jpg/revision/latest?cb=20160412000218'
    },
    {
        id: 22,
        name: 'Romilda Vane',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'http://images5.fanpop.com/image/photos/28200000/Romilda-Vane-gryffindor-28263105-563-399.jpg'
    },
    {
        id: 23,
        name: 'Bill Weasley',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/6/66/BillWeasleyDH2.png/revision/latest?cb=20160212193938'
    },
    {
        id: 24,
        name: 'Charlie Weasley',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harry-potter-true-generation/images/7/71/Charles_Weasley-0.jpg/revision/latest?cb=20200710061014'
    },
    {
        id: 25,
        name: 'George Weasley ',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/d7/49/26/d749268e9e24cf7feac666e540882d5b.jpg'
    },
    {
        id: 26,
        name: 'Fred Weasley ',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/736x/b0/0b/c4/b00bc40d608eb9ee5ab85435c90378d6.jpg'
    },
    {
        id: 27,
        name: 'Ginny Weasley',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/b/40/b402a776-942a-11e3-b3c3-0017a43b2370/52fbe468ec796.image.jpg'
    },
    {
        id: 28,
        name: 'Percy Weasley',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/600x315/e0/f7/da/e0f7dab261125df3e26cd72affaf77cc.jpg'
    },
    {
        id: 29,
        name: 'Oliver Wood',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/0a/fd/49/0afd496459376c2ffdce0272a3b1eadf.jpg'
    },
    {
        id: 30,
        name: 'Katie Bell ',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/7e/d7/4e/7ed74e0b6af6ed47ba6b79376f51d3c3.jpg'
    },
    {
        id: 31,
        name: 'Sirius Black',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/01/Sirius-Black-Cover.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5'
    },
    {
        id: 32,
        name: 'Terry Boot',
        house: 'Ravenclaw',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://pbs.twimg.com/profile_images/2522197075/1279372290_8785_full.jpeg'
    },
    {
        id: 33,
        name: 'Millicent Bulstrode',
        house: 'Slytherin',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23CljFD4ME9Q6w7qQjeC0XA82tgJad46wYuqpKgNStdCsyM5VwWGKgs0oI1bBaXOkLv4&usqp=CAU'
    },
    {
        id: 34,
        name: 'Alecto Carrow',
        house: 'Death Eater',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/2/25/Alecto-DH2.jpg/revision/latest?cb=20170203010927'
    },
    {
        id: 35,
        name: 'Cho Chang',
        house: 'Ravenclaw',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/b2/d4/30/b2d430fb0c94dd1379f90a3f7f0bf8cf.jpg'
    },
    {
        id: 36,
        name: 'Penelope Clearwater',
        house: 'Ravenclaw',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://pbs.twimg.com/profile_images/664933351871107072/_xsQ7nQy_400x400.jpg'
    },
    {
        id: 37,
        name: 'Vincent Crabbe',
        house: 'Slytherin',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/originals/09/04/9f/09049fc8d819998ab4b344be7c37ab99.jpg'
    },
    {
        id: 38,
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest?cb=20161123045136'
    },
    {
        id: 39,
        name: 'Albus Dumbledore',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/474x/da/b3/d1/dab3d1f464ee0488f6b765af61d3c65f--albus-perkamentus-harry-potter-albus-dumbledore.jpg'
    },
    {
        id: 40,
        name: 'Marietta Edgecombe',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://img.women.com/images/images/000/152/804/square/hannah_-_harry_potter_wiki.jpg?1538171746'
    },
    {
        id: 41,
        name: 'Justin Finch-Fletchley',
        house: 'Hufflepuff',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harryalbuspotter/images/5/5d/Justin_Finch-Fletchley2.jpg/revision/latest?cb=20120113133416'
    },
    {
        id: 42,
        name: 'Seamus Finnigan',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://64.media.tumblr.com/7bdc691ebeb0be66c3d1527cf71ee28c/dec645a071a97945-d3/s540x810/899c7f69073631dfc4b4388cd218768ff9c7367c.jpg'
    },
    {
        id: 43,
        name: 'Anthony Goldstein',
        house: 'Ravenclaw',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://pbs.twimg.com/profile_images/1035492725183995904/S9gfF4YF_400x400.jpg'
    },
    {
        id: 44,
        name: 'Rubeus Hagrid ',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        image: 'https://static.wikia.nocookie.net/lucerne/images/3/31/Rubius_Hagrid.jpg/revision/latest?cb=20140918154916'
    },
    {
        id: 45,
        name: 'Minerva McGonagall',
        house: 'Gryffindor',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://qualitymoviecollectibles.com/wp-content/uploads/2020/10/Professor-McGonagall-Personality-Traits-Minerva-1.jpg'
    },
    {
        id: 46,
        name: 'Severus Snape',
        house: 'Slytherin',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://www.looper.com/img/gallery/severus-snapes-entire-backstory-explained/intro-1595622776.jpg'
    },
    {
        id: 47,
        name: 'Graham Montague',
        house: 'Slytherin',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://img.wattpad.com/78c64db6de3ebd050e3a97dbe2da641426887683/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7146506b4e63767835724a4148673d3d2d3435313030383638312e313464616261616235653939633365363935333631373935383433332e6a7067?s=fit&w=720&h=720'
    },
    {
        id: 48,
        name: 'Peter Pettigrew',
        house: 'Death Eater',
        year: '5th year',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/e/e4/Pettigrew_DH1.jpg/revision/latest/top-crop/width/360/height/360?cb=20160531030113'
    },
    {
        id: 49,
        name: 'Voldemort',
        house: 'Death Eater',
        year: '---',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/anime-characters-fight/images/4/4c/Original66.jpg/revision/latest?cb=20190820160917&path-prefix=ru'
    },
    {
        id: 50,
        name: 'Regulus Black',
        house: 'Slytherin',
        year: '---',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://i.pinimg.com/736x/74/91/da/7491daeeda1af99d5df0dd446ffab93b.jpg'
    },
    {
        id: 51,
        name: 'Newt Scamander',
        house: 'Hufflepuff',
        year: '---',
        patronus: 'Stag',
        wand: '11 long, made of holly, and possessed a phoenix feather core',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/3/36/Newton_Scamander_Profile_crop.png/revision/latest?cb=20190609204955'
    }   
]





const container = document.querySelector('.container')
const searchName = document.querySelector('.searchName')
const searchHouse = document.querySelector('.searchHouse')

window.addEventListener('load' , () =>{
    if(!localStorage.getItem('hogwarts')){
        localStorage.setItem('hogwarts' , JSON.stringify(database))
    }else{
        const base = JSON.parse(localStorage.getItem('hogwarts'))
        const newBase = base.map((item , index) =>{
            return {...item, id: index}
        })

        localStorage.setItem('hogwarts', JSON.stringify([...newBase]))

        const newBasebase = JSON.parse(localStorage.getItem('hogwarts'))
        console.log(newBasebase);

        RenderCard(newBasebase)
    }
})


function RenderCard(base){
    const card = base.map(({name , house , patronus, wand , image , id})=>{
        return `
        <div class="card">
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

                    <button class="more" data-id="${id}" onclick="More(${id})">Explore</button>

                </div>

                <div class="image" style="background: url(${image}) center / cover;">
                </div>
            </div>
        `
    }).join('')


    container.innerHTML = card
}


searchName.addEventListener('input' , e =>{
    var value = e.target.value.toUpperCase();

    const filtered = database.filter(({name}) => name.toUpperCase().includes(value))

    RenderCard(filtered)
})

searchHouse.addEventListener('input' , e =>{
    var value = e.target.value.toUpperCase();

    const filtered = database.filter(({house}) => house.toUpperCase().includes(value))

    RenderCard(filtered)
})



function More(id){
    const base = JSON.parse(localStorage.getItem('hogwarts'))
    localStorage.setItem('students' , JSON.stringify([base[id]]))


    window.open('more.html' , '_self')
}

