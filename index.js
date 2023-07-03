
//---------------------SCORE NUMBERS------------------------
const homeScoreEl = document.getElementById('home-score')
const guestScoreEl = document.getElementById('guest-score')

//---------------------------HOME---------------------------
const homePlus1El = document.getElementById('home-plus1')
const homePlus2El = document.getElementById('home-plus2')
const homePlus3El = document.getElementById('home-plus3')

//---------------------------GUEST---------------------------
const guestPlus1El = document.getElementById('guest-plus1')
const guestPlus2El = document.getElementById('guest-plus2')
const guestPlus3El = document.getElementById('guest-plus3')

//---------------------------SAVE-BUTTON-------------------------
const saveBtnEl = document.getElementById('save-btn')

//---------------------------QUARTERS----------------------------
const quarter1HomeEl = document.getElementById('quarter1-home')
const quarter1GuestEl = document.getElementById('quarter1-guest')
const quarter2HomeEl = document.getElementById('quarter2-home')
const quarter2GuestEl = document.getElementById('quarter2-guest')
const quarter3HomeEl = document.getElementById('quarter3-home')
const quarter3GuestEl = document.getElementById('quarter3-guest')
const quarter4HomeEl = document.getElementById('quarter4-home')
const quarter4GuestEl = document.getElementById('quarter4-guest')

//--------------------------FUNCTIONS------------------------

let homeCount = 0
let guestCount = 0
let quarter = 1

function plus1(id) {
    //console.log(id);
    if(id === 'home-plus1'){
        homeCount += 1
        homeScoreEl.textContent = homeCount
    } 
    else if(id === 'guest-plus1' ) {
        guestCount += 1
        guestScoreEl.textContent = guestCount
    }
}

function plus2(id) {
    //console.log(id);
    if(id === 'home-plus2'){
        homeCount += 2
        homeScoreEl.textContent = homeCount
    } 
    else if(id === 'guest-plus2' ) {
        guestCount += 2
        guestScoreEl.textContent = guestCount
    }
}

function plus3(id) {
    //console.log(id);
    if(id === 'home-plus3'){
        homeCount += 3
        homeScoreEl.textContent = homeCount
    } 
    else if(id === 'guest-plus3' ) {
        guestCount += 3
        guestScoreEl.textContent = guestCount
    }
}

function saveScore() {
    if(quarter === 1) {
        quarter += 1
        quarter1HomeEl.textContent = homeCount
        quarter1GuestEl.textContent = guestCount
    }
    else if(quarter === 2) {
        quarter += 1
        quarter2HomeEl.textContent = homeCount
        quarter2GuestEl.textContent = guestCount
    }
    else if(quarter === 3) {
        quarter += 1
        quarter3HomeEl.textContent = homeCount
        quarter3GuestEl.textContent = guestCount
    }
    else if(quarter === 4) {
        quarter4HomeEl.textContent = homeCount
        quarter4GuestEl.textContent = guestCount
        saveBtnEl.textContent = 'MATCH OVER'
        saveBtnEl.style.backgroundColor = '#F94F6D'
        saveBtnEl.style.color = '#1B244A'
        saveBtnEl.disabled = true
        homePlus1El.disabled = true
        homePlus2El.disabled = true
        homePlus3El.disabled = true
        guestPlus1El.disabled = true
        guestPlus2El.disabled = true
        guestPlus3El.disabled = true 
    }
}