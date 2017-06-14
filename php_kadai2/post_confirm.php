<?php
$data = $_POST["data"];
$file = fopen("data/data.csv","a");    // ファイル読み込み
flock($file, LOCK_EX);            // ファイルロック
fwrite($file, $data."\n");
flock($file, LOCK_UN);            // ファイルロック解除
fclose($file);
?>

