
/*No tocar que se rompe todo :c */ 

const filterElements=document.querySelector(".categoria");
const galleryItems=document.querySelectorAll(".box");

/*Categorias para dejar seleccionado todos los productos y cambiar la categoria seleccionada*/
filterElements.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filter-item")){
        filterElements.querySelector(".active").classList.remove("active")
        event.target.classList.add("active")

/* Filtro de imaganes por medio de data-filter*/
        const filterValue=event.target.getAttribute("data-filter")
        galleryItems.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue == "todos"){
                item.classList.remove("hide")
                item.classList.add("show")
            }else{
                item.classList.add("hide")
                item.classList.remove("show")
            }
        })
    }
    
})

/*No tocar que se rompe todo :c */ 