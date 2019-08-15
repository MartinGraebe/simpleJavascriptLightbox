class snoLightbox {
    constructor(targetClass){
      
        this.links = document.querySelectorAll(`a.${targetClass}`)
   
      this.targetClass = targetClass
    }
    init() {
      if (this.links.length > 0) this.createLightbox()
    
     
   
     this.initEvent()
      
    }
    initEvent(){
        Array.from(this.links).forEach((el) => {
      
            el.addEventListener('click', (ev) => this.lightbox(el,ev) )
    })
    }
    createLightbox(){
       
      const div = document.createElement('div')
      div.setAttribute('id','sno_lightbox')
      const content = document.createElement('div')
      content.setAttribute('id','sno_lightbox_content')
      const close = document.createElement('div')
      close.setAttribute('id','sno_close')
      close.innerHTML+="X"
      content.appendChild(close)
      div.appendChild(content)
      document.body.appendChild(div)
  }
  removeImg(){

  }
  lightbox(element, event){
   
    event.preventDefault()
    const lbox = document.getElementById('sno_lightbox')
    const link = element.href
    const img = document.createElement('img')
    img.src = link
    const light = document.getElementById('sno_lightbox_content')
    light.appendChild(img)
    document.getElementById('sno_lightbox').className = 'sno_open'
    if(lbox !== null){
      document.getElementById('sno_close').addEventListener('click', function(){
      
        if(img !== null) light.removeChild(img)
         lbox.className = ''
        
          
      }, {once: true})
    }  
    if(lbox !== null){
        document.getElementById('sno_lightbox').addEventListener('click', function(e){
            if(e.target.id === 'sno_lightbox'){
            e.preventDefault()
          
            light.removeChild(img)
            lbox.className = ''
            
            }
          
       }, {once: true})
    }
      

      
  }

}
const box = new snoLightbox('sno-lightbox')
box.init()
box.createLightbox()
