<?php 		
	$filename = "./release.txt";
	$handle = fopen($filename, "r");
	$release_filename = fread($handle, filesize($filename));
	fclose($handle);	
	header("Location: $release_filename");	
?>
