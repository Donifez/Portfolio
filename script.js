$(document).ready(function(){
 $('.toggle').click(function(){
     $('.toggle').toggleClass('active')
     $('body').toggleClass('night')

 })
})

AOS.init({duration:1600,});




$('.nav a').on('click', function(e){
    if(this.hash!==""){
        e.preventDefault();
        const hash=this.hash;
        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },
        2000
        );
    }
})