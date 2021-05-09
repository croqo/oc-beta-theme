import { library, icon } from '@fortawesome/fontawesome-svg-core';
import * as ico from '@fortawesome/free-solid-svg-icons';
import fullpage from 'fullpage.js';
import fullpageLicenseKey from './fullpageLicenseKey';


$(()=>{
  initPaddingTop();
  initTables();

  new fullpage('#fullpage', {
    licenseKey: fullpageLicenseKey(),
    fixedElements: ".is-fixed-top",
    autoScrolling: true,
    afterLoad: function(origin, destination, direction){
      console.log([origin, destination, direction])
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