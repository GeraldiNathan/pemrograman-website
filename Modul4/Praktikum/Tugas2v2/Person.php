<?php

namespace Biodata;

abstract class Person {
    protected $name;
    protected $asal;

    abstract public function introduce();
}
