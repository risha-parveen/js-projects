
let myLeads=[]
const inputBtn= document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")

//localStorage.setItem("myName","www.risha.com")
//console.log(localStorage.getItem("myName"))
//localStorage.clear()

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click",function(){
    save(myLeads)
})

inputEl.addEventListener("keypress",function(e){
    if(e.key==='Enter'){
        save(myLeads)
    }   
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

function save(leads){
    if(inputEl.value.trim().length==0){
        alert("Please provide input")
    }
    else{
        leads.push(inputEl.value) 
        localStorage.setItem("myLeads",JSON.stringify(leads))      
        render(leads)
    }
}



function render(leads){
    let listItems=""

    for(let i=0;i<leads.length;i++){
        
        listItems+= `
            <li>
                <a target='_blank' href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML=listItems
    inputEl.value=""
}


