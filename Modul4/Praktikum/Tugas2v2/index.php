<?php

use Biodata\BiodataKomdat;

require_once 'TitleTrait.php';
require_once 'Person.php';
require_once 'Jomok.php';
require_once 'BiodataKomdat.php';


// Output Biodata
$biodataList = BiodataKomdat::generateBiodata();
$output = ["Biodata" => []];

foreach ($biodataList as $biodata) {
    $output["Biodata"][] = $biodata->introduce();
}

echo json_encode($output, JSON_PRETTY_PRINT);
