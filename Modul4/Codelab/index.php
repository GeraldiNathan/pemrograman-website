<?php

// "/Kuliah/Semester-5/Web-5A/Praktikum_Web-5A/Modul4/Codelab/Controllers/ProductController.php";
 include "Controllers/ProductController.php";

use Controller\ProductController;

$productController = new ProductController;

echo $productController -> getAllProduct();