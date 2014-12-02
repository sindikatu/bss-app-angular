var Bss = Bss || {};

Bss.lang = Bss.lang || {};

Bss.lang.lang_menu_show_hide = function() {
    $('ul.idiomas span').on('click', function() {
        $('ul.idiomas ul').slideToggle();
    });
};
