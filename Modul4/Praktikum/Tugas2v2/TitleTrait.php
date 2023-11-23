<?php

namespace Biodata;

trait TitleTrait {
    public $title;

    public function setTitle($title) {
        $this->title = $title;
    }

    public function getTitle() {
        return $this->title;
    }
}
