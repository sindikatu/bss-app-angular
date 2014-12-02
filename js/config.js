var Bss = Bss || {};

Bss.config = Bss.config || {};

/*Bss.config.URL_DSP = 'dsp-anahernandez.cloud.dreamfactory.com/';
Bss.config.DAME_CLASIFICACIONES = 'https://' + Bss.config.URL_DSP + 'rest/sql/historico_clasificaciones?app_name=bssApp';*/


Bss.config.DAME_CLASIFICACIONES = 'api/api.php/';


Bss.config.idiomasPorDefecto = 'es';
Bss.config.idiomasApp = ['es', 'eu', 'en', 'fr'];

Bss.config.DAME_CATEGORIAS_ANO_OFICIAL = 'modules/categoriasPorAnoOficial.json';
Bss.config.DAME_CATEGORIAS_ANO_DISCAPACIDAD = 'modules/categoriasPorAnoDiscapacitados.json';
Bss.config.DAME_CATEGORIAS_ANO_ROLLERS = 'modules/categoriasPorAnoRollers.json';

Bss.config.CLASIFICACIONES = 'modules/mocks/clasificaciones.json';

//Fecha de actualización de la clasificación
Bss.config.FECHA_ULTIMA_ACTUALIZACION_ES = '10-11-2013 15:10';
Bss.config.FECHA_ULTIMA_ACTUALIZACION_EU = '2013-11-10 15:10';
Bss.config.FECHA_ULTIMA_ACTUALIZACION_EN = '2013-11-10 15:10';
Bss.config.FECHA_ULTIMA_ACTUALIZACION_FR = '10-11-2013 15:10';

//campos del formulario por cada tipo
//oficial

Bss.config.oficialAnos = [2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,'todos'];
Bss.config.oficialCategorias = [];
Bss.config.oficialCategorias[2013] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO','VETERANA','VETERANO II','VETERANA II','VETERANO III','VETERANA III','VETERANO IV','VETERANA IV','INVIDENTES M','INVIDENTES F','DISCAPACITADOS','APOYO DISCAPACITADO'];
Bss.config.oficialCategorias[2012] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO','VETERANA','VETERANO II','VETERANA II','VETERANO III','VETERANA III','VETERANO IV','VETERANA IV','INVIDENTES M','INVIDENTES F','DISCAPACITADOS','APOYO DISCAPACITADO'];
Bss.config.oficialCategorias[2011] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO','VETERANA','VETERANO II','VETERANA II','VETERANO III','VETERANA III','VETERANO IV','VETERANA IV','INVIDENTES M','INVIDENTES F','DISCAPACITADOS','APOYO DISCAPACITADO'];
Bss.config.oficialCategorias[2010] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO','VETERANA','VETERANO II','VETERANA II','VETERANO III','VETERANA III','INVIDENTES M','INVIDENTES F','DISCAPACITADOS','APOYO DISCAPACITADO'];
Bss.config.oficialCategorias[2009] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO I','VETERANA I','VETERANO II','VETERANA II','VETERANO III','INVIDENTES M','INVIDENTES F','DISCAPACITADOS','APOYO DISCAPACITADO','ERR CATEG MAS'];
Bss.config.oficialCategorias[2008] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO','VETERANA','VETERANO II','VETERANA II','INVIDENTES M','INVIDENTES F','INVIDENTES FEM','MINUSVALIDOS','APOYO DISCAPACITADO'];
Bss.config.oficialCategorias[2007] = ['JUNIOR M','JUNIOR F','PROMESA M','PROMESA F','SENIOR M','SENIOR F','VETERANO','VETERANA','VETERANO M','VETERANO II','VETERANA II','INVIDENTES','INVIDENTES','INVIDENTES FEM','MINUSVALIDOS','ERR CATEG MAS'];
Bss.config.oficialCategorias[2006] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANA','VETERANO 2'];
Bss.config.oficialCategorias[2005] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANA','VETERANO 2'];
Bss.config.oficialCategorias[2004] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANA','VETERANO 2'];
Bss.config.oficialCategorias[2003] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANA'];
Bss.config.oficialCategorias[2002] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANA','VETERANO 2'];
Bss.config.oficialCategorias[2001] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[2000] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1999] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1998] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1997] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1996] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1995] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1994] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1993] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1992] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1991] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];
Bss.config.oficialCategorias[1990] = ['JUNIOR','PROMESA','SENIOR','VETERANO','VETERANO 2'];


///discapacitados
Bss.config.discapacitadosAnos = [2013,2012,2011,'todos'];
Bss.config.discapacitadosCategorias =[];
Bss.config.discapacitadosCategorias[2013]=['SILLA DE RUEDAS','HANDBIKE','DISCAPACIDAD VISUAL','DISCAPACIDAD MOTRIZ A PIE','DISCAPACIDAD LESION CEREBRAL'];
Bss.config.discapacitadosCategorias[2012]=['SILLA DE RUEDAS','HANDBIKE','DISCAPACIDAD VISUAL','DISCAPACIDAD MOTRIZ A PIE','DISCAPACIDAD LESION CEREBRAL'];
Bss.config.discapacitadosCategorias[2011]=['SILLA DE RUEDAS','HANDBIKE','DISCAPACIDAD VISUAL','DISCAPACIDAD MOTRIZ A PIE','DISCAPACIDAD LESION CEREBRAL'];
//rollers
Bss.config.rollersAnos = [2013,2012,2011,2010,'todos'];
Bss.config.rollersCategorias =[];
Bss.config.rollersCategorias[2013] =[];
Bss.config.rollersCategorias[2012] =[];
Bss.config.rollersCategorias[2011] =[];
Bss.config.rollersCategorias[2010] =[];
