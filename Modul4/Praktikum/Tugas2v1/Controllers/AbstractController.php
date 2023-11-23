<?php

namespace Controller;

abstract class AbstractController
{
    abstract public function getAttribute($function, $method);
    var $controllerName;
    var $fucntionName;
    var $HTTPMenthod;
}