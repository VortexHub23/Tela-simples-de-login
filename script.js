


function clicar(event){
    const email = document.getElementById('email')
    const senha = document.getElementById('password')
    const lista = document.getElementById('lista')
    const section = document.getElementById('section')
    
    lista.innerHTML =''
    let erros = []
    if(email.value.length === 0 || senha.value.length === 0 || senha.value.length >=9){
      email.style.border = '2px solid red'
      email.placeholder = `incorreto`
      senha.style.border = '2px solid red'
      senha.placeholder = `incorreto`
      erros.push('email ou senha incorretos')
      let errop = document.createElement('li')
      errop.innerHTML = `${erros}`
      lista.appendChild(errop)
      email.value= ''
      email.focus()
      section.style.height = '340px'
    
    
   
   
      
    } 
function sair(){
    const email = document.getElementById('email')
    const senha = document.getElementById('password')
    const lista = document.getElementById('lista')
    const section = document.getElementById('section')
      email.style.border = '2px solid black'
      email.placeholder = `Email...`
      senha.style.border = '2px solid black'
      senha.placeholder = `Senha...`



}


}
