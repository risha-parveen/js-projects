
let myLeads=[]
const inputBtn= document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")

//localStorage.setItem("myName","www.risha.com")
//console.log(localStorage.getItem("myName"))
//localStorage.clear()

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click",function(){
    saveLeads()
})

inputEl.addEventListener("keypress",function(e){
    if(e.key==='Enter'){
        saveLeads()
    }   
})

function saveLeads(){
    console.log("heloo")
    if(inputEl.value.trim().length==0){
        alert("Please provide input")
    }
    else{
        myLeads.push(inputEl.value) 
        localStorage.setItem("myLeads",JSON.stringify(myLeads))      
        renderLeads()
    }
}



function renderLeads(){
    let listItems=""

    for(let i=0;i<myLeads.length;i++){
        
        listItems+= `
            <li>
                <a target='_blank' href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML=listItems
    inputEl.value=""
}


