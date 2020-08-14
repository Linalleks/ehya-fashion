<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование самого письма
$title = "Новый запрос на подписку Ehya Fashion";
$body = "
<h2>Новый запрос на подписку</h2>
<b>Email:</b> $email
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'linalleks@yandex.ru'; // Логин на почте
    $mail->Password   = 'afynfpbz950623the'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('linalleks@yandex.ru', 'Ангелина Александровна'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('goncharovnikita713@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отправленность сообщения
if ($mail->send()) {
    $result = "success";
    header('location: thankyou.php');
}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


