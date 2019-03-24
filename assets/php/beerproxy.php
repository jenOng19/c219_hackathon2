<?php
//questions?  Ask Dan Paschal daniel.paschal@learningfuze.com
// TODO Will want to change the path in the URL to not just be beer
$proxyURL = "https://sandbox-api.brewerydb.com/v2/beers/?key=2c1a5a0a55c37ba5453a15b82ad0e59f";
//$proxyURL = "https://api.fortnitetracker.com/v1/profile/{$_GET['platform']}/{$_GET['player']}";

header("Access-Control-Allow-Origin: *");

$headers = apache_request_headers();

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "$proxyURL&name=" . $_GET['name'],
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET"
));
$response = curl_exec($curl);
$err = curl_error($curl);
echo $err;
echo $response;
?>