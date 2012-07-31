<?php
/**
 * Simple Web Scraper
 * 
 * Simple web scraper that get the content from another website using file_get_contents() 
 * function in PHP. Combined with jQuery to create seamless AJAX request.
 * 
 * @author BTA
 * @version 0.1
 * @copyright MIT
 */

$url = curPageURL();
$action = strstr($url, 'token=');
if(!empty($action)) {
    echo file_get_contents('http://www.pfeiffer-vacuum.com/ajax/productselector.action?'.$action);
}
else {
    echo file_get_contents('http://www.pfeiffer-vacuum.com/ajax/productselector.action?preallocateString=&showResults=true&productDetails=Market+segment%7CResearch+%26+Development&productDetails=&productDetails=&productDetails=&productDetails=');
}

function curPageURL() {
    $pageURL = 'http';
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
	$pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . $_SERVER["REQUEST_URI"];
    } else {
	$pageURL .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
    }
    return $pageURL;
}
?>