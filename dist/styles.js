let wrapper = document.querySelector('.wrapper');
let big = document.querySelector('.big');
let middle = document.querySelector('.middle');
let small = document.querySelector('.small');




big.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('big');
    
});

middle.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('middle');
    
});


small.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('small');
})


