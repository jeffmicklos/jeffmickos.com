<?php

if($_POST['action'] == 'contact') {
	
	if($_POST['name'] != '' && $_POST['email'] != '') {
		$content=$_POST['name'].' has sent you an email! Check it out...<br /><br />'.$_GET['comment'].'<br /><br />'.
		'You can contact them at '.$_POST['email'];
		mail('jeffmicklos@gmail.com',"someone wants you!",$content,'Content-type:text/html');
		echo "Thanks, I will get back to you soon!";
	} else {
		echo '0';
	}

} else {
	echo '-1';
}

?>