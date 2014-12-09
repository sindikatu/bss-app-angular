<?php

function obtenerDeportistas() {
    $data = json_decode(file_get_contents("php://input"));
  
  $filtro = '';

  if (isset($data) && isset($data->filter)) {
    $filtro = $data->filter;
  }  

    // LOCAL
    /*$server = 'localhost';
    $user = 'root';
    $pwd = '';
    $name = 'ins_bss';*/

    // REAL
    
    $server = '154.58.200.173';
    $user = 'www131';
    $pwd = 'Aqu7Nmb5vP';
    $name = 'www131';
    

    // ADIMEDIA.NET (IP=82.194.91.28)
    
    /*$server = '82.194.91.28'; //localhost
    $user = 'bssapp';
    $pwd = 'kA#6l7u1';
    $name = 'bssapp';*/
    

    // Abrimos la conexion a la Base de Datos
    $conn = mysql_pconnect($server,$user,$pwd);

    if ($conn) {
        // Seleccionamos la base de datos
        $seleccionBaseDeDatos = mysql_select_db($name,$conn);

        if ($seleccionBaseDeDatos) {

            $sql = "SELECT * FROM historico_clasificaciones WHERE visible = '1' ";

            if ($filtro != "") {
                $sql .= "and " . $filtro;
            }

        $sql .= " ORDER BY ano DESC, nombre ASC";
            
            //Ejecutamos la consulta
            $result = mysql_query($sql);
        $numeroResultados = mysql_num_rows($result);

            if (!$result) {
                $listado_corredores = '[]';
                
        } else {
            $listado_corredores = '[';
                $i = 0;
                while($row = mysql_fetch_array($result) ){
                $corredor = '{';
                $corredor .= '"id_historico":"' . trim($row["id_historico"]) . '",';
                $corredor .= '"ano":"' . trim($row["ano"]) . '",';
                $corredor .= '"clas_general":"' . trim($row["clas_general"]) . '",';
                $corredor .= '"nombre":"' . utf8_encode(trim($row["nombre"])) . '",';
                $corredor .= '"apellidos":"' . utf8_encode(trim($row["apellidos"])) .'",';
                $corredor .= '"tiempo_real":"' . trim($row["tiempo_real"]) .'",';
                $corredor .= '"dorsal":"' . trim($row["dorsal"]) . '",';
                $corredor .= '"categoria":"' . utf8_encode(trim($row["categoria"])) .'",';
                $corredor .= '"clas_categoria":"' . trim($row["clas_categoria"]) .'",';
                $corredor .= '"localidad":"' . utf8_encode(trim($row["localidad"])) . '",';
                $corredor .= '"hora_salida":"' . trim($row["hora_salida"]) .'",';
                $corredor .= '"posicion_salida":"' . trim($row["posicion_salida"]) .'",';
                $corredor .= '"tiempo_parcial1":"' . trim($row["tiempo_parcial1"]) .'",';
                $corredor .= '"posicion_parcial1":"' . trim($row["posicion_parcial1"]) .'",';
                $corredor .= '"tiempo_parcial2":"' . trim($row["tiempo_parcial2"]) .'",';
                $corredor .= '"posicion_parcial2":"' . trim($row["posicion_parcial2"]) .'",';
                $corredor .= '"tiempo_parcial3":"' . trim($row["tiempo_parcial3"]) .'",';
                $corredor .= '"posicion_parcial3":"' . trim($row["posicion_parcial3"]) .'"';

                $i++;
                
                if ($i == $numeroResultados) {
                    $corredor .= '}';
                } else {
                    $corredor .= '},';
                } 

                   $listado_corredores .= $corredor;
                }
            $listado_corredores .= ']';
                // Liberamos memoria
                mysql_free_result($result);             
            }


            mysql_close($conn);
        }       

    } else {
        $listado_corredores = '[]';
    } 
    
    header('Content-Type: application/json');
    header('AllowedOrigin: *');
    header('AllowedMethod: POST, GET');

    return $listado_corredores;
}

  exit(obtenerDeportistas());

?>