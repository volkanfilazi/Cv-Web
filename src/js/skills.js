let skillsStateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(skillsStateCheck);
        const skillsMainContainer = document.querySelector('.skills-main-container')
        let skillsArray = [
            {
                id: 1,
                name: "UI/UX Design",
                image: "ic:twotone-design-services",
                skill: ['Landing Pages', 'User Flow', 'Wireframing', 'Prototyping', 'Mobile App Design'],
                skillImages: [
                    'https://i.ytimg.com/vi/pvD1l2BmfrE/maxresdefault.jpg',
                    'https://i.ytimg.com/vi/RFdtXi4Jr7o/maxresdefault.jpg',
                    'https://d12ydcmiv69ory.cloudfront.net/images/mobile-application-design-og-img.jpg',
                    'https://i.ytimg.com/vi/RFdtXi4Jr7o/maxresdefault.jpg',
                    'https://i.ytimg.com/vi/pvD1l2BmfrE/maxresdefault.jpg',
                    'https://i.ytimg.com/vi/pvD1l2BmfrE/maxresdefault.jpg',
                ],
                showDetails: 'ic:outline-remove-red-eye',
                clicked: false
            },
            {
                id: 2,
                name: "Programmer",
                image: "material-symbols:developer-mode-sharp",
                skill: ['Kotlin', 'Java', 'Javascript', 'Html', 'Css'],
                skillImages: [
                    'https://www.jrebel.com/sites/default/files/image/2021-01/what%20is%20kotlin%20banner%20image.png',
                    'https://www.developpez.net/forums/attachments/p605876d1/a/a/a',
                    'https://user-images.githubusercontent.com/68542775/167072911-dc31eac8-6885-4a05-9c25-279ecce22a79.png',
                    'https://codebrainer.azureedge.net/images/what-is-html.jpg',
                    'https://techvccloud.mediacdn.vn/2020/4/13/photo-1-15867704341431006410340-crop-1586770597696426386843.jpg',
                    'https://techvccloud.mediacdn.vn/2020/4/13/photo-1-15867704341431006410340-crop-1586770597696426386843.jpg',
                ],
                showDetails: 'ic:outline-remove-red-eye',
                clicked: false
            },
            {
                id: 3,
                name: "Adobe",
                image: "bxl:adobe",
                skill: ['Illustrator', 'InDesign', 'Photoshop', 'After Effect', 'Premiere Pro'],
                skillImages: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2000px-Adobe_InDesign_CC_icon.svg.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png',
                ],
                showDetails: 'ic:outline-remove-red-eye',
                clicked: false
            },
            
        ]

        skillsArray.forEach((s) => {
            const skillsElementContainer = document.createElement('div')
            skillsElementContainer.classList.add("hop", "flex", "border-[1px]", "rounded-xl", "shadow-lg", "border-gray-700", "flex-col", "hover:shadow-md", "hover:shadow-black", "hover:duration-300", "justify-center", "items-center", "p-5")
            skillsElementContainer.innerHTML = `
            <div class="w-full">
                <div class="border-name-left-container flex flex-col justify-center items-center">
                <div class=" w-full flex">
                    <div id="skill-${s.id}" class="flex items-center justify-center">
                        <iconify-icon class="text-gray-500" icon="${s.showDetails}" width="48" height="48"></iconify-icon>
                        <div class="social-media-ping flex justify-center items-center w-3 h-3 absolute bg-orange-500 opacity-75 animate-ping z-10 rounded-full text-black dark:text-white"></div>
                    </div>
                </div>
                <div class="flex w-full justify-center items-center">
                    <span class="w-full iconify" data-width="48" data-height="48" data-icon="${s.image}"></span>
                </div>

                <div class="border-right-container w-full flex items-end justify-end">
                    <div class="w-5 h-5 border-t-4 border-r-4 border-orange-500"></div>
                </div>
                <h3 class="side-logo-text text-black dark:text-white font-bold font-mono text-xl">${s.name}</h3>
                <div class="border-left-container w-full flex items-start justify-start">
                    <div class="w-5 h-5 border-b-4 border-l-4 border-orange-500"></div>
                </div>
                </div>
                <div id="skill-list-${s.id}" class="flex justify-center items-center gap-5 w-full">
            <div class="flex ">
                    <ul class="skills-list flex flex-col gap-5 mt-5 justify-center items-center text-black dark:text-white shrink-0">
                        <li>${s.skill[0]}</li>
                        <li>${s.skill[1]}</li>
                        <li>${s.skill[2]}</li>
                        <li>${s.skill[3]}</li>
                        <li>${s.skill[4]}</li>                  
                    </ul>
                </div>
                <div id="skills-hidden-image-${s.id}" class="hidden gap-5 ">
                    <div class="flex justify-center items-center border-[1px] border-gray-700 p-2 max-w-[200px]">
                        <img src=${s.skillImages[0]}></img>
                    </div>
                    <div class="flex justify-center items-center border-[1px] border-gray-700 p-2 max-w-[200px]">
                        <img src=${s.skillImages[1]}></img>
                    </div>
                    <div class="flex justify-center items-center border-[1px] border-gray-700 p-2 max-w-[200px]">
                        <img src=${s.skillImages[2]}></img>
                    </div>
                    <div class="flex justify-center items-center border-[1px] border-gray-700 p-2 max-w-[200px]">
                        <img src=${s.skillImages[3]}></img>
                    </div>
                    <div class="flex justify-center items-center border-[1px] border-gray-700 p-2 max-w-[200px]">
                        <img src=${s.skillImages[4]}></img>
                    </div>   
                    <div class="flex justify-center items-center border-[1px] border-gray-700 p-2 max-w-[200px]">
                        <img src=${s.skillImages[5]}></img>
                    </div>   
                           
                </div>
            </div>
            </div>
            
            `
            skillsMainContainer.appendChild(skillsElementContainer)

            const container = document.getElementById(`skill-${s.id}`)
            const skillsList = document.getElementById(`skill-list-${s.id}`)
            const skillsHiddenImage = document.getElementById(`skills-hidden-image-${s.id}`)
            const skillsMainSupport = document.getElementById('skills-main-animation')
            container.addEventListener("click", function () {
                skillsArray.forEach((x) => x.id)
                if (!s.clicked) {
                    s.clicked = true
                    skillsMainSupport.classList.remove('hidden')
                    skillsMainContainer.removeChild(skillsElementContainer)
                    skillsMainSupport.appendChild(skillsElementContainer)
                    skillsHiddenImage.classList.remove('hidden')
                    skillsHiddenImage.classList.add("grid", "grid-cols-1", "md:grid-cols-3", "sm:grid-cols-2")
                    skillsList.classList.remove('justify-center', 'items-center')
                    skillsList.classList.add('justify-between')
                    container.classList.add('w-full')

                } else {
                    s.clicked = false
                    skillsMainSupport.removeChild(skillsElementContainer)
                    skillsMainContainer.appendChild(skillsElementContainer)
                    skillsElementContainer.classList.add('w-full')
                    skillsHiddenImage.classList.add('hidden')
                    skillsHiddenImage.classList.remove("grid", "grid-cols-1", "md:grid-cols-6", "sm:grid-cols-2")
                    skillsList.classList.add('justify-center', 'items-center')
                    skillsList.classList.remove('justify-between')
                    container.classList.remove('w-full')
                }
            })
        })
    }

}, 100);
