const languagesMainContainer = document.querySelector(".main-languages-container")
const languages = [
    {
        name: "Turkish",
        procent: 100
    },
    {
        name: "German",
        procent: 70
    },
    {
        name: "English",
        procent: 80
    },
]
languages.forEach((language) => {
    const languagesCard = document.createElement('div')
    languagesMainContainer.classList.add("flex", "justify-center", "items-center", "text-white", "flex-wrap", "gap-2", "p-3")
    languagesCard.classList.add("flex", "items-center", "justify-center", "grow")
    languagesMainContainer.appendChild(languagesCard)
    languagesCard.innerHTML = `
    <div class="flex flex-col gap-5 justify-center items-center grow py-20 bg-gray-900 z-10 rounded-xl shadow-xl  bg-opacity-80">
        <div><span class="font-bold" id="language-title">${language.name}</span></div>
        <div id="${language.name}" class="flex z-10 justify-center items-center">
            <div class="turkish-progress w-[200px] h-[200px] rounded-full flex items-center relative">
            </div>
            <div class="w-[160px] h-[160px] bg-black rounded-full flex items-center justify-center absolute">
            100%
            </div>
        </div>
    </div>
    `
    const progressCircle = document.getElementById(language.name)
    progressCircle.children[0].setAttribute("style", `background: conic-gradient(#f97316, ${(language.procent * 360) / 100}deg, grey 0deg);`)
    progressCircle.children[1].innerHTML = language.procent + ' %'
})
