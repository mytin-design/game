

let helpbx = document.querySelector(".hbx")


function displayHelp() {
    if( filebx.style.display  =  "block") {
        filebx.style.display  =  "none" 
    filebtn.setAttribute("onclick", "displayFile()")

            
    }

    if( editbx.style.display  =  "block") {
        editbx.style.display  =  "none" 
    editbtn.setAttribute("onclick", "displayEdits()")

            
    }
    helpbx.style.display = "block"
}


function closeHelp() {
    helpbx.style.display = "none"
}

//file and edit actions
//get file and edit boxes

let filebx = document.querySelector(".filebx")

let editbx = document.querySelector(".editbx")

//get file and edit buttons

let filebtn = document.getElementById("file")

let editbtn = document.getElementById("edit")


//file

function displayFile() {

    if( editbx.style.display  =  "block") {
        editbx.style.display  =  "none" 
    editbtn.setAttribute("onclick", "displayEdits()")

        
            
    }
    filebx.style.display  =  "block" 
    filebtn.setAttribute("onclick", "hideFile()")

}



function hideFile() {
    filebx.style.display  =  "none" 
    filebtn.setAttribute("onclick", "displayFile()")
}


//edit

function displayEdits() {
    if( filebx.style.display  =  "block") {
        filebx.style.display  =  "none" 
            
    }
    editbx.style.display  =  "block" 
    editbtn.setAttribute("onclick", "hideEdits()")
}

function hideEdits() {
    editbx.style.display  =  "none" 
    editbtn.setAttribute("onclick", "displayEdits()")
}


//begin game - move snake

let snakeBody = document.querySelector("#snakebody")
let playbtn  = document.getElementById("play")


function moveBody() {
    snakeBody.classList.add("play")
    snakeBody.classList.remove("paused")
    snakeBody.classList.remove("reset")


}


function stopBody() {
    snakeBody.classList.remove("play")
    snakeBody.classList.add("paused")

}

function resetGame() {
       snakeBody.classList.add("reset")
}

let cbox = document.querySelector(".cbox")
let fcbox = document.querySelector(".fcbx")


function closeControls() {
    cbox.style.display =  "none"
    fcbox.style.display =  "none"

}

function editControls() {
    cbox.style.display =  "block"
    editbx.style.display = "none"
    editbtn.setAttribute("onclick", "displayEdits()")


}


function viewControls() {
    fcbox.style.display =  "block"

    editbx.style.display = "none"
    editbtn.setAttribute("onclick", "displayEdits()")


}


let controlx = document.querySelector(".controlx")
let controly = document.querySelector(".controly")
let controlz = document.querySelector(".controlz")
let controlt = document.querySelector(".controlt")



//when changing a control, show the save button, else it should stay hidden

let savecbtn = document.querySelector("#saveControls")

//return is used bcz the output of this function is used by another function

//expected output is the new value entered by user
function changeX() {
    controlx.setAttribute("contenteditable", 'true')
    controlx.innerHTML = "Insert new control"
    savecbtn.style.display = 'block'

}




function changeY() {
    controly.setAttribute("contenteditable", 'true')
    controly.innerHTML = "Insert new control"
    savecbtn.style.display = 'block'
}


function changeZ() {
    controlz.setAttribute("contenteditable", 'true')
    controlz.innerHTML = "Insert new control"
    savecbtn.style.display = 'block'
}


function changeT() {
    controlt.setAttribute("contenteditable", 'true')
    controlt.innerHTML = "Insert new control"
    savecbtn.style.display = 'block'
}

//saving controls 
//on click, changed control should udate the fixed control box
let fxcontrol = document.getElementById('cX')
let fycontrol = document.getElementById('cY')
let fzcontrol = document.getElementById('cZ')
let ftcontrol = document.getElementById('cT')

let pxbtn = document.getElementById('xbtn')
let pybtn = document.getElementById('ybtn')
let pzbtn = document.getElementById('zbtn')
let ptbtn = document.getElementById('tbtn')


function saveControls() {
    
    fxcontrol.innerHTML = controlx.innerHTML
    pxbtn.innerHTML = controlx.innerHTML


    fycontrol.innerHTML = controly.innerHTML
    pybtn.innerHTML = controly.innerHTML

    fzcontrol.innerHTML = controlz.innerHTML
    pzbtn.innerHTML = controlz.innerHTML

    ftcontrol.innerHTML = controlt.innerHTML
    ptbtn.innerHTML = controlt.innerHTML


    controlx.removeAttribute("contenteditable", 'true')
    controly.removeAttribute("contenteditable", 'true')

    controlz.removeAttribute("contenteditable", 'true')
    controlt.removeAttribute("contenteditable", 'true')

}



