document.getElementById("docu").addEventListener("click", visualizarLayout);
document.getElementById("docu2").addEventListener("click", visualizarLayout);



function visualizarLayout(){

    
    if(document.getElementById('menuizquierdo').classList.contains('oculto')){
        document.getElementById('menuizquierdo').classList.remove('oculto');
        document.getElementById('contenido').classList.remove('w-100');
        document.getElementById('contenido').classList.add('w-75');
       

    } else{

        document.getElementById('menuizquierdo').classList.add('oculto');

        document.getElementById('contenido').classList.remove('w-75');
        document.getElementById('contenido').classList.add('w-100');
    }

  

    
}
