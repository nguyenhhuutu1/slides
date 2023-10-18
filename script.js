var next=document.querySelector('.nutchuyen .right')
var prev=document.querySelector('.nutchuyen .left')
var slides=document.querySelectorAll('.ndslide ul li')
var chisohientai=0;
var slslides=slides.length; //số lượng slides

var trangthai='TamDung'; // khai báo biến trung gian
var moveslideright = function(){

    if(trangthai=='chuyendong'){return false}
    trangthai='chuyendong';
    var Trangthaicua2cd=0;
    var pthientai=slides[chisohientai];
    if(chisohientai<slslides-1){
        chisohientai=chisohientai+1;
    }
    else{
        chisohientai=0;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        // console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active');
        this.classList.remove('anslideNext');
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung';}
    
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        // console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active');
        this.classList.remove('hienslideNext');
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung';}
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);

    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');   
}

next.addEventListener('click', moveslideright);


// xử lý nút left
var moveslideLeft = function(){

    if(trangthai=='chuyendong'){return false}
    trangthai='chuyendong';
    var Trangthaicua2cd=0;
    var pthientai=slides[chisohientai];
    if(chisohientai>0){
        chisohientai=chisohientai-1;
    }
    else{
        chisohientai=slslides-1;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        // console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active');
        this.classList.remove('anslidePrev');
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung';}
    
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        // console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active');
        this.classList.remove('hienslidePrev');
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung';}
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);

    pthientai.classList.add('anslidePrev');
    pttieptheo.classList.add('hienslidePrev');   
}

prev.addEventListener('click', moveslideLeft);