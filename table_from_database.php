<?php

    $con   = mysql_connect('localhost', 'root', '');
    $db    = mysql_select_db('db_test', $con);
    $query = mysql_query("select * from tbl_job_register");
    while( $val   = mysql_fetch_assoc($query) ){
        echo "<table border='1'><tr>";
        foreach( $val as $v ){
            echo "<td>" . $v . "</td>";
        }
        echo "</tr></table>";
    }
?>