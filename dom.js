const h1 = document.createElement("h1")
h1.innerText = "Hello Gd evening"
document.body.appendChild(h1)

// const h1=document.createElement("h1");
// h1.innerText = "This is DOM";
// document.body.appendChild(h1);
// document.getElementById("demo").innerText = "New Text";
// document.getElementById("demo").style.color = "red";

// let newDiv = document.createElement("div");
// newDiv.innerText = "This is a DIV";
// document.body.appendChild(newDiv);
// newDiv.id = "newdivID";

// document.getElementById("newdivID").style.width = "300px";
// document.getElementById("newdivID").style.height = "300px";
// document.getElementById("newdivID").style.border = "1px solid red";

// const dlt = document.querySelectorAll(".para");
// dlt.remove();

document.getElementById("btn").addEventListener("dblclick", ()=>{
    h1.remove()
})

