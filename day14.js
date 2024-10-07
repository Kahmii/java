let firstpage = document.getElementById("firstpage")
let forform = document.getElementById("forform")
let form = document.getElementById("form")
let fullname = document.getElementById("fullname")
let lastname = document.getElementById("lastname")
let submit = document.getElementById("submit")
let acc = document.getElementById("acc")
let names = document.getElementById("names")
let freeacc = document.getElementById("free-acc")
let hotelacc = document.getElementById("hotel-acc")
let freedetails = document.getElementById("freedetails")
let roomtype = document.getElementById("room-type")
let nam = document.getElementById("name")
let room = document.getElementById("rooms")
let daysin = document.getElementById("daysin")
let warny = document.getElementById("alart")
let depart = document.getElementById("departure")
let firstpick = document.getElementById("firstpick")
let secondpick = document.getElementById("secondpick")
let thirdpick = document.getElementById("thirdpick")
let fourthpick = document.getElementById("fourthpick")
let cancel1 = document.getElementById("cancel1")
let cancel2 = document.getElementById("cancel2")
let cancel3 = document.getElementById("cancel3")
let cancel4 = document.getElementById("cancel4")
let continue1 = document.getElementById("continue1")
let continue2 = document.getElementById("continue2")
let continue3 = document.getElementById("continue3")
let continue4 = document.getElementById("continue4")
let standardroom = document.getElementById("standardroom")
let emerald = document.getElementById("emerald")
let supreme = document.getElementById("supreme")
let presidential = document.getElementById("presidential")
let standarddetails = document.getElementById("standarddetails")
let emralddetails = document.getElementById("emralddetails")
let supremedetails = document.getElementById("supremedetails")
let presidentialdetails = document.getElementById("presidentialdetails")
let due = document.getElementById("due")
let duetime = document.getElementById("duetime")

let showStyle = {
    visibility: "visible",
    position: "relative"
}
let hideStyle = {
    visibility: "hidden",
    position: "absolute"
}
setTimeout(() => {
    Object.assign(firstpage.style, hideStyle)
    Object.assign(forform.style, showStyle)
}, 3000);

let textPattern = /^[a-zA-Z0-9\s]+$/;
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let correct = true

    if (!textPattern.test(fullname.value)) {
        fullname.style.background = "red"
        correct = false
    }

    if (!textPattern.test(lastname.value)) {
        lastname.style.background = "red"
        correct = false
    }

    if (correct) {

        Object.assign(acc.style, showStyle)
        Object.assign(forform.style, hideStyle)
        names.innerHTML = ` ${fullname.value} ${lastname.value}`;
    }
})

freeacc.addEventListener("click", () => {
    freedetails.innerHTML = `<h2>Thank you for selecting a free accomodation , our staff will get you the available room soon</h2>`
    Object.assign(acc.style, hideStyle)
    Object.assign(freedetails.style, showStyle)
})


//calender.................

function outday() {
    if (depart.value !== "") {
        let today = new Date().getTime()

        let thatday = new Date(depart.value).getTime()

        let diff = thatday - today

        if (diff < 0) {
            warny.innerHTML = `<h1>Date can't be earlier than today</h2>`
        }
        else {
            let theday = Math.floor(diff / (24 * 60 * 60 * 1000))
            let thehour = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
            let themin = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
            let thesec = Math.floor((diff % (60 * 1000)) / 1000)
            duetime.innerHTML = `<h2>${theday}D:${thehour}H:${themin}M:${thesec}S</h2>`
            continue1.addEventListener("click", () => {
                Object.assign(firstpick.style, hideStyle)
                Object.assign(due.style, showStyle)
            })
            continue2.addEventListener("click", () => {
                Object.assign(secondpick.style, hideStyle)
                Object.assign(due.style, showStyle)
            })
            continue3.addEventListener("click", () => {
                Object.assign(thirdpick.style, hideStyle)
                Object.assign(due.style, showStyle)
            })
            continue4.addEventListener("click", () => {
                Object.assign(fourthpick.style, hideStyle)
                Object.assign(due.style, showStyle)
            })
            let nightdays = theday +1
            warny.innerHTML = `<h1>${nightdays} Days </h1>`

            standardroom.addEventListener("click", () => {

                let mount = 5000
                standarddetails.innerHTML = `<h2>Your standard room at #${mount} per night.Your bill at the expiration of ${nightdays} days will be #${nightdays * mount}  </h2>`
                Object.assign(firstpick.style, showStyle)
                Object.assign(roomtype.style, hideStyle)
            })
            emerald.addEventListener("click", () => {
                let mountain = 15000
                emralddetails.innerHTML = `<h2>Your standard room at #${mountain} per night.Your bill at the expiration of ${nightdays} days will be #${nightdays* mountain}  </h2>`
                Object.assign(secondpick.style, showStyle)
                Object.assign(roomtype.style, hideStyle)
            })
            supreme.addEventListener("click", () => {
                let mountain = 25000
                supremedetails.innerHTML = `<h2>Your standard room at #${mountain} per night.Your bill at the expiration of ${nightdays} days will be #${nightdays* mountain}  </h2>`
                Object.assign(thirdpick.style, showStyle)
                Object.assign(roomtype.style, hideStyle)
            })
            presidential.addEventListener("click", () => {
                let mountain = 40000
                presidentialdetails.innerHTML = `<h2>Your standard room at #${mountain} per night.Your bill at the expiration of ${nightdays} days will be #${nightdays* mountain}  </h2>`
                Object.assign(fourthpick.style, showStyle)
                Object.assign(roomtype.style, hideStyle)
            })
        }
    }
    else {
        warny.innerHTML = `<h1>Input a Date</h1>`
    }
}
let dai = setInterval(() => {
    outday()
}, 1000);


hotelacc.addEventListener("click", () => {
    nam.innerHTML = `${fullname.value} ${lastname.value}`
    Object.assign(roomtype.style, showStyle)
    Object.assign(acc.style, hideStyle)
})
cancel1.addEventListener("click", () => {
    Object.assign(acc.style, showStyle)
    Object.assign(firstpick.style, hideStyle)
})
cancel2.addEventListener("click", () => {
    Object.assign(acc.style, showStyle)
    Object.assign(secondpick.style, hideStyle)
})
cancel3.addEventListener("click", () => {
    Object.assign(acc.style, showStyle)
    Object.assign(thirdpick.style, hideStyle)
})
cancel4.addEventListener("click", () => {
    Object.assign(acc.style, showStyle)
    Object.assign(fourthpick.style, hideStyle)
})

