let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement =>{
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;   //Cree una variable height con valor por defecto de 0.
        let menu = listElement.nextElementSibling; //Seleccione al hermano adyacente de menu
        console.log(menu.scrollHeight)  //Esto solo lo agregue para conocer el alto de mi hermano adyacente de menu
        if(menu.clientHeight == "0"){   //Hago una condicional si el alto de menu actualmente es igual a 0 
            height = menu.scrollHeight; //Hago que mi variable heigth cambie al tamaño minimo que debe tener el hermano adyacente de menu para poder exitir
        }

        menu.style.height=  `${height}px`; //Y cuando el valor de mi variable menu no es 0 con esta función cambiamos ese valor de nuevo a 0.
    })
});