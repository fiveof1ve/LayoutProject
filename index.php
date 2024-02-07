<?php

//$name = 'Alexandr';
//$age = 25;
//$isMarried = false;

//echo $name . "\n"; Новая строка
//echo $age . "\n";
//echo $isMarried . "\n";

$person = [
    'name' => 'Alexandr',
    'age' => 25,
    'is_married' => false
];

$person['pet'] = 'cat'; //Добавление нового элемента массива
//unset($person['age']); Удаление элемента массива
//print_r($person); Вывод данных из переменной

foreach ($person as $key => $item) {
    echo $key . ': ';
    echo $item . "\n";
}


