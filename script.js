var fName = document.getElementsByTagName("input")[0]

var lName = document.getElementsByTagName("input")[1]

var age = document.getElementsByTagName("input")[2]

var add = document.getElementsByTagName("button")[0]
var deleteFirst = document.getElementsByTagName("button")[1]
var deleteLast = document.getElementsByTagName("button")[2]

var tableBody = document.getElementById("tableBody")

add.addEventListener("click", function(){
    // Validation
    if(!fName.value || !lName.value || !age.value){
        return alert("Fill all fields")
    } 

    // Printing
    var tr = document.createElement("tr")
    tr.innerHTML = 
    `
    <td>${fName.value}</td>
    <td>${lName.value}</td>
    <td>${age.value}</td>

    `
    tableBody.append(tr)
    
})

deleteFirst.addEventListener("click", function(){
    
    // Find rows
    var tableRows = tableBody.querySelectorAll("tr")
    // Validation
    if(!tableRows.length) return alert("All deleted")
    // Deleting
    tableRows[0].remove()

})

deleteLast.addEventListener("click", function(){
    
    // Find rows
    var tableRows = tableBody.querySelectorAll("tr")
    // Validation
    if(!tableRows.length) return alert("All deleted")
    // Deleting
    tableRows[tableRows.length - 1].remove()

})