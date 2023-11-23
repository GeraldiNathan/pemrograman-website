<?php

namespace Biodata;

class Jomok extends Person {
    use TitleTrait;

    public function __construct($name, $asal) {
        $this->name = $name;
        $this->asal = $asal;
        $this->setTitle("Jomok");
    }

    public function introduce() {
        return [
            "Name" => $this->name,
            "Asal" => $this->asal,
            "Title" => $this->getTitle()
        ];
    }
}
