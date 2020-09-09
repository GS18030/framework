document.getElementById("docu").addEventListener("click", visualizarLayout);
document.getElementById("docu2").addEventListener("click", visualizarLayout);

document.getElementById("tipografia").addEventListener("click", visualizarTipografia);
document.getElementById("utilidades").addEventListener("click", visualizarUtilidades);
document.getElementById("componentes").addEventListener("click", visualizarComponentes);

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


function visualizarTipografia(){
    document.getElementById('contenido1').classList.add('desactivo');
    document.getElementById('contenido1').classList.remove('activo');
    
    document.getElementById('contenido2').classList.add('activo');
    document.getElementById('contenido2').classList.remove('desactivo');

    document.getElementById('contenido3').classList.add('desactivo');
    document.getElementById('contenido3').classList.remove('activo');

    document.getElementById('contenido4').classList.add('desactivo');
    document.getElementById('contenido4').classList.remove('activo');

   
}

function visualizarUtilidades(){
    document.getElementById('contenido1').classList.add('desactivo');
    document.getElementById('contenido1').classList.remove('activo');
    
    document.getElementById('contenido2').classList.add('desactivo');
    document.getElementById('contenido2').classList.remove('activo');

    document.getElementById('contenido3').classList.add('activo');
    document.getElementById('contenido3').classList.remove('desactivo');

    document.getElementById('contenido4').classList.add('desactivo');
    document.getElementById('contenido4').classList.remove('activo');

}

function visualizarComponentes(){
    document.getElementById('contenido1').classList.add('desactivo');
    document.getElementById('contenido1').classList.remove('activo');
    
    document.getElementById('contenido2').classList.add('desactivo');
    document.getElementById('contenido2').classList.remove('activo');

    document.getElementById('contenido3').classList.add('desactivo');
    document.getElementById('contenido3').classList.remove('activo');

    document.getElementById('contenido4').classList.add('activo');
    document.getElementById('contenido4').classList.remove('desactivo');

  
}

document.getElementById("docu").addEventListener("click", mostrarmenu);




function mostrarmenu(){

    
}