import { library, icon } from '@fortawesome/fontawesome-svg-core';
import * as ico from '@fortawesome/free-solid-svg-icons';


$(()=>{
  let h = $("nav").height();
  $(".hero-head").each((index,item)=>{
    $(item).css({
    "padding-top": h
    });
    console.log(`Head height: ${h}`);
  });

});
