let button = document.querySelector('button')
let inputs = document.querySelectorAll('input')
let labels = document.querySelectorAll('label')
let firstName = document.querySelector('.first-name')
let firstNameLabel = document.querySelector('.first-name-label')
let lastName = document.querySelector('.last-name')
let lastNameLabel = document.querySelector('.last-name-label')
let email = document.querySelector('.email')
let emailLabel = document.querySelector('.email-label')
let password = document.querySelector('.password')
let passwordLabel = document.querySelector('.password-label')
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let errors = 0

window.onload = function() {
    firstName.focus()
    firstName.value = 'Jonathan '
}
button.addEventListener('click', event => {
    errors = 0
    if (firstName.value.length < 2 || firstName.value.length > 16) {
        firstName.classList.add('input-error')
        firstNameLabel.classList.add('error-message')
    }
    if (lastName.value.length < 2 || lastName.value.length > 16) {
        lastName.classList.add('input-error')
        lastNameLabel.classList.add('error-message')
    }
    if (!email.value.match(regex)) {
        email.classList.add('input-error')
        emailLabel.classList.add('error-message')
    }
    if (password.value.length < 6 || firstName.value.length > 16) {
        password.classList.add('input-error')
        passwordLabel.classList.add('error-message')
    }
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains('input-error')) {
            errors++
        }
    }
    if (errors < 1) {
        alert('Your 7 day free trial has begun, enjoy!')
        location.reload()
    }
})
inputs.forEach (x => {
    x.addEventListener ('focus', event => {
        if (x.classList.contains('input-error')) {
            x.classList.remove('input-error')
            x.nextElementSibling.classList.remove('error-message')
        }
    })
    x.addEventListener ('keydown', KeyboardEvent => {
        if (KeyboardEvent.key === 'Enter') {
            button.click()
            button.focus()
        }
    })
})
