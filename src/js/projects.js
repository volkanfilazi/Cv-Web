const allButton = document.querySelector('.all-button')
const buttonArray = [
    {
        id: "all",
        method: '',
        buttonName: 'All'
    },
    {
        id: "html",
        method: 'html',
        buttonName: 'HTML'
    },
    {
        id: "android",
        method: 'android',
        buttonName: 'Android'
    },
    {
        id: "ios",
        method: 'ios',
        buttonName: 'IOS'
    },
]

const projectsObj = [
    {
        id: 1,
        title: 'Responsive Web Design',
        date: '12.Jan.2019',
        shareImage: 'cil:share-alt',
        likeCount: 24,
        isLiked: false,
        description: 'Modern Web Design With Some Frameworks',
        category: 'html',
        image: '/public/images/web-2.jpg',

    },
    {
        id: 2,
        title: 'Android Shop App',
        date: '05.Feb.2020',
        shareImage: 'cil:share-alt',
        likeCount: 2,
        isLiked: false,
        description: 'Modern Shop App With Kotlin',
        category: 'android',
        image: '/public/images/android-1.jpeg',

    },
    {
        id: 3,
        title: 'Android Cv App',
        date: '20.Apr.2021',
        shareImage: 'cil:share-alt',
        likeCount: 4,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'android',
        image: '/public/images/android-2.jpg',
    },
    {
        id: 4,
        title: 'IOS App',
        date: '15.Oct.2021',
        shareImage: 'cil:share-alt',
        likeCount: 5,
        isLiked: false,
        description: 'IOS App With Java',
        category: 'ios',
        image: '/public/images/ios-1.jpg',
    },
    {
        id: 5,
        title: 'IOS Marketing App',
        date: '10.Nov.2022',
        shareImage: 'cil:share-alt',
        likeCount: 0,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'ios',
        image: '/public/images/ios-2.jpg',
    },
    {
        id: 6,
        title: 'Full Stack Shop App',
        date: '06.Feb.2020',
        shareImage: 'cil:share-alt',
        likeCount: 12,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'android',
        image: '/public/images/android-3.jpg',
    },
    {
        id: 7,
        title: 'Responsive Web Design',
        date: '12.Jan.2019',
        shareImage: 'cil:share-alt',
        likeCount: 24,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'html',
        image: '/public/images/web-3.jpg',

    },
    {
        id: 8,
        title: 'Android Shop App',
        date: '05.Feb.2020',
        shareImage: 'cil:share-alt',
        likeCount: 2,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'android',
        image: '/public/images/web-1.jpeg',

    },
    {
        id: 9,
        title: 'Android Cv App',
        date: '20.Apr.2021',
        shareImage: 'cil:share-alt',
        likeCount: 4,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'android',
        image: '/public/images/android-4.avif',
    },
    {
        id: 10,
        title: 'IOS App',
        date: '15.Oct.2021',
        shareImage: 'cil:share-alt',
        likeCount: 5,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'ios',
        image: '/public/images/ios-3.jpg',
    },
    {
        id: 11,
        title: 'IOS Marketing App',
        date: '10.Nov.2022',
        shareImage: 'cil:share-alt',
        likeCount: 0,
        isLiked: false,
        description: 'Modern Shop App With Some Frameworks and love',
        category: 'ios',
        image: '/public/images/ios-4.jpg',
    },
    {
        id: 12,
        title: 'Responsive Web Design',
        date: '06.Feb.2020',
        shareImage: 'cil:share-alt',
        likeCount: 12,
        isLiked: false,
        description: 'Modern Web With Some Frameworks',
        category: 'html',
        image: '/public/images/web-4.jpg',
    }
]

if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify(projectsObj))
}
const foundProjects = localStorage.getItem("projects")

buttonArray.forEach((o) => {
    const projectButtonsContainer = document.querySelector(".projects-buttons-container")
    const newButton = document.createElement("div")
    newButton.classList.add('w-full', 'max-w-[14ch]')

    projectButtonsContainer.appendChild(newButton)

    newButton.innerHTML = `
   
    <button id="btn-${o.id}" class="all-button btn w-full rounded-xl flex items-center justify-center border-[1px] border-gray-500 px-5 py-4  mt-10">${o.buttonName}</button>
    `
    const btn = document.getElementById(`btn-${o.id}`)
    btn.addEventListener('click', () => {
        btn.classList.add('focus:border-orange-500')
        createElements(o.method)
    })
})

const foundAllProject = JSON.parse(foundProjects)


