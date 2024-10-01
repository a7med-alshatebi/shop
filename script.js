const bar =  document.getElementById('bar');
const mob =  document.getElementById('mob');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}


if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}


////////////////emailJS/////////////

function sendMail(){
    let parms ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,

    }
    emailjs.send("service_q2lb6te","template_8jbfrkf",parms).then(alert('Email Sent Successfully'));
}

