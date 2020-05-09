const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav')
    const navLinks = document.querySelectorAll('li');
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('active') 
    })

        let swiper = new Swiper('.swiper-container', {
             breakpoints: {
                '@0.75': {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                '@1.50': {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                '@1.90': {
                    slidesPerView: 4,
                    spaceBetween: 50
                },
                '@2.20': {
                    slidesPerView: 4,
                    spaceBetween: 50
                }
            },
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
     
          AOS.init({
            offset: 200,
            delay: 10,
            duration: 600
          });
}

navSlide()