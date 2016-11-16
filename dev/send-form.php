<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправились ли наши поля name и phone и не пустые ли они
        $to = 'dreamflowersua@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов

        if(($_POST['formId']) == "form-order-bouquet") {
            $subject = 'Заказ букета';
        } //Заголовок сообщения
        if(($_POST['formId']) == "form-order-individual") {
            $subject = 'Заказ индивидуального букета';
        } //Заголовок сообщения
        if(($_POST['formId']) == "form-order-incognito") {
            $subject = 'Заказ услуги инкогнито';
        } //Заголовок сообщения
        if(($_POST['formId']) == "form-order-call") {
            $subject = 'Заказ звонка';
        } //Заголовок сообщения

        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: dream-flowers.com.ua\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>