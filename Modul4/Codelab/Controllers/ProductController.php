<?php

namespace Controller;

// include "/Kuliah/Semester-5/Web-5A/Praktikum_Web-5A/Modul4/Codelab/Traits/ResponsiveFormatter.php";
// include "/Kuliah/Semester-5/Web-5A/Praktikum_Web-5A/Modul4/Codelab/Controllers/Controller.php";

include "Traits/ResponseFormatter.php";
include "Controllers/Controller.php";

use Traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construct(){
        $this->controllerName = "Get All Product";
        $this->controllerMethod = "GET";
    }

    public function getAllProduct(){
        // Array Dummy Data
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this->responseFormatter(200, "Succes", $response);
    }
};