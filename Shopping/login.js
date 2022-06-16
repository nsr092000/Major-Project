let logInform = document.getElementById('loginid')
let emaillogin = logInform.getElementsByClassName('loginform')[0]
let passwordlogin = logInform.getElementsByClassName('loginform')[1]

let loginvalidate = emaillogin.getElementsByClassName('valid-feedback')[0]
let logininvalidate = emaillogin.getElementsByClassName('invalid-feedback')[0]
let passvalidate = passwordlogin.getElementsByClassName('valid-feedback')[0]
let passinvalidate = passwordlogin.getElementsByClassName('invalid-feedback')[0]

let alertmessage = document.getElementById("alertid") 

const resetlogin = ()=>{

     emaillogin.getElementsByClassName('form-control')[0].value = ''
     passwordlogin.getElementsByClassName('form-control')[0].value = ''
 
    loginvalidate.style.display = 'none'
    passvalidate.style.display = 'none'
    logininvalidate.style.display = 'none'
    passinvalidate.style.display = 'none'

   }

   let verification = () =>{

    let login = emaillogin.getElementsByClassName('form-control')[0].value
    let loginpass = passwordlogin.getElementsByClassName('form-control')[0].value

    let verify = loginmodal(login,loginpass)

    if(verify){

        if(!db_users.length){

            alertmessage.innerText = 'create an account'
            alertmessage.classList.add('alert-danger')
            alertmessage.style.display = 'block'
            $('#loginModall').modal('hide')
            resetlogin()
            setTimeout(() => {
                alertmessage.style.display = 'none'
            },3000);
            return
            }
        
           db_users.forEach((user)=>{
        
            if(user.Email == login && user.password == loginpass){
                alertmessage.innerText = 'login successful'
                alertmessage.style.backgroundColor = 'green'
                alertmessage.style.display = 'block'
                
                let prevsignupnav1 = signUpnav.innerHTML
                let prevloginnav1 = logInnav.innerHTML


                signUpnav.innerHTML = `<a class="nav-link cartpointer">Hi ${user.firstname}</a>`
                logInnav.innerHTML = '<a class="nav-link cartpointer">Logout</a>'
                
                logInnav.addEventListener('click',()=>{

                signUpnav.innerHTML = prevsignupnav1
                logInnav.innerHTML = prevloginnav1

                })


                setTimeout(() => {
                    alertmessage.style.display = 'none'
                },3000);
            }
            else{
                
                alertmessage.innerText = 'Email or Password may be incorrect'
                alertmessage.classList.add('alert-danger')
                alertmessage.style.display = 'block'

                setTimeout(() => {
                    alertmessage.style.display = 'none'
                },3000);

            }
           })

           $('#loginModall').modal('hide')
           resetlogin()

    }


   }

let loginmodal = (login,loginpass)=>{

    let flag1 = true
 
    if(!login || !login.includes('@') || login.startsWith('@') || !login.includes('.') || login.slice(login.lastIndexOf('.')).length < 3){
        
        logininvalidate.style.display = 'block'
        loginvalidate.style.display = 'none'
        flag1 = false
    }
    else{
        loginvalidate.style.display = 'block'
        logininvalidate.style.display = 'none'
    }

    if(!loginpass && loginpass.length<8){
        
        passinvalidate.style.display = 'block'
        passvalidate.style.display = 'none'
        flag1 = false
    }
    else{
        passvalidate.style.display = 'block'
        passinvalidate.style.display = 'none'
    }

    return flag1
}

