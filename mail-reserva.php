<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content=""/>
    <meta name="description" content=""/>
    <meta property="og:title" content=""/>
    <meta property="og:description" content=""/>

    <meta property="og:type" content="company"/>
    <meta property="og:url" content=""/>
    <meta property="og:site_name" content="SKY"/>
    <title>SKY</title>

    <style>
        body{
            padding: 0;
            margin: 0;
        }
        .body{
            background-color: #F1F1F1;
        }
        .wrapper{
            width: 600px;
            max-width: 100%;
        }
        .t-center{
            text-align: center;
        }
        .t-right{
            text-align: right;
        }
        .m-auto{
            margin: 0 auto;
        }
        .mt-0{
            margin-top: 0;
        }
        .mb-0{
            margin-bottom: 0;
        }
        .mb-8{
            margin-bottom: 8px;
        }
        .mb-12{
            margin-bottom: 12px;
        }
        .mb-15{
            margin-bottom: 15px;
        }
        .mb-20{
            margin-bottom: 20px;
        }
        .mb-24{
            margin-bottom: 24px;
        }
        .pt-36{
            padding-top: 36px;
        }
        .pb-24{
            padding-bottom: 24px;
        }
        .fw-400{
            font-weight: 400;
        }
        .fw-700{
            font-weight: 700;
        }
        .c-grey{
            color: #525252;
        }
        .c-purple{
            color: #781878;
        }
        .c-pink{
            color: #D9008A;
        }
        .f-arial{
            font-family: 'Arial';
        }
        .hr{
            border: none;
            max-width: 100%;
            border-top: 1px solid #F1F1F1;
        }
        .card{
            font-family: 'Arial';
            display: block;
            padding: 24px 20px;
            background-color: #fff;
            border-radius: 5px;
        }
        .card-block{
            background: rgba(120, 24, 120, 0.05); 
            padding: 12px;
        }
        .title{
            font-size: 23px; 
            line-height: 26px;
        }
        .subtitle{
            font-size: 20px;
            line-height: 26px;
        }
        .text16{
            font-size: 16px;
            line-height: 18px;
        }
        .text{
            font-size: 18px;
            line-height: 21px;
        }
        .small{
            font-size: 13px;
            line-height: 15px;
        }
        .smaller{
            font-size: 12px;
            line-height: 15px;
        }
        .button{
            padding: 10px;
            border-radius: 5px;
            background: #FC199A; 
            color: #fff;
            text-decoration: none;
            border: none;
            text-align: center;
            display: inline-block;
        }
        .card-table{
            background-color: #f1f1f1;
            padding: 16px;
        }
        .table{
            width: 100%;
        }
        .table td{
            padding: 4px 0;
            vertical-align: top;
        }
        .td-smaller{
            width: 30px;
        }
        .td-small{
            width: 60px;
        }
        .m-auto td{
            padding: 0 4px;
        }
        .table-total{
            width: 100%;
            background-color: #fdf2f9;
        }
        .table-total td{
            padding: 10px 12px;
        }
        .legal{
            padding-left: 20px;
            padding-right: 20px;
        }
        .footer img, .logo{
            width: 100%;
        }
    </style>
</head>

<body class="transition">

