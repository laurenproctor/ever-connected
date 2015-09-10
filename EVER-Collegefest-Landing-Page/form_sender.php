<?php

$to = "hell@yourmail.com";
$from = $_POST['email'];

$headers = "From: " . $from . "\r\n";

'Reply-To: '.$from."\r\n" .

$subject = "E-Mail From The Website";
$name = "" . $_POST['name'];


/* Let's prepare the message for the e-mail */
$body = "$to has been subscribe to your mailing list.



You can reply to this email for respond to the subscriber.

";

/* Send the message using mail() function */





if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
{
	if (mail($to, $subject, $body, $headers, "Name of the Contact" . $from))
	{
		echo 'Alright ! You will be notified on <b>  ' . $_POST['email'] . '</b> :)';
	}
	else
	{
	   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';
	}
}
else
{
   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';
}
