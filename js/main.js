var Bss = Bss || {};

Bss.desktop = false;
Bss.mobile = true;

Bss.tools = Bss.tools || {};

Bss.tools.show_byname_form_on_click = function() {
    $('.with-form h2').on('click', function() {
        if (Bss.mobile) {
            $('.with-form').toggleClass('active');
            $('.with-form form').slideToggle();
        }
    });
};

Bss.tools.restore_byname_form_on_desktop = function() {
    if (Bss.desktop) {
        $('.with-form form').removeAttr('style');
    }
    if (Bss.mobile) {
        if ($('.with-form').hasClass('active')) {
            $('.with-form form').removeAttr('style');
            $('.with-form form').attr('style', 'display: block;');
        }
    }
};

Bss.tools.clean_search_form = function() {
    $('#reset').on('click', function() {
        $('#form1 #ano option:eq(0)').prop('selected', true);
        $('#form1 #categoria option:eq(0)').prop('selected', true);
        $('#form1 #tipo_discapacidad option:eq(0)').prop('selected', true);
        $('#form1 #nombre').val('');
        $('#form1 #apellido').val('');
        $('#form1 #localidad').val('');
        $('#form1 #dorsal').val('');
    });
};

Bss.tools.inicialize_footables = function() {
    $('.footable').footable({
        breakpoints: {
            phone: 320,
            tablet: 768
        }
    });
};

/*
 * footable_already_initialized - fires when the FooTable has already been
 * initialized footable_initializing - fires before FooTable starts initializing
 * footable_initialized - fires after FooTable has finished initializing
 * footable_resizing - fires before FooTable resizes footable_resized - fires
 * after FooTable has resized footable_redrawn - fires after FooTable has
 * redrawn footable_breakpoint - fires inside the resize function, when a
 * breakpoint is hit footable_column_data - fires when setting up column data.
 * Plugins should use this event to capture their own info about a column
 * footable_row_detail_updating - fires before a detail row is updated
 * footable_row_detail_updated - fires after a detail row has been updated
 * footable_row_collapsed - fires when a row is collapsed footable_row_expanded -
 * fires when a row is expanded footable_row_removed - fires when a row is
 * removed
 */

Bss.tools.cargar_categorias = function() {
    $("#ano").change(
            function() {
                // Eliminamos el posible input y select
                // Crear select con ajax (parámetro el año).

                $.get("includes/categorias.php?" + new Date().getTime(), {
                    ano: $(this).find("option:selected").val(),
                    lng: $("#lang").val()
                }, function(data) {
                    $("#categoria").html(data);
                });
                if ($(this).find("option:selected").val() === "todos"
                        || $(this).find("option:selected").val() === "1990"
                        || $(this).find("option:selected").val() === "1991"
                        || $(this).find("option:selected").val() === "1992"
                        || $(this).find("option:selected").val() === "1993"
                        || $(this).find("option:selected").val() === "1994"
                        || $(this).find("option:selected").val() === "1995"
                        || $(this).find("option:selected").val() === "1996"
                        || $(this).find("option:selected").val() === "1997"
                        || $(this).find("option:selected").val() === "1998") {
                    $("#categoria").attr("disabled", "disabled");
                } else {
                    $("#categoria").removeAttr('disabled');
                }
            });
};

Bss.lang = Bss.lang || {};

Bss.lang.lang_menu_show_hide = function() {
    $('ul.idiomas span').on('click', function() {
        $('ul.idiomas ul').slideToggle();
    });
};

window.onload = function() {
    'use strict';
    Bss.lang.lang_menu_show_hide();
    Bss.tools.show_byname_form_on_click();
    Bss.tools.inicialize_footables();
    Bss.tools.cargar_categorias();
    Bss.tools.clean_search_form();

};

/*
 * JAVASCRIPT MEDIA-QUERIES
 */
enquire.register("screen and (max-width: 480px)", {
    match: function() {
        Bss.desktop = false;
        Bss.mobile = true;
        Bss.tools.restore_byname_form_on_desktop();
    },
    unmatch: function() {
        Bss.desktop = true;
        Bss.mobile = false;
        Bss.tools.restore_byname_form_on_desktop();
    }
});
enquire.register("screen and (min-width: 480px)", {
    match: function() {
        Bss.desktop = true;
        Bss.mobile = false;
        Bss.tools.restore_byname_form_on_desktop();
    },
    unmatch: function() {
        Bss.desktop = false;
        Bss.mobile = true;
        Bss.tools.restore_byname_form_on_desktop();
    }
});
