<?php

file_get_contents(HTTPS_CATALOG.'vqmod/install/index.php');
file_get_contents(HTTPS_CATALOG);
$root = substr_replace(DIR_SYSTEM, '/', -8);
chmod( $root . "vqmod/vqcache", 0755);