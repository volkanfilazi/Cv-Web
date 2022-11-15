const workMainContainer = document.querySelector('.work-main-container')
const educationMainContainer = document.querySelector('.education-main-container')

const eduArray = [
    {
        schoolName: 'CODINGSCHOOL WÖRTHERSEE',
        date: '10/2022 - 03/2023',
        title: 'Web Development',
        description: 'Modern Frontend Design And Frameworks.'
    },
    {
        schoolName: 'CODINGSCHOOL WÖRTHERSEE',
        date: '10/2020 - 03/2021',
        title: 'Mobile App Development',
        description: 'Modern Android App Frontend Design And Frameworks.Programm languages are Kotlin and Java'
    },
    {
        schoolName: 'WIFI ÖSTERREICH',
        date: '02/2020 - 07/2020',
        title: 'Java Software Engineering',
        description: 'Java Fullstack programming.Desktop and Frontend.Data Managment'
    },
    {
        schoolName: 'TU WIEN',
        date: '03/2011 - 06/2017',
        title: 'Architektur',
        description: 'I didnt complete universität I left it halfway.Autocad and some design programms'
    },
    {
        schoolName: 'UNIVERSITÄT WIEN',
        date: '01/2011 - 03/2011',
        title: 'Deutchkurs B2/2',
        description: '3 Months Full German Course'
    },
]

const workArray = [
    {
        schoolName: 'I&F Anadolu Backshop GMBH',
        date: '03/2021 - Now',
        title: 'Sachbearbeiter',
        description: 'I have experience in sales and production.I am very good at communicating with customers.'
    },
    {
        schoolName: 'Rota Möbel',
        date: '01/2020 - 03/2021',
        title: 'Web Design & Online Seller',
        description: 'Online sales and product addition was my main duty.I was also changing the advertisement and product prices.'
    },
    {
        schoolName: 'I&F Anadolu Backshop GMBH',
        date: '03/2019 - 01/2020',
        title: 'Sachbearbeiter',
        description: 'I have experience in sales and production.I am very good at communicating with customers.'
    },
]

eduArray.forEach((edu) => {
    const eduContainer = document.createElement('div')
    educationMainContainer.appendChild(eduContainer)
    eduContainer.classList.add('flex', 'justify-center', 'items-start', 'pr-10', 'sm:pr-0', 'sm:items-center', 'group', 'flex-col', 'sm:flex-row', 'relative', 'gap-4', 'h-[250px]', 'sm:h-[200px]')

    eduContainer.innerHTML = `
    <div class="education-card p-2 rounded-md  hover:shadow-none hover:duration-300 min-w-[120px] shadow-black sm:w-1/3">
    <p class="text-gray-400 grow">${edu.date}</p>
    <p class="text-lg grow">${edu.schoolName}</p>
</div>
<div class="w-1 grow bg-gray-600 flex h-full flex-col justify-center items-center absolute right-2 sm:relative shrink-0">
    <div class="flex justify-center items-center z-10 ">
        <div class="w-5 h-5 bg-orange-500 rounded-full transition-all group-hover:animate-ping">
        </div>
        <span class="w-5 h-5 bg-orange-500 absolute rounded-full"></span>
    </div>
</div>
<div
     class="education-card border-[1px] border-gray-700 p-2 rounded-md shadow-lg hover:shadow-none hover:duration-300 sm:w-2/3">
    <p class="text-lg">${edu.title}</p>
    <p class="text-gray-400">${edu.description}</p>
</div>
</div>
    `
})

workArray.forEach((work) => {
    const workContainer = document.createElement('div')
    workMainContainer.appendChild(workContainer)
    workContainer.classList.add('flex', 'justify-center', 'items-start', 'pr-10', 'sm:pr-0', 'sm:items-center', 'group', 'flex-col', 'sm:flex-row', 'relative', 'gap-4', 'h-[250px]', 'sm:h-[200px]')

    workContainer.innerHTML = `
    <div class="education-card p-2 rounded-md  hover:shadow-none hover:duration-300 min-w-[120px] shadow-black sm:w-1/3">
    <p class="text-gray-400">${work.date}</p>
    <p class="text-lg">${work.schoolName}</p>
</div>
<div class="w-1 grow bg-gray-600 flex h-full flex-col justify-center items-center absolute right-2 sm:relative shrink-0">
    <div class="flex justify-center items-center z-10 ">
        <div class="w-5 h-5 bg-orange-500 rounded-full transition-all group-hover:animate-ping">
        </div>
        <span class="w-5 h-5 bg-orange-500 absolute rounded-full"></span>
    </div>
</div>
<div
    class="education-card border-[1px] border-gray-700 p-2 rounded-md shadow-lg hover:shadow-none hover:duration-300 sm:w-2/3">
    <p class="text-lg">${work.title}</p>
    <p class="text-gray-400">${work.description}</p>
</div>
</div>
    `
})