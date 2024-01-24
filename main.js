const form = document.getElementById("conta");

form.addEventListener("submit", function(e) 
{
    e.preventDefault();  

    let campoa = document.getElementById('campo_a');
    let campob = document.getElementById('campo_b');
    const mensagemSucesso = `VALIDADO! O Segundo número maior que o primeiro`;
    const mensagemError = `ERROR! O segundo número têm que ser maior que o primeiro`;
    

    if(campoa.value < campob.value)
    {
        const containerMensagemSucesso = document.querySelector('.mensg');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'flex';
       
        

        

        campoa.value = '';
        campob.value = '';
        

    }
    else
    {
        const containerMensagemError = document.querySelector('.mensg');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'flex';
        
        
        

        campoa.value = '';
        campob.value = '';
        
        
    }
});
console.log(form);
