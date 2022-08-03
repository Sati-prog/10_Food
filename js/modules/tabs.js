function tabs() {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(content => {

            content.classList.add('hide');
            content.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {

            tab.classList.remove('tabheader__item_active');
        });
    }

    hideTabContent();

    function showTabContent(i = 0) {

        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide', 'fade');

        tabs[i].classList.add('tabheader__item_active');
    }

    showTabContent();

    tabsParent.addEventListener('click', (event) => {

        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {

            tabs.forEach((item, i) => {

                if (target == item) {

                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs;