function login(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

if(u==="summer" && p==="1867"){

document.getElementById("loginScreen").style.display="none"
document.getElementById("portal").classList.remove("hidden")

showPage("dashboard")

}else{

document.getElementById("loginError").innerText="Wrong login"

}

}

function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"))

document.getElementById(id).classList.remove("hidden")

}

let seconds=0
let interval

function startTimer(){

interval=setInterval(()=>{

seconds++

let m=Math.floor(seconds/60)
let s=seconds%60

document.getElementById("timer").innerText=
String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")

},1000)

}

function stopTimer(){

clearInterval(interval)

}

function copy(id){

let text=document.getElementById(id).innerText

navigator.clipboard.writeText(text)

alert("Copied")

}

let step=0

function showScript(){

document.getElementById("scriptText").innerText=mainScript[step]

}

function nextScript(){

if(step<mainScript.length-1){

step++

showScript()

}

}

function prevScript(){

if(step>0){

step--

showScript()

}

}

let auditStep=0

function showAudit(){

document.getElementById("auditText").innerText=auditScript[auditStep]

}

function nextAudit(){

if(auditStep<auditScript.length-1){

auditStep++

showAudit()

}

}

function prevAudit(){

if(auditStep>0){

auditStep--

showAudit()

}

}

function addLead(){

let name=document.getElementById("leadName").value
let phone=document.getElementById("leadPhone").value
let status=document.getElementById("leadStatus").value

let li=document.createElement("li")

li.innerText=name+" | "+phone+" | "+status

document.getElementById("leadList").appendChild(li)

}

window.onload=function(){

showScript()
showAudit()

}
