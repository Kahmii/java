let moveit = document.getElementById("moveit")

let ml = 0 

function anime() {
    ml += 1
    moveit.style.marginLeft = `${ml}%`
}
function takeback() {
    ml -= 1
    moveit.style.marginLeft = `${ml}%`
}

let ani = setInterval(()=>{
    anime()
    if (ml == 90) {
        clearInterval(ani)
           ml = 90
        let takeitback = setInterval(()=>{
            takeback()

            if (ml == 0) {
                clearInterval(takeitback)
            }
        },10)
    }
    
},10)