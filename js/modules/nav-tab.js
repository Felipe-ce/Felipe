export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"]');


  if(tabMenu.length && tabContent.length) {
    tabMenu[0].classList.add('ativo');
    tabContent.forEach((item) =>{
      item.classList.add('ativo')
    });

    

    function activeTab(index) {
      tabContent.forEach((item) =>{
        item.classList.remove('ativo')
      });
      switch (index) {
        case 0:
          tabContent.forEach((item) =>{
            item.classList.remove('ativo')
          });
          tabMenu.forEach((menu) =>{
            menu.classList.remove('ativo')
          })
          tabMenu[0].classList.add('ativo');

          tabContent.forEach((item) =>{
              item.classList.toggle('ativo')
          });
          break;
        case 1:
          tabMenu.forEach((menu) =>{
            menu.classList.remove('ativo')
          })
          tabMenu[1].classList.add('ativo');

          tabContent.forEach((item) =>{
            if(item.classList.contains('website')){
              item.classList.add('ativo')
            }
          });
          break
        case 2:
          tabMenu.forEach((menu) =>{
            menu.classList.remove('ativo')
          })
          tabMenu[2].classList.add('ativo');

          tabContent.forEach((item) =>{
            if(item.classList.contains('design')){
              item.classList.add('ativo')
            }
          });
          break
        default:
          break;
      }
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}