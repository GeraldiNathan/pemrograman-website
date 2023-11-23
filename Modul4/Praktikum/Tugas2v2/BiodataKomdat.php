<?php

namespace Biodata;

class BiodataKomdat {
    public static function generateBiodata() {
        $biodata = [];

        $biodata[] = new Jomok("Rizky Haksono", "Bali");
        $biodata[] = new Jomok("Iqbal", "Karangploso");
        $biodata[] = new Jomok("YoviYovi47", "Sawojajar");
        $biodata[] = new Jomok("Rapli", "Kalimantan");
        $biodata[] = new Jomok("JOdy", "Tulung Agung");

        return $biodata;
    }
}
