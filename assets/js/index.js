

class eventoBlocoNotas{
    constructor(){
        this.blocoNotas = document.getElementById('iTextBloco')
        this.ativaEvento()

       
    }
    ativaEvento(){
        document.addEventListener("change",(evt)=>{
            const itemClicado = evt.target

            if(itemClicado.classList.contains('mudaFontes')){
                this.aplicarEstilo({fontFamily: itemClicado.value})
              
            }

            if(itemClicado.classList.contains('tamFontes')){
                this.aplicarEstilo({fontSize: itemClicado.value + 'px'})
            }

           if(itemClicado.classList.contains('colorInput')){
                this.aplicarEstilo({color: itemClicado.value})
           }
           
        })

        document.addEventListener("click",(evt)=>{
            const itemClicado = evt.target

            if(itemClicado.classList.contains('menuBold') || itemClicado.classList.contains('menuUnderline') || itemClicado.classList.contains('menuItalic')){
                itemClicado.classList.toggle('ativosConfig')
            }

            if(itemClicado.classList.contains('menuItalic')){
              this.blocoNotas.classList.toggle('italicoBlocoNotas')
            }

            if(itemClicado.classList.contains('menuUnderline')){
                this.blocoNotas.classList.toggle('ativaUnderline')
            }

            if(itemClicado.classList.contains('menuBold')){
                this.blocoNotas.classList.toggle('ativaNegrito')
            }

            

        })
    }

    aplicarEstilo(estilo){
        const selecao = window.getSelection()
        
        if(!selecao.rangeCount) return


        const range = selecao.getRangeAt(0)
        const span = document.createElement("span")
        Object.assign(span.style, estilo)
        span.appendChild(range.extractContents())
        range.insertNode(span)
        selecao.removeAllRanges()
        

    }
}


const b1 = new eventoBlocoNotas()