<div class="body">
    <div class="wrapper pt-36">
        <div class="card mb-20">
            <img src="dist/img/sky-logo.png" alt="SKY" class="logo">
            <hr class="hr mb-24">
            <h2 class="title c-purple fw-700 mb-12 mt-0">
                Hola, ${visitor.firstname}!
            </h2>
            <h3 class="subtitle c-grey fw-700 mb-0 mt-0">
                Has generado una reserva con nosotros
            </h3>
        </div>
        <div class="card mb-20">
            <p class="text mt-0 mb-20 c-grey">
                Datos de la reserva
            </p>
            <h3 class="text fw-700 c-purple mt-0 mb-8">
                Nombre: ${visitor.firstname} ${action.lastname}
            </h3>
            <h3 class="text fw-700 c-purple mt-0 mb-24">
                Código de reserva activa: ${action.pnr_reserva}
            </h3>
            <hr class="hr mb-20 mt-0">
            <p class="text mt-0 mb-20 c-grey">
                Itinerario
            </p>
            <div class="card-table mb-12">
                <p class="text16 c-grey mt-0 mb-12">
                    Vuelo Ida: <span class="fw-700">Martes 3 de Octubre</span>
                </p>
                <table class="table">
                    <tr>
                        <td class="text16 c-purple td-smaller">
                            <img src="dist/img/mail-circle1.png" alt="O">
                        </td>
                        <td class="text16 c-purple td-small">
                            19:20
                        </td>
                        <td class="text16 c-purple fw-700">
                            Santiago
                        </td>
                    </tr>
                    <tr>
                        <td class="text16 c-purple td-smaller">
                            <img src="dist/img/mail-line.png" alt="V">
                        </td>
                        <td class="text16 c-purple td-small">
                        </td>
                        <td class="small c-grey">
                            Duración del viaje: 2 h
                        </td>
                    </tr>
                    <tr>
                        <td class="text16 c-purple td-smaller">
                            <img src="dist/img/mail-circle2.png" alt="D">
                        </td>
                        <td class="text16 c-purple td-small">
                            21:20
                        </td>
                        <td class="text16 c-purple fw-700">
                            Buenos Aires Aeroparque
                        </td>
                    </tr>
                </table>
            </div>
            <div class="card-table mb-12">
                <p class="text16 c-grey mt-0 mb-12">
                    Vuelo Vuelta: <span class="fw-700">Martes 3 de Octubre</span>
                </p>
                <table class="table">
                    <tr>
                        <td class="text16 c-purple td-smaller">
                            <img src="dist/img/mail-circle1.png" alt="0">
                        </td>
                        <td class="text16 c-purple td-small">
                            19:20
                        </td>
                        <td class="text16 c-purple fw-700">
                            Buenos Aires Aeroparque
                        </td>
                    </tr>
                    <tr>
                        <td class="text16 c-purple td-smaller">
                            <img src="dist/img/mail-line.png" alt="V">
                        </td>
                        <td class="text16 c-purple td-small">
                        </td>
                        <td class="small c-grey">
                            Duración del viaje: 2 h
                        </td>
                    </tr>
                    <tr>
                        <td class="text16 c-purple td-smaller">
                            <img src="dist/img/mail-circle1.png" alt="D">
                        </td>
                        <td class="text16 c-purple td-small">
                            21:20
                        </td>
                        <td class="text16 c-purple fw-700">
                            Santiago
                        </td>
                    </tr>
                </table>
            </div>
            <table class="table-total mb-24">
                <tr>
                    <td class="subtitle c-pink fw-700">
                        Total:
                    </td>
                    <td class="subtitle t-right c-pink fw-700">
                        $1.000.000
                    </td>
                </tr>
            </table>
            <hr class="hr mb-24 mt-0">
            <p class="small t-center mt-0 mb-8 c-pink fw-700">
                Realizaste la reserva el 25/07/2023 a las 09:00 hrs.
            </p>
            <h3 class="fw-700 c-grey text16 mt-0 mb-24 t-center">
                ¡No pierdas esta tarifa y completa el pago!
            </h3>
            <div class="t-center">
                <a href="" class="button text mb-24">
                    Revisar y pagar
                </a>
            </div>
            <p class="smaller mt-0 t-center c-grey mt-0 mb-20 fw-700">
                Tienes hasta las 18:00 hrs. del día 27/07/2023 para concretar tu reserva con el precio seleccionado. 
            </p>
            <p class="smaller mt-0 t-center c-grey mt-0 mb-0">
                De lo contrario, la reserva expirará, y deberás repetir el proceso nuevamente, con la posibilidad de que el precio sufra modificaciones.
            </p>
        </div>
        <div class="card mb-20">
            <div class="mb-15">
                <table class="m-auto">
                    <tr>
                        <td>
                            <img src="dist/img/mail-info.png" alt="Info">
                        </td>
                        <td>
                            <h3 class="text16 c-purple fw-700 mb-0 mt-0 t-center">
                                No olvides que:
                            </h3>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="card-block">
                <p class="smaller c-purple mt-0 t-center fw-700 mb-8">
                    Si ya realizaste el pago de tu reserva omite este mensaje. Este email no corresponde al comprobante de compra y no tiene validez como tal.
                </p>
                <p class="smaller c-purple mt-0 t-center mb-0">
                    Una vez realizado el pago recibirás un email con la confirmación de la compra.
                </p>
            </div>
        </div>
        <div class="card mb-20">
            <p class="smaller c-purple mt-0 fw-700 mb-8 t-center">
                Si tuviste algún problema con el pago, puedes retomar tu compra con validez hasta , tiempo durante el cual mantendremos la tarifa de la reserva generada.
            </p>
            <p class="smaller c-grey mt-0 fw-700 mb-12 t-center">
                Reserva válida hasta las 18:00 hrs. del día 27/07/2023.
            </p>
            <div class="t-center">
                <a href="" class="button text mb-24">
                    Ir al pago
                </a>
            </div>
            <hr class="hr mb-24 mt-0">
            <p class="smaller c-grey t-center mt-0 mb-0">
                Si tu pago seleccionado es mediante <span class="fw-700">Banco Estado</span> (presencial o transferencia bancaria) deberás seguir las instrucciones enviadas a tu e-mail.
            </p>
        </div>
        <div class="footer mb-20">
            <img src="dist/img/footer.png" alt="Footer">
        </div>
        <p class="mt-0 pb-24 t-center c-grey smaller f-arial legal">
            El total de tu compra se podría visualizar en dólares pero la compra se realizará en moneda local.
        </p>
    </div>
</div>
    
</body>

</html>