<?php
$sampleID = $_GET['sampleID'];
$organism = $_GET['organism'];
$id = $_GET['sessionid'];

//Get info for mysql server
$str = file_get_contents('mysql/mysql_info.json');
$json = json_decode($str, true);
$host = $json['host'];
$port = $json['port'];
$user = $json['user'];
$passwd = $json['passwd'];
$unix_socket = $json['unix_socket'];
?>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title></title>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        
        <!-- Vis CSS -->
        <link href='css/App.css' rel='stylesheet' type='text/css'>
    </head>
    
    <body>
<div class="container main">
    
    
    <div class="row">
        
        <div class="col-md-3">
            
            <div class="row">
            
                <div class="col-md-12 title" style="margin-top:20px;">Find a Gene</div>
            
                <div class="col-md-12" style="margin-top:10px;">
                    <input type="text" class="form-control" placeholder="Search gene by name..." style="font-size:11px">
                    <ul class="list-group results"></ul>
                </div>


                <div class="col-md-12 miniTitle" style="margin-top:20px;">
                    Legend
                </div>

                <div class="col-md-6 legendText">
                    <strong>Color</strong> shows gene regulation
                </div>

                <div class="col-md-6">
                    <svg width="120" height="40">
                        <rect x="0" y="10" width="38" height="7" fill="#2171b5"></rect>
                        <rect x="38" y="10" width="38" height="7" fill="#BECCAE"></rect>
                        <rect x="76" y="10" width="38" height="7" fill="#C72D0A"></rect>

                        <text x="10" y="26" class="legendText">Up</text>
                        <text x="44" y="26" class="legendText">None</text>
                        <text x="80" y="26" class="legendText">Down</text>
                    </svg>
                </div>

                <div class="col-md-6 legendText" style="padding-right:0px">
                    <strong>Dark Borders</strong> show mutations
                </div>

                <div class="col-md-6 legendText">
                    <svg width="120" height="40">
                        <circle cx="58" cy="20" fill="none" r="18" stroke-width="1.2" stroke="#2c3e50"></circle>
                    </svg>
                </div>

                <div class="col-md-6 legendText">
                    <strong>Size</strong> shows Log2 fold change
                </div>

                <div class="col-md-6 legendText">
                    <svg width="120" height="40">
                        <circle cx="58" cy="20" style="stroke-dasharray: 2 2" fill="none" r="18" stroke-width="1" stroke="#5f6062"></circle>
                        <circle cx="58" cy="31" style="stroke-dasharray: 2 2" fill="none" r="6" stroke-width="1" stroke="#5f6062"></circle>
                    </svg>
                </div>

                <div class="col-md-12">
                    <hr>
                </div>
            
            </div>
            
            
            <div class="row tip" style="margin-top:20px;">
            </div>
            
            
        </div>
        
        <div class="col-md-9">
            <div id="loadingvis"></div>
            <div id="vis" class="vis"></div>
        </div> 
    </div>
    
</div>
    
    
    
    </body>
    <!-- App Script  -->
    <script host="<?php echo $host; ?>" port="<?php echo $port; ?>" user="<?php echo $user; ?>" passwd="<?php echo $passwd; ?>" unix_socket="<?php echo $unix_socket; ?>" src="js/AppInteractome.js"></script>
    <script>
        
        
        
        App.init("Human");
    </script>
</html>
<?php
$id = NULL;
?>