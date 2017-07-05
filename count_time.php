<?php

$saved_date = file_get_contents('time.txt');

if (  strtotime("now") >= strtotime($saved_date) )
{
	$str_newDate = strtotime("+4 days");
	$newDate = date("Y/m/d" , $str_newDate);
	file_put_contents('time.txt', $newDate);
	echo $newDate;
}
else
{
	echo $saved_date;
}

