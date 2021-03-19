window.addEventListener('DOMContentLoaded', () => {



    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabContainerDescr = document.querySelectorAll('.card_app'),
        imgModal = document.getElementById('card_one'),
        btn = document.querySelectorAll(".btn")
        dropMenu = document.querySelector('.dropdown-menu');

        // let a = btn.addEventListener('click', () =>{
        //     let div = document.createElement('div');
        //     div.innerHTML += `<li> добавленно </li>`
        //     dropMenu.append(div);
        // })}

        // function openModal(imgModal){
        //     imgModal.addEventListener('click', (elem) =>{
        //         elem.innerHTML += `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        //         <div class="carousel-inner">
        //           <div class="carousel-item active">
        //             <img src="..." class="d-block w-100" alt="...">
        //           </div>
        //           <div class="carousel-item">
        //             <img src="..." class="d-block w-100" alt="...">
        //           </div>
        //           <div class="carousel-item">
        //             <img src="..." class="d-block w-100" alt="...">
        //           </div>
        //         </div>
        //       </div>`
        //     })
        // }
        // openModal(imgModal)
    




	function hideTabContent() {
        tabsContent.forEach(item => {
           item.style.display = 'none'
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if( target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    // const apartament = {
    //     price :[9500, 9000, 9000, 10000, 11500, 8000, 17000, 15000, 13000 ],
    //     address : ["Салавата Юлаева, 17а", "Свободы, 104а", "Ереванская, 14", "Дарвина, 107", "Ереванская, 14", "Молодогвардейцев, 21", "Двинская, 3", "Комарова, 112", "Котина, 21"],
    //     area : ["Калининский район", "Советский район", "Центральный район", "Калининский район", "Советский район", "Центральный район", "Калининский район", "Советский район", "Центральный район"],
    //     numOfRooms : [1, 1, 1, 2, 2, 2, 3, 3, 3]
    // };

    // createTabContDescr(apartament.price, apartament.address, apartament.area, apartament.numOfRooms, tabContainerDescr);

    // function createTabContDescr(price, address, area, numOfRooms, parent) {
        
    //     tabContainerDescr.forEach((price, address, area, numOfRooms, i++, parent) => {
    //         // for(let i=0; i < 9; i++){
    //         parent.innerHTML = "";
    //         parent.innerHTML += `
    //         <div class="card" style="width: 18rem;">
    //         <img src="content/8_1.jpg" class="card-img-top" alt="...">
    //         <div class="card-body">
    //           <h5 class="card-title">Цена: ${apartament.price[i] + i}</h5>
    //           <p class="card-text">Описание: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         </div>
    //         <ul class="list-group list-group-flush">
    //           <li class="list-group-item">Адресс: ${address[i]}</li>
    //           <li class="list-group-item">Район: ${area[i]}</li>
    //           <li class="list-group-item">Количество комнат: ${numOfRooms[i]}</li>
    //         </ul>
    //         <div class="card-body">
    //           <a href="#" class="card-link">Card link</a>
    //           <a href="#" class="card-link">Another link</a>
    //         </div>
    //       </div>
    //         `
    //     })
    // }
        
        });