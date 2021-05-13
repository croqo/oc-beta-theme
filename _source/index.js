import { library, icon } from '@fortawesome/fontawesome-svg-core';
import * as ico from '@fortawesome/free-solid-svg-icons';
import fullpage from 'fullpage.js';
import fullpageLicenseKey from './fullpageLicenseKey';
import lottie from 'lottie-web';

globalThis.App = {
    motion: new Map()
};

$(()=>{
  initPaddingTop();
  initTables();

  new fullpage('#fullpage', {
    licenseKey: fullpageLicenseKey(),
    autoScrolling: true,
    fixedElements: ".is-fixed-top",
    normalScrollElements: ".is-normal-scroll",
    afterLoad: function(origin, destination, direction){
        $('.lottie').each((index, element)=>{
            const
                name = $(element).data('name'),
                path = $(element).data('path')
            ;
            App.motion.set(index, lottie.loadAnimation(
                {
                    name: name,
                    container: element,
                    path: path
                }
            ));
        });
      console.log([origin, destination, direction]);
      console.log(App)
    }
  });

});

function initPaddingTop(){
  let h = $("nav").height();
  $(".hero-head").each((index,item)=>{
    $(item).css({
    "padding-top": h
    })
  })
}
function initTables(){
  $("table").each((index, item)=>{
    $(item).addClass("container");
  });
  $("tr").each((index, item)=>{
    $(item).addClass("columns");
  });
  $("td").each((index, item)=>{
    $(item).addClass("column");
  });
}
