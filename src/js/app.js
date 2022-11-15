let introductionStateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(introductionStateCheck);
        const animationText = document.querySelector('.web-developer-text');
        const insideImageAnimationText = document.querySelector('.introduction-inside-image-text')
        const codeTextFirst = document.querySelector('.code-text-first ')
        const codeTextSecond = document.querySelector('.code-text-second ')
        let animationTextArray = ["Web Developer", "App Developer", "UX Designer"];
        const socialMediaAnimation = document.querySelector('.social-media-animation')
        const socialMediaPing = document.querySelector('.social-media-ping')
        const socialMediaImages = document.querySelector('.social-media-images')
        let n = 0
        let i = 0;
        let text = animationTextArray[0];
        let text2 = animationTextArray[1];
        animationText.innerHTML = "";

        codeTextFirst.innerHTML = "&ltcode&gt"
        codeTextSecond.innerHTML = "&lt/code&gt"

        let introFirstTextArray = ['I build a matrix']

        let a = 0;
        let introFirstTextAnimationOne = introFirstTextArray[0]
        insideImageAnimationText.innerHTML = "";

        function FirstTyping() {
            if (a <= introFirstTextAnimationOne.length) {
                insideImageAnimationText.innerHTML += introFirstTextAnimationOne.charAt(a);
                a++;
                setTimeout(FirstTyping, 200);
            }

            if (a > introFirstTextAnimationOne.length) {
                a = 0;
                insideImageAnimationText.innerHTML = ""

            }
        }
      
        async function Secondtyping() {
            if (i <= text.length) {
                animationText.innerHTML += text.charAt(i);
                i++;
                setTimeout(Secondtyping, 100);
            }
            
            if (i > text.length) {
                i = 0;
                animationText.innerHTML = ""
                if (n < animationTextArray.length - 1) {
                    n++
                } else {
                    n = 0
                }
                text = animationTextArray[n]
                
            }
        }
        // animationTextArray.length 2
        // n = 0  web devoloper
        // n = 1  app developer

        FirstTyping()
        Secondtyping()

        socialMediaAnimation.addEventListener("click", function () {
            socialMediaAnimation.classList.add('opacity-0', 'duration-300')
            socialMediaImages.classList.remove('opacity-0')
            socialMediaPing.classList.add('opacity-0', 'duration-300')
            socialMediaImages.classList.add('opacity-100', 'duration-300')
        })

        const introCounterAnimation = document.querySelectorAll('.num')
        let interval = 2000;
        introCounterAnimation.forEach(introCounter => {
            let startValue = 0;
            let endValue = parseInt(introCounter.getAttribute("data-val"))

            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1
                introCounter.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter)
                }
            }, duration)
        })


    }
}, 100);






