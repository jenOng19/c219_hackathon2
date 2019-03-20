<?php
//questions?  Ask Dan Paschal daniel.paschal@learningfuze.com
$proxyURL = "https://api.yelp.com/v3/businesses/search";
//$proxyURL = "https://api.fortnitetracker.com/v1/profile/{$_GET['platform']}/{$_GET['player']}";

header("Access-Control-Allow-Origin: *");

$params = '';
foreach($_GET as $key=>$value){
        $params.=("&$key=".urlencode($value));
}
$API_KEY = "6nNnKyzCq0u6dHU-Ycir7C1yW7IAIO_WbX8Cw62pxosdj8Se4QJlmWIFgukCxLTkS3NtVxK3wZ8kwI-6iUyOuqm4TmL44pl29hOJRhzSBw6h5aF62wsfjxt3Z0KQXHYx";
$headers = apache_request_headers();

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "$proxyURL?$params",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
        'Authorization: Bearer ' . $API_KEY
  )
));
$response = curl_exec($curl);
$err = curl_error($curl);
echo $err;
echo $response;
?>