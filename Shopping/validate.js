let signUpform = document.getElementById('signupform')
let firstnamefield = signUpform.getElementsByClassName('formlist')[0]
let lastnamefield = signUpform.getElementsByClassName('formlist')[1] 
let emailfield = signUpform.getElementsByClassName('formlist')[2]
let passwordfield = signUpform.getElementsByClassName('formlist')[3]

let firstnamevalidate = firstnamefield.getElementsByClassName('valid-feedback')[0]
let firstnameinvalidate = firstnamefield.getElementsByClassName('invalid-feedback')[0]
let lastnamevalidate = lastnamefield.getElementsByClassName('valid-feedback')[0]
let lastnameinvalidate = lastnamefield.getElementsByClassName('invalid-feedback')[0]
let emailvalidate = emailfield.getElementsByClassName('valid-feedback')[0]
let emailinvalidate = emailfield.getElementsByClassName('invalid-feedback')[0]
let passwordvalidate = passwordfield.getElementsByClassName('valid-feedback')[0]
let passwordinvalidate = passwordfield.getElementsByClassName('invalid-feedback')[0]

let db_users = []
let signUpnav = document.getElementById('signupnav')
let logInnav = document.getElementById('loginav')

const reset = ()=>{

     firstnamefield.getElementsByClassName('form-control')[0].value = ''
     lastnamefield.getElementsByClassName('form-control')[0].value = ''
     emailfield.getElementsByClassName('form-control')[0].value = ''
     passwordfield.getElementsByClassName('form-control')[0].value = ''
     
     firstnamevalidate.style.display = 'none'
     lastnamevalidate.style.display = 'none'
     emailvalidate.style.display = 'none'
     passwordvalidate.style.display = 'none'
     firstnameinvalidate.style.display = 'none'
     lastnameinvalidate.style.display = 'none'
     emailinvalidate.style.display = 'none'
     passwordinvalidate.style.display = 'none'

    }

let signupform = ()=>{
    
    let isvalid = validatee()
    
    if(isvalid){
        
        let firstname = firstnamefield.getElementsByClassName('form-control')[0].value
        let lastname = lastnamefield.getElementsByClassName('form-control')[0].value
        let Email = emailfield.getElementsByClassName('form-control')[0].value
        let password = passwordfield.getElementsByClassName('form-control')[0].value
    
     let newUser = {
        firstname,
        lastname,
        Email,
        password
     }
     
     db_users.push(newUser)
     // console.log(db_users)
     
     $('#signupModal').modal('hide')
     reset()
     
     let prevsignupnav = signUpnav.innerHTML
     let prevloginnav = logInnav.innerHTML
     
     signUpnav.innerHTML = `<a class="nav-link cartpointer">Hi ${newUser.firstname}</a>`
     logInnav.innerHTML = '<a class="nav-link cartpointer">Logout</a>'
     
     logInnav.addEventListener('click',()=>{

      signUpnav.innerHTML = prevsignupnav
      logInnav.innerHTML = prevloginnav

     })
    
      alertmessage.innerText = 'Signup successfully'
      alertmessage.style.backgroundColor = 'green'          
      alertmessage.style.display = 'block'

      setTimeout(() => {
        alertmessage.style.display = 'none'
    },3000);



    }
    
}

const validatee = ()=>{
      
    let flag = true
    
    let firstname = firstnamefield.getElementsByClassName('form-control')[0].value
    let lastname = lastnamefield.getElementsByClassName('form-control')[0].value
    let Email = emailfield.getElementsByClassName('form-control')[0].value
    let password = passwordfield.getElementsByClassName('form-control')[0].value

    if(!firstname){
        flag = false
        firstnameinvalidate.style.display = 'block'
        firstnamevalidate.style.display = 'none'
        
    }
    else{
        firstnamevalidate.style.display = 'block'
        firstnameinvalidate.style.display = 'none'
    }

    if(!lastname){
        flag = false
        lastnameinvalidate.style.display = 'block'
        lastnamevalidate.style.display = 'none'
    }
    else{
        lastnamevalidate.style.display = 'block'
        lastnameinvalidate.style.display = 'none'
    }

    if(!Email ||  !Email.includes('@') || Email.startsWith('@') || !Email.includes('.') || Email.slice(Email.lastIndexOf('.')).length < 3){
        flag = false
        emailinvalidate.style.display = 'block'
        emailvalidate.style.display = 'none'
    }
    else{
        emailvalidate.style.display = 'block'
        emailinvalidate.style.display = 'none'
    }

    if(!password && password.length<8){
        flag = false
        passwordinvalidate.style.display = 'block'
        passwordvalidate.style.display = 'none'
    }
    else{
        passwordvalidate.style.display = 'block'
        passwordinvalidate.style.display = 'none'
    }

    return flag



}

