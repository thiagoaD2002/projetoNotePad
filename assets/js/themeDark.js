class temaDark{
    constructor(){
        const themeIcon = document.querySelector(".darkModeIcon")
        themeIcon.addEventListener('click',()=>{
           this.mudaBackground()
           this.mudaHeader()
           this.mudaFerramentas()
           this.mudaTextArea()
        })
    }

    mudaFerramentas(){
        const navFerramentas = document.querySelector('.ferramentas')
        navFerramentas.classList.toggle("navDark")


        /* MUDANDO O FOCUS DOS ICONES DE FERRAMENTAS*/

        document.addEventListener("click",(evt)=>{
            const evento = evt.target
            if(evento.classList.contains('menuBold') || 
            evento.classList.contains('menuUnderline') || 
            evento.classList.contains('menuItalic'))
            {
                evento.classList.toggle('ferrasDark')
            }
        })

        ////////////////

        const menuFerramentas = document.querySelectorAll('.iconFerramentas')
        menuFerramentas.forEach((el)=>{
            el.classList.toggle('menusDark')
        })

        /* MUDANDO ICONE DE ALTERAR TEMA DO SITE*/ 

        const iconColor = document.querySelector("#iconColor")
        iconColor.classList.toggle('iconDesat')
        const iconDark = document.querySelector('#iconDark')
        iconDark.classList.toggle('iconAtivo')
        
        const selects = document.querySelectorAll(".SelectArea")
        selects.forEach((el)=>{
            el.classList.toggle('selectDark')
        })


    }


    mudaTextArea(){
        const textArea = document.getElementById('iTextBloco')
        textArea.classList.toggle('textAreaDark')
    }

    mudaBackground(){
        const body = document.querySelector('body')
        body.classList.toggle('bodyDark')
    }

    mudaHeader(){
        const header = document.querySelector("header")
        header.classList.toggle('headerDark')
    }



    
}

const t = new temaDark()