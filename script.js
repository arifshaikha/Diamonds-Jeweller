let hamburgerId = document.getElementById('hamburgerId');
let sideBarId = document.getElementById('sideBarId');
let cross = document.getElementById('cross');




// humburger Menu 
hamburgerId.addEventListener('click', () => {
    sideBarId.style.display = "flex";
})

cross.addEventListener('click', () => {
    sideBarId.style.display = "none";
})


// humburger Menu 


// Product Slider
// let box = document.querySelector('.product-container');
const btnpressprev = (box) => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - (width / 4) * 2;
    // console.log(width)
}
const btnpressnext = (box) => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + (width / 4) * 2;
    // console.log(width)
}

// Product Slider End



// handling B2C Container start
const b2cId = document.getElementById('b2cId');
const b2cContainerId = document.getElementById('b2cContainerId');


b2cId.addEventListener('mouseenter',
    () => {
        // alert('hello')
        b2cContainerId.style.height = '250px';
        b2cContainerId.style.borderTop = '1px solid gray';

    })
b2cId.addEventListener('mouseleave',
    () => {
        b2cContainerId.style.height = '0px';
        b2cContainerId.style.border = 'none';
    })

b2cContainerId.addEventListener('mouseenter',
    () => {
        b2cContainerId.style.height = '250px'
        b2cContainerId.style.borderTop = '1px solid gray'

    })
b2cContainerId.addEventListener('mouseleave',
    () => {
        b2cContainerId.style.height = '0px'
        b2cContainerId.style.border = 'none'
    })


// handling B2C Container end

// handling Our collection Container start
// const ourCol = document.getElementById('ourCol');
// const ourCollectionContainerid = document.getElementById('ourCollectionContainerid');


// ourCol.addEventListener('mouseenter',
//     () => {
//         ourCollectionContainerid.style.height = '400px';
//         ourCollectionContainerid.style.borderTop = '1px solid gray';

//     })
// ourCol.addEventListener('mouseleave',
//     () => {
//         ourCollectionContainerid.style.height = '0px';
//         ourCollectionContainerid.style.border = 'none';
//     })

// ourCollectionContainerid.addEventListener('mouseenter',
//     () => {
//         ourCollectionContainerid.style.height = '400px'
//         ourCollectionContainerid.style.borderTop = '1px solid gray'

//     })
// ourCollectionContainerid.addEventListener('mouseleave',
//     () => {
//         ourCollectionContainerid.style.height = '0px'
//         ourCollectionContainerid.style.border = 'none'
//     })

// handling Our collection Container end



// Image Viewer
let imgView = document.getElementById('imageView');
let imageToshow = document.getElementById('imageDis');
function show(pic) {
    imgView.style.display = 'flex';
    imageToshow.src = pic;

}

function closeViewer() {
    imgView.style.display = 'none';

}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' || evt.key==='Backspace') {
        imgView.style.display = 'none';
    }
});

// Image Viewer end



// dropdown Menu start
let diamondCate=document.getElementById('diamondCate');
let diamondCateContainer=document.getElementById('diamondCateContainer');

let GemstonePearlsCate=document.getElementById('GemstonePearlsCate');
let GemstonePearlsCateContainer=document.getElementById('GemstonePearlsCateContainer');

let cusCate=document.getElementById('cusCate');
let cusCateContainer=document.getElementById('cusCateContainer');

diamondCate.addEventListener('mouseover',()=>{
    diamondCateContainer.style.height='300px'

})
diamondCateContainer.addEventListener('mouseover',()=>{
    diamondCateContainer.style.height='300px'

})
diamondCate.addEventListener('mouseleave',()=>{
    diamondCateContainer.style.height='0px'

})
diamondCateContainer.addEventListener('mouseleave',()=>{
    diamondCateContainer.style.height='0px'

})



GemstonePearlsCate.addEventListener('mouseover',()=>{
    GemstonePearlsCateContainer.style.height='150px'

})
GemstonePearlsCateContainer.addEventListener('mouseover',()=>{
    GemstonePearlsCateContainer.style.height='150px'

})
GemstonePearlsCate.addEventListener('mouseleave',()=>{
    GemstonePearlsCateContainer.style.height='0px'

})
GemstonePearlsCateContainer.addEventListener('mouseleave',()=>{
    GemstonePearlsCateContainer.style.height='0px'

})


cusCate.addEventListener('mouseover',()=>{
    cusCateContainer.style.height='100px'

})
cusCateContainer.addEventListener('mouseover',()=>{
    cusCateContainer.style.height='100px'

})
cusCate.addEventListener('mouseleave',()=>{
    cusCateContainer.style.height='0px'

})
cusCateContainer.addEventListener('mouseleave',()=>{
    cusCateContainer.style.height='0px'

})


// dropdown Menu end


// dropdown Menu for mobile start

let diamondCSD= document.getElementById('diamondCSD')
let diamondList= document.getElementById('diamondList')
let dflag=false;

let gemstoneCSD= document.getElementById('gemstoneCSD')
let gemList= document.getElementById('gemList')
let gflag=false;

let customizedCSD= document.getElementById('customizedCSD')
let customizedList= document.getElementById('customizedList')
let cflag=false;

diamondCSD.addEventListener('click',()=>{
    if(!dflag){

        diamondList.style.height='170px';  
        dflag=!dflag;
    }  
    else{
        diamondList.style.height='0px';
        dflag=!dflag;
    } 
})
gemstoneCSD.addEventListener('click',()=>{
    if(!gflag){
        gemList.style.height='80px';
        gflag=!gflag;
    } 
    else{
        gemList.style.height='0px';
        gflag=!gflag;
    }
})
customizedCSD.addEventListener('click',()=>{
    if(!cflag){
        customizedList.style.height='60px';
        cflag=!cflag;
    } 
    else{
        customizedList.style.height='0px';
        cflag=!cflag;
    }
})

// dropdown Menu for mobile end



// B2C in mobile
let mobileX=document.getElementById('mobileX');
let b2cMobile=document.getElementById('b2cMobile');

let b2cmobShowX=document.getElementById('b2cmobShowX')
let b2cmobShow=document.getElementById('b2cmobShow')

let b2cmobileImg=document.getElementById('b2cmobileImg')

mobileX.addEventListener('click',()=>{
    b2cMobile.style.display='none'
})


b2cmobShowX.addEventListener('click',()=>{
    b2cmobShow.style.display='none'
})

b2cmobileImg.addEventListener('click',()=>{
    b2cmobShow.style.display='flex'

})
// B2C in mobile