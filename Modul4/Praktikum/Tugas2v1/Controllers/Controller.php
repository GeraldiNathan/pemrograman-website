<?php

namespace Controller;

include "Controllers/AbstractController.php";

class Controller extends AbstractController
{

    var $controllerName;
    var $controllerMethod;
    var $HTTPMenthod;


    public function getAttribute($controllerMethod, $HTTPMenthod)
    {
        return [
            "Praktikum Tugas 2" => $this->controllerName,
            "Function Name" => $controllerMethod,
            "HttP Method" => $HTTPMenthod,
        ];
    }
}