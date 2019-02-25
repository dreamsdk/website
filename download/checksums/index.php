<?php 		
	$filename = "../release.txt";
	$handle = fopen($filename, "r");
	$release = fread($handle, filesize($filename));
	fclose($handle);	
	header("Location: http://dreamsdk.sizious.com/DreamSDK-R$release-Checksums.txt");	
?>
