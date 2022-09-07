let form = document.forms.login
let inp = form.querySelectorAll('input')
let inpMust = form.querySelectorAll('.must')
let label = form.querySelectorAll('.label') 

console.log(inp);

form.onsubmit = (event) => {
    event.preventDefault()
    
    let eror = false

    inpMust.forEach(item => {
        if (item.value.length === 0) {
            label.style = 'color: red;'
            item.classList.toggle('error')
            eror = false
        } else {
            eror = true
        }
    })

    if (eror == true) {
        submit()
    } else{
        // item.classList.toggle('error')
        label.style = 'color: red;'
    }
}


function submit() {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}