function createElements(name) {
    const categoryFilter = foundAllProject.filter((f) => {
        return f.category.includes(name)
    })


    const allButtons = document.querySelectorAll('.btn')
    allButtons.forEach((x) => {
        x.classList.remove('bg-orange-700')
    })
   
    const projectsMain = document.querySelector('.projects-main')

    projectsMain.innerHTML = ''


    categoryFilter.forEach((item) => {
        const projectContainer = document.createElement('div')
        projectsMain.appendChild(projectContainer)

        projectContainer.innerHTML = `
        <div class="project-container-inside gap-5 shadow-xl cursor-pointer hover:shadow-xl hover:shadow-black hover:duration-500 border-[1px] border-gray-700 h-full justify-between items-stretch flex flex-col p-2 md:p-4 rounded-lg mt-5">
        <div class="w-full flex justify-between items-center">
        <div class=" flex gap-1 items-center ">
        <iconify-icon id="share-${item.id}" width="23" height="23" icon="${item.shareImage}"></iconify-icon>
        <div class="flex justify-center items-center">
        <iconify-icon id="hearth-${item.id}" icon="ant-design:heart-filled" class="text-black dark:text-white" width="23" height="23" style="color: ${item.isLiked ? 'red' : 'text-green'};" ></iconify-icon>
        <p class="text-[12px]" id="counter-${item.id}">${item.likeCount}</p>
        </div>
        </div>
        <p class="text-xs">${item.date}</p>
        </div>
        <p class="font-bold min-h-[45px] ">${item.title}</p>
        <div class="project-image bg-center bg-no-repeat bg-cover h-[150px] w-full" style="background-image: url('${item.image}')"></div>
        <p class="text-center min-h-[70px] max-h-[120px] w-full">${item.description}</p>
        </div>
        `

        const hearthIcon = document.getElementById(`hearth-${item.id}`)
        const count = document.getElementById(`counter-${item.id}`)
        hearthIcon.addEventListener("click", function () {
            const updatedProject = foundAllProject.find((x) => x.id == item.id)
            if (!item.isLiked) {
                item.isLiked = true
                updatedProject.likeCount++
                count.innerText++
                hearthIcon.style.color = 'red'

            } else {
                item.isLiked = false
                updatedProject.likeCount--
                count.innerText--
                hearthIcon.removeAttribute('style')
            }
            updatedProject.isLiked = item.isLiked
            localStorage.setItem("projects", JSON.stringify(foundAllProject))
        })

        const share = document.getElementById(`share-${item.id}`)
        const shareModalContainer = document.querySelector('.share-modal')
        const shareElements = document.createElement('div')
        share.addEventListener("click",function(){
            shareModalContainer.classList.remove('hidden')
            shareModalContainer.classList.add('flex')
            shareModalContainer.appendChild(shareElements)
            shareElements.classList.add('flex','flex-col','justify-center','max-w-[500px]','items-center','p-10','z-10','bg-white','dark:bg-gray-700','text-black','dark:text-white','border-2','border-black','w-min-200px')
            shareElements.innerHTML = `
            <div class="flex justify-end items-end w-[100%]">
                <iconify-icon class="close-share-modal cursor-pointer" icon="mdi:close-circle-outline" width="48" height="48"></iconify-icon>
            </div>
            <div class="flex flex-col gap-2 p-2">
                <p>Category : ${item.title}</p>
                <p>Shared Date: ${item.date}</p>
            </div>
            <p class="p-2 text-lg">Would you like to share this project?</p>
            <img class="project-image" src="${item.image}"></img>
            <div class="p-2">
                <button class="border-2 focus:border-red-500  p-2">Facebook</button>
                <button class="border-2 focus:border-red-500 p-2">Instagram</button>
                <button class="border-2 focus:border-red-500 p-2">Whatsup</button>
            </div>
            <div class="flex flex-col w-3/4 items-center">
            <label class="ShareTextAreaLabel" for="ShareTextAreaInput">Message</label>
            <textarea id="ShareTextAreaInput" placeholder="To Write"
                class="w-full placeholder:text-gray-600 bg-transparent focus:placeholder:text-black dark:focus:placeholder:text-gray-500 dark:text-white outline-none border-[1px] h-[100px] border-orange-500 rounded-xl p-2"
                type="text"></textarea>
            </div>
            <button class="share-button mt-5 border-2 border-orange-500 p-2 rounded-lg">Share</button>   
            `   

            const shareBtn = document.querySelector('.share-button')
            const input = document.getElementById('ShareTextAreaInput')
            shareBtn.addEventListener("click",function(){
                shareElements.innerHTML = `
                <p><span>Project and your message : </span>${input.value}</p>
                <div>Succesfully Shared</div>
                `
                setTimeout(function() {
                    shareModalContainer.classList.add('hidden')
                    shareModalContainer.removeChild(shareElements)
                }, 2000); 
            })

            const closeShareButton = document.querySelectorAll('.close-share-modal')
            closeShareButton.forEach((element) =>{
                element.addEventListener("click",function(){
                    shareModalContainer.removeChild(shareElements)
                    shareModalContainer.classList.add('hidden')
                    shareModalContainer.classList.remove('flex')
                })  
            })  
        })        
        return categoryFilter
    })
}
createElements('')



