import style from './style.sass';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import * as ico from '@fortawesome/free-solid-svg-icons';


$(()=>{
   let h = $("nav").height();
   $("header").each((index,item)=>{
       $(item).css({
        "padding-top": (h+30)
        })
   })
});
console.log('ok');