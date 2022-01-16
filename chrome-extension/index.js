
let myLeads=["www.a.com","www.b.com","www.c.com"]
const inputBtn= document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i=0;i<myLeads.length;i++){
    ulEl.innerHTML+= "<li>" +myLeads[i]+ "</li>"
}
