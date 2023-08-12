<!DOCTYPE html>
<html lang="en">

<head>
  <title>Whatsapp</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/custom.css">
  <link rel="icon" type="image/png" href="img/favicon.png">
  <!-- Font Awesome File -->
  <link rel="stylesheet" href="css/font-awesome.css">
</head>

<body>

  <div class="container app">
    <div class="row app-one">

      <div class="col-sm-4 side">
        <div class="side-one">
          <!-- Heading -->
          <div class="row heading">
            <div class="col-sm-3 col-xs-3 heading-avatar">
              <div class="heading-avatar-icon">
                <img src="img/profile-pics/vegeta.jpg">
              </div>
            </div>
            <div class="col-sm-5 col-xs-5" style="padding:0;">
                <select id="slc-usuario" class="form-control">
                    
                </select>
            </div>
            <div class="col-sm-1 col-xs-1  heading-dot  pull-right">
              <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
            </div>

            <div class="col-sm-2 col-xs-2 heading-compose  pull-right">
              <!--Este es el icono que tienen que cambiar para agregar usuarios-->
              <i class="fa fa-comments fa-2x  pull-right" aria-hidden="true" data-toggle="modal" data-target="#modal-agregar-usuario"></i>
            </div>
          </div>
          <!-- Heading End -->

          <!-- SearchBox -->
          <div class="row searchBox">
            <div class="col-sm-12 searchBox-inner">
              <div class="form-group has-feedback">
                <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search">
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>

          <!-- Search Box End -->
          <!-- sideBar -->
          <div class="row sideBar" id="div-contactos">
            
            <!-- Inicio de la lista de conversaciones -->
            

            <!-- Fin de la lista de conversaciones -->

          </div>
          <!-- Sidebar End -->
        </div>
        <div class="side-two">

          <!-- Heading -->
          <div class="row newMessage-heading">
            <div class="row newMessage-main">
              <div class="col-sm-2 col-xs-2 newMessage-back">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
              <div class="col-sm-10 col-xs-10 newMessage-title">
                New Chat
              </div>
            </div>
          </div>
          <!-- Heading End -->

          <!-- ComposeBox -->
          <div class="row composeBox">
            <div class="col-sm-12 composeBox-inner">
              <div class="form-group has-feedback">
                <input id="composeText" type="text" class="form-control" name="searchText" placeholder="Search People">
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>
          <!-- ComposeBox End -->
        </div>
        <!-- Sidebar End -->
      </div>


      <!-- New Message Sidebar End -->

      <!-- Conversation Start -->
      <div class="col-sm-8 conversation">
        <!-- Heading -->
        <div class="row heading">
          <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
            <div class="heading-avatar-icon">
              <img src="" id="img-contacto">
            </div>
          </div>
          

          <div class="col-sm-8 col-xs-7 heading-name">
            <a class="heading-name-meta" id="nombre-contacto">
            </a>
            <input type="hidden" id="txt-receptor">
            <span class="heading-online">Online</span>
          </div>


          <div class="col-sm-1 col-xs-1  heading-dot pull-right">
            <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
          </div>
        </div>
        <!-- Heading End -->

        <!-- Message Box -->
        <div class="row message" id="div-conversacion">

          <!--div class="row message-previous">
            <div class="col-sm-12 previous">
            </div>
          </div-->

         
        </div>


        <!-- Message Box End -->

        <!-- Reply Box -->
        <div class="row reply">
          <div class="col-sm-1 col-xs-1 reply-emojis">
            <i class="fa fa-smile-o fa-2x"></i>
          </div>
          <div class="col-sm-9 col-xs-9 reply-main">
            <textarea class="form-control" rows="1" id="txta-mensaje"></textarea>
          </div>
          <div class="col-sm-1 col-xs-1 reply-recording">
            <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>

          </div>
          <div id="btn-enviar" class="col-sm-1 col-xs-1 reply-send">
            <i class="fa fa-send fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <!-- Reply Box End -->
      </div>
      <!-- Conversation End -->
    </div>
    <!-- App One End -->
  </div>


  <!-- Modal -->
  <div class="modal fade" id="modal-agregar-usuario" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Agregar Usuario</h4>
        </div>
        <div class="modal-body">
          CONTENIDO DEL FORMULARIO MODAL
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Guardar Usuario</button>
        </div>
      </div>
    </div>
  </div>
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/controlador.js"></script>
  <!-- App End -->
</body>

</html>