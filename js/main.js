$(document).ready(function (){
//html запустился - выпоняется функция

    $('.header__burger').click(function (event){
    //проверяем header__burger на нажатие, при нажатии выполняется функция event

        $('.header__burger, .header__menu').toggleClass('active')
        //при нажатии на header__burger добавляем в .header__burger, .header__menu класс active

        $('body').toggleClass('lock')
        //добавляем класс lock в body, блокировка прокрутки
    })

})