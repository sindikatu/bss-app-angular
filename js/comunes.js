var Bss = Bss || {};

Bss.lang = Bss.lang || {};

Bss.lang.lang_menu_show_hide = function() {
	console.log("LLEGA a Bss.lang.lang_menu_show_hide");
    $('ul.idiomas span').on('click', function() {
    	console.log("desplegar listado de idiomas");
        $('ul.idiomas ul').slideToggle();
    });
};