<?php

namespace app\Controller;

// include "app/Traits/ApiResponseFormatter.php";
// include "app/Models/Product.php";

include "/xampp/htdocs/modul4Web/codelab/app/Models/Product.php";
include "/xampp/htdocs/modul4Web/codelab/app/Traits/ApiResponseFormatter.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController
{
    use ApiResponseFormatter;
    public function index()
    {
        $productModel = new Product();
        $response = $productModel->findAll();
        return $this->apiResponse(200, "success", $response);
    }

    public function getById($id)
    {
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "success", $response);
    }

    public function insert()
    {
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData["product_name"],
            "id_description" => $inputData["id_description"],
            // "price" => $inputData["price"]
        ]);
        return $this->apiResponse(200, "success", $response);
    }

    // public function insert()
    // {
    //     $jsonInput = file_get_contents("php://input");
    //     $inputData = json_decode($jsonInput, true);

    //     // Tambahkan log untuk melihat masukan
    //     error_log("Received JSON Input: " . print_r($inputData, true));

    //     if (json_last_error()) {
    //         return $this->apiResponse(400, "error invalid input", null);
    //     }

    //     $productModel = new Product();
    //     $response = $productModel->create([
    //         "product_name" => $inputData["product_name"],
    //         "price" => $inputData["price"],
    //         "expired_at" => $inputData["expired_at"],
    //     ]);

    //     return $this->apiResponse(200, "success", $response);
    // }


    public function update($id)
    {
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->update(["product_name" => $inputData["product_name"]], $id);
        return $this->apiResponse(200, "success", $response);
    }
    public function delete($id)
    {
        $productModel = new Product();
        $response = $productModel->delete($id);
        return $this->apiResponse(200, "success", $response);
    }
}
