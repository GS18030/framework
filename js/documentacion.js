document.getElementById("layout").addEventListener("click", visualizarLayout);
document.getElementById("tipografia").addEventListener("click", visualizarTipografia);
document.getElementById("utilidades").addEventListener("click", visualizarUtilidades);
document.getElementById("componentes").addEventListener("click", visualizarComponentes);

function visualizarLayout(){
    document.getElementById('contenido1').classList.add('activo');
    document.getElementById('contenido1').classList.remove('desactivo');
    
    document.getElementById('contenido2').classList.add('desactivo');
    document.getElementById('contenido2').classList.remove('activo');

    document.getElementById('contenido3').classList.add('desactivo');
    document.getElementById('contenido3').classList.remove('activo');

    document.getElementById('contenido4').classList.add('desactivo');
    document.getElementById('contenido4').classList.remove('activo');

   
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


