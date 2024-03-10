const email = document.querySelector(".btn-email");
const summit = document.querySelector(".btn-summit");
const emsil = document.querySelector(".donthave");
const info = document.querySelector(".donthave1");
const morefirst = document.querySelector(".more1");
const textfirst = document.querySelector(".btn-kinhnghiem");
const moresecond = document.querySelector(".more2");
const textsecond = document.querySelector(".btn-hocvan");
const morethird = document.querySelector(".more3");
const textthird = document.querySelector(".btn-hoatdong");
const moreforth = document.querySelector(".more4");
const textfofth = document.querySelector(".btn-sothich");
const morefifth = document.querySelector(".more5");
const textfifth = document.querySelector(".btn-ngonngu");
const moresixth = document.querySelector(".more6");
const textsixth = document.querySelector(".btn-kynang");

function validateEmail(text) {
  var allowed = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return allowed.test(text);
}
summit.addEventListener("click", function () {
  const text = document.querySelector(".btn-email").value;
  let valid = validateEmail(text);
  if (valid) {
    emsil.classList.add("hidden");
    info.classList.remove("hidden");
  } else alert("Invalid email");
});
morefirst.addEventListener('click', function(){
  textfirst.classList.toggle('hidden');
  if (morefirst.textContent == 'View more'){
    morefirst.textContent = 'View less';
  } else if(morefirst.textContent == 'View less'){
    morefirst.textContent = 'View more';
  }
})
moresecond.addEventListener('click', function(){
  textsecond.classList.toggle('hidden');
  if (moresecond.textContent == 'View more'){
    moresecond.textContent = 'View less';
  } else if(moresecond.textContent == 'View less'){
    moresecond.textContent = 'View more';
  }
})
morethird.addEventListener('click', function(){
  textthird.classList.toggle('hidden');
  if (morethird.textContent == 'View more'){
    morethird.textContent = 'View less';
  } else if(morethird.textContent == 'View less'){
    morethird.textContent = 'View more';
  }
})
moreforth.addEventListener('click', function(){
  textfofth.classList.toggle('hidden');
  if (moreforth.textContent == 'View more'){
    moreforth.textContent = 'View less';
  } else if(moreforth.textContent == 'View less'){
    moreforth.textContent = 'View more';
  }
})
morefifth.addEventListener('click', function(){
  textfifth.classList.toggle('hidden');
  if (morefifth.textContent == 'View more'){
    morefifth.textContent = 'View less';
  } else if(morefifth.textContent == 'View less'){
    morefifth.textContent = 'View more';
  }
})
moresixth.addEventListener('click', function(){
  textsixth.classList.toggle('hidden');
  if (moresixth.textContent == 'View more'){
    moresixth.textContent = 'View less';
  } else if(moresixth.textContent == 'View less'){
    moresixth.textContent = 'View more';
  }
})
