let items=document.querySelectorAll('#btn')

let orderDetails=document.getElementById('orderDetails')
let cardContainer=document.getElementById('cardcontainer')

orderDetails.style.display='none'
// cardContainer.style.display='block'


// items.forEach((item)=>{
//     // console.log(item)
// let  rate=document.querySelectorAll('#rate')
//     item.addEventListener('click', orderfood)
// })
// console.log(rate)
items.forEach((item)=>{
    item.addEventListener('click',orderfood)
    // if(rate>4.5){
    //     console.log('ok')
    // }

})


function orderfood(e){
    
    orderDetails.style.display='block'
    cardContainer.style.display='none'
    
    let name= document.getElementById('name')
    // let prize= document.getElementById('prize')
    // let charge = document.getElementById('charge')
    // let gst = document.getElementById('gst')
    // let total=document.getElementById('total') 
    // let pay = document.getElementById('pay')

    GST_CHARGES=.18
    name= e.target.dataset.name
    prize=parseInt( e.target.dataset.prize)
    charge= prize>150 ? 40 : 0
    gst=prize*GST_CHARGES
    total= parseInt(prize+charge+gst)
    
    document.getElementById('prize').innerText=prize + "₹";

    document.getElementById('charge').innerText=charge+ "₹";
    document.getElementById('gst').innerText=Math.floor(gst) ;
    
    document.getElementById('total').innerText=total+ "₹";
   
   
   
    console.log(name,prize,charge,total)
    pay.innerText= `pay to proceed >`+ total+ "₹"
}