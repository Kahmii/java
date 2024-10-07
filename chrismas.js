let chris = document.getElementById("chris")
let depart = document.getElementById("departure")
function christmas() {
    if (depart.value !== "") {
        let today  = new Date().getTime()
        
        let thatday = new Date(depart.value).getTime()
        
        let diff = thatday - today
        
        if (diff < 0) {
            chris.innerHTML = `<h1>Date can't be earlier than today</h2>`
        }
        else{
            let theday = Math.floor(diff / (24*60*60*1000))
            let thehour =  Math.floor( (diff % (24*60*60*1000)) / (60*60*1000))
            let themin =  Math.floor((diff % (60*60*1000))/(60*1000))
            let thesec =  Math.floor((diff % (60*1000))/1000)
            chris.innerHTML = `<h1>${theday} Days : ${thehour} hours : ${themin} min : ${thesec} sec</h1>`   

        }
    }
    else{
        chris.innerHTML = `<h1>Your destination can't be empty</h1>`
    }
}

let christ = setInterval(() => {
    christmas()
}, 1000);