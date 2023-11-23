<?php
include("Controllers/BioController.php");

use Controller\BioController;

$BioController = new BioController();
echo $BioController->getAllBiodata();