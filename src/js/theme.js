window.onload = function (e) {
    const themeClick = document.querySelector('.theme-change-items');
    const dropdown = document.querySelector('.dropdown-content');
    const navDropDown = document.querySelector('.nav-item-list-phone ')
    const lightThema = document.querySelector('.white-white-container');
    const darkDarkThema = document.querySelector('.black-black-container');
    const navItemsMenu = document.querySelector('.nav-items-menu')
    const navItemList = document.querySelector('.nav-item-list')
    let checkVisibility = false;

    themeClick.addEventListener("click", function () {
        checkVisibility = !checkVisibility;
        if (checkVisibility) {
            dropdown.classList.remove('hidden')
            dropdown.classList.add('flex')
        } else {
            dropdown.classList.add('hidden')
            dropdown.classList.remove('flex')
        }
    })

    lightThema.addEventListener("click", function () {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', '')
    })

    darkDarkThema.addEventListener("click", function () {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    })

    let navListToogle = false;
    navItemsMenu.addEventListener("click", function () {
        navListToogle = !navListToogle;
        if (navListToogle) {
            navItemList.classList.remove('hidden')
            navDropDown.classList.remove('hidden')

        } else {
            navDropDown.classList.add('hidden')
            navItemList.classList.add('hidden')
        }
    })
}
