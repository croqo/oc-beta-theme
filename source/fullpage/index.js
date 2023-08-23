import fullpage from 'fullpage.js';
import fullpageLicenseKey from './license.json';


export default new fullpage('#fullpage', {
    navigation: true,
    licenseKey: fullpageLicenseKey.result,
    sectionSelector: 'section',
    slideSelector: '.slide',
    fixedElements: '.navbar, .footer',
    menu: '#menu',
    recordHistory: false,

    //events
    afterLoad: function(origin, destination, direction){
        console.log(origin);
        console.log(destination);
        console.log(direction);
        console.log(fullpage_api.getActiveSection());
    },
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
    onLeave: function(origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
