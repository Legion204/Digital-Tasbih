const subahanAllahDisplay = document.getElementById('subahanAllahDisplay');
const subahanAllahIncriminateBtn= document.getElementById('subahanAllahIncriminate');
const subahanAllahDecriminateBtn= document.getElementById('subahanAllahDecriminate');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncriminateBtn= document.getElementById('alhamdulillahIncriminate');
const alhamdulillahDecriminateBtn= document.getElementById('alhamdulillahDecriminate');

const allahuakbarDisplay = document.getElementById('allahuakbarDisplay');
const allahuakbarIncriminate= document.getElementById('allahuakbarIncriminate');
const allahuakbarDecriminate= document.getElementById('allahuakbarDecriminate');

const resetBtn= document.getElementById('resetBtn');

let subahanAllahCount= 0;
let alhamdulillahount=0;
let allahuakbarCount=0;

subahanAllahIncriminateBtn.addEventListener('click',function(){
    subahanAllahCount+=1
    console.log(subahanAllahCount)
});

