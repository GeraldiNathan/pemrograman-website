<?php

namespace Controller;

include "Controllers/Controller.php";
include "Traits/ResponseFormat.php";

use Traits\responseFormat;

class BioController extends Controller
{
    use responseFormat;
    public function __construct()
    {
        $this->controllerName = "Biodata Komdat Acimulaka";
    }

    public function dataDummy()
    {
        $dummyData = [
            ["Name" => "Rizky Haksono", "Asal" => "Bali", "Title" => "Jomok"],
            ["Name" => "Iqbal", "Asal" => "Karangploso", "Title" => "Jomok"],
            ["Name" => "YoviYovi47", "Asal" => "Sawojajar", "Title" => "Jomok"],
            ["Name" => "Rapli", "Asal" => "Kalimantan", "Title" => "Jomok"],
            ["Name" => "JOdy", "Asal" => "Tulung Agung", "Title" => "Jomok"],
        ];
        return $dummyData;
    }
    public function getAllBiodata()
    {
        $data = $this->dataDummy();
        $response = [
            "controller_attribute " => $this->getAttribute("GetAllBiodata", "GET"),
            "Biodata" => $data
        ];
        return $this->responseFormat(200, "Success", $response);
    }
    // public function getDrama($index)
    // {
    //     $data = $this->dataDummy();
    //     $response = [
    //         "controller_attribute " => $this->getAttribute("GetDramaByID", "GET"),
    //         "drama" => "No Data Recieved"
    //     ];
    //     if ($index <= count($data)) {
    //         $response["drama"] = $data[$index - 1];
    //         return $this->responseFormat(200, "Success", $response);
    //     } else {
    //         return $this->responseFormat(400, "Failed", $response);
    //     }
    // }
}