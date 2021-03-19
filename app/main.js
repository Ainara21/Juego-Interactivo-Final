window.onload = function () {
    /** elemnto que se puede mover (draggable) */

    const items = [].slice.call(document.querySelectorAll(".animal"), 0);

    /** elemntos sobre los que podemos soltar (droppable) */
    const cajas = [].slice.call(document.querySelectorAll(".caja"), 0);
    const animals = document.getElementsByClassName("animals")[0];

    let currentlyDragging = null;

    items.forEach((item) => {
        item.ondragstart = function (ev) {
            ev.dataTransfer.effectAllowed = "move";
            ev.dataTransfer.setData("text/html", this.innerHTML);
            currentlyDragging = ev.target;
        };
    });

    cajas.forEach((caja) => {
        caja.ondragenter = caja.ondragover = function (ev) {
            ev.preventDefault();
            caja.classList.add("hovering");
        };

        caja.ondragleave = function () {
            caja.classList.remove("hovering");
        };

        caja.ondrop = function (ev) {
            currentlyDragging.parentNode.removeChild(currentlyDragging);
            //console.log('me muevo a la caja');
            caja.appendChild(currentlyDragging);
            caja.classList.remove("hovering");
            currentlyDragging = null;

            //comprobar si quedan animales
            let boxAnimals = document.querySelector(".animals").children.length;
            let showPopup = document.querySelector(".popup-wrapper")
            let cerrar =document.querySelector(".popup-close")
            
            //si se han guardado todos los animales
            if (boxAnimals == 0) {
                // return swal('¡Enhorabuena!','Has ordenado todos los animales','success');
               

                //comprobar si caja 1 tiene los animales correctos(animal_06, animal_03)

                const box01 = Array.from(
                    document.querySelector(".box_01").children
                );
                const elemFound = box01.find((e) =>
                    e.classList.contains("animal_06")
                );
                const elem2Found = box01.find((e) =>
                    e.classList.contains("animal_03")
                );

                if (elemFound && elem2Found) {
                    alert("Has colocado todos los animales domésticos bien");
                } else {
                    alert("Revisa los animales domésticos!");
                }

                

                //para caja 2

                const box02 = Array.from(
                    document.querySelector(".box_02").children
                );
                const elem3Found = box02.find((e) =>
                    e.classList.contains("animal_01")
                );
                const elem4Found = box02.find((e) =>
                    e.classList.contains("animal_04")
                );

                if (elem3Found && elem4Found) {
                    alert("Has colocado todos los animales salvajes bien");
                } else {
                    alert("Revisa los animales salvajes!");
                }

                const box03 = Array.from(
                    document.querySelector(".box_03").children
                );
                const elem5Found = box03.find((e) =>
                    e.classList.contains("animal_02")
                );
                const elem6Found = box03.find((e) =>
                    e.classList.contains("animal_05")
                );

                if (elem5Found && elem6Found) {
                    alert("Has colocado todos los animales de granja bien");
                } else {
                    alert("Revisa los animales de granja!");
                }

                const holahola =()=>{
                    let animalUno=document.querySelector('.animal_06')
                    let animalDos=document.querySelector('.animal_03')
                    let cajita= document.querySelector('.box_01')
                    //caja2
                    let animalTres=document.querySelector('.animal_01')
                    let animalCuatro=document.querySelector('.animal_04')
                    let cajita2= document.querySelector('.box_02')
                    //caja3
                    let animalCinco=document.querySelector('.animal_02')
                    let animalSeis=document.querySelector('.animal_05')
                    let cajita3= document.querySelector('.box_03')
                    
                    if(animalUno.parentNode&&animalDos.parentNode==cajita &&
                        animalTres.parentNode&&animalCuatro.parentNode==cajita2 &&
                        animalCinco.parentNode&&animalSeis.parentNode==cajita3){
                            showPopup.classList.add("show")
                            cerrar.addEventListener( 'click',() => {
                                
                               showPopup.classList.add("hide")
            
                            });
                    };
                };
                holahola();

                
                // 

                //Tienes que hacer lo mismo de arriba para las otras dos cajas
            }
        };
    });
   


    animals.ondragenter = animals.ondragover = function (ev) {
        ev.preventDefault();
        // caja.classList.add( 'hovering' );
    };

    // animals.ondragleave = function() {
    //     // caja.classList.remove( 'hovering' );
    // };

    animals.ondrop = function (ev) {
        currentlyDragging.parentNode.removeChild(currentlyDragging);
        //console.log('me muevo a mi sitio');
        animals.appendChild(currentlyDragging);

        currentlyDragging = null;
    };
};
