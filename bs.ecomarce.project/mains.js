function pageOne(){
    let tl = gsap.timeline()
tl.from('#webLogo',{
    x:-60,
    duration:0.5,
    opacity:0
},'pageOne')
.from('.nav-item',{
    y:-50,
    duration:0.5,
    stagger:0.2,
    opacity:0
},'menu')
.from('.input-group',{
    y:-50,
    duration:0.5,
    opacity:0,
    delay:0.3
},'menu')
.from('.add_cart',{
    y:-20,
    duration:0.3,
    opacity:0
})
.from('.favourite',{
    x:50,
    duration:0.5,
    opacity:0
},'love')
.from('.user_menu',{
    x:-50,
    duration:0.5,
    opacity:0
},'love')

let tl2 = gsap.timeline()
tl2.from('.banner_title',{
    x:-300,
    duration:0.8,
    opacity:0
})
.from('.banner_details',{
    x:-200,
    duration:0.6,
    opacity:0,
})
.from('.banner_right',{
    opacity:0,
    duration:1,
})




}
pageOne()

function pageTwo(){
    let lt3 = gsap.timeline({
        scrollTrigger:{
            trigger:'.category_section',
            scroller:'body',
            markers:true,
            start:'top 80%',
            end:'top 60%',
        }
    })
    
    lt3.from('.section_header',{
        y:50,
        opacity:0
    })
    .from('.cardOne',{
        x:-80,
        opacity:0
    },'card')
    .from('.cardTwo',{
        y:80,
        opacity:0
    },'card')
    .from('.cardThree',{
        y:-80,
        opacity:0
    },'card')
    .from('.cardFour',{
        x:80,
        opacity:0
    },'card')
}
pageTwo()
function pageThree(){
    let lt4 = gsap.timeline({
        scrollTrigger:{
            trigger:'.poster_section',
            scroller:'body',
            markers:true,
            start:'top 80%',
            end:'top 50%', 
        }

    })
    
    lt4.from('.poster_left',{
        x:-200,
        opacity:0,
    },'poster')
    .from('.poster_right',{
        x:200,
        opacity:0,
    },'poster')
}
pageThree()
