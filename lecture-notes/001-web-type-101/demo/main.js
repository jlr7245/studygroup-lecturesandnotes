console.log('hello');

(() => {
  const tabs = (element, navClass, contClass) => {
    const theElement = document.getElementById(element);
    const tabNav = Array.from(theElement.getElementsByClassName(navClass));
    const tabCont = Array.from(theElement.getElementsByClassName(contClass));
    let activeIndex = 0;
    let initCalled = false;
    
    const init = () => {
      if (!initCalled) {
        initCalled = true;
        tabNav.forEach((nav) => {
          nav.addEventListener('click', (e) => {
            e.preventDefault();
            goToTab(tabNav.indexOf(nav));
          });
        });
      }
    };
    
    const goToTab = (index) => {
      if (index !== activeIndex && index >= 0 && index <= tabNav.length) {
        tabNav[activeIndex].classList.remove('actv');
        tabNav[index].classList.add('actv');
        tabCont[activeIndex].classList.remove('actv');
        tabCont[index].classList.add('actv');
        activeIndex = index;
      }
    };
    
    return {
      init,
      goToTab
    };
  };
  window.tabs = tabs;
})();

const popexTabs = tabs('popex', 'popextab', 'popexcont');
popexTabs.init();

const choicexTabs = tabs('choicex', 'choicextab', 'choicexcont');
choicexTabs.init();