
const form =document.getElementsById('form');
const email= document.getElementById('email');
const password=document.getElementById('password');
form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
const setError =(element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.queryselector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess =(element, message) =>{
    const inputControl =element.parentElement;
    const errorDisplay=inputControl.queryselector('error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};
// const isValidEmail=(email)=>{
//     const re =  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test);
//     // return re.test(string(email).toLowerCase());
// }
const validateInputs=()=>{
    const emailValue = email.value.trim();
    const passwordValue=password.value.trim();
    if (emailValue === ''){
        setError(email ,'email is required');
    } 
    else if (!isValidEmail(emailValue)){
       setError(email,'provide a valid email address');
    } 
    else {
        setSuccess(email);
    }
    if (passwordValue === ''){
        setError(password,'password is required');
    }else if (passwordValue.length<8){
        setError(password,'password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
};