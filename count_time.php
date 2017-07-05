<?php

// file to save target date
$saved_date = file_get_contents('time.txt');

// $interval - interval in days to clear counter
$interval = 4;

if (  strtotime("now") >= strtotime($saved_date) )
{
	$str_newDate = strtotime("+".$interval." days");
	$newDate = date("Y/m/d" , $str_newDate);
	file_put_contents('time.txt', $newDate);
	echo $newDate;
}
else
{
	echo $saved_date;
}

