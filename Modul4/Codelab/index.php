<?php

 include "Controllers/ProductController.php";

use Controller\ProductController;

$productController = new ProductController;

echo $productController -> getAllProduct();

// Run in directory /Praktikum_Web-5A/Modul4/Codelab
// php -S localhost:8888 index.php