const user = {
  userName: '',
  lastName: '',
  email: '',
  phone: '',
  CPF: ''
}

const getName = () => {
    const name = document.getElementById('name').value;
    user.userName = name;
    console.log(user)
}

const getLastName = () => {
  const lastName = document.getElementById("lastName").value;
  user.lastName = lastName
  console.log(user)
}

const getEmail = () => {
  const email = document.getElementById("email").value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(regexEmail.test(email)) { 
    user.email = email;
    console.log(user)

  } else {
    alert("errou")
  }
}

const getPhone = () => {
  const phone = document.getElementById("phone").value;
  user.phone = phone;
  console.log(user)
}

const getCPF = () => {
  const CPF = document.getElementById("CPF").value;
  user.CPF = CPF
  console.log(user)
}
