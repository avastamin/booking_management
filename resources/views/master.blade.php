<!DOCTYPE html>
<html ng-app="App">
<head>
    <title>Booking Management with FullCalendar</title>

    <link rel="stylesheet" type="text/css" href="{{ asset('css/all.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <script>
        var baseUrl = "{{ url('/') }}/";
        var csrfToken = "{{ csrf_token() }}";
    </script>
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Booking Management</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">GitHub</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<div class="container">
    <div ng-view></div>
</div>

<script type="text/javascript" src="{{url(elixir('js/all.js'))}}"></script>
<script type="text/javascript" src="{{url(elixir('js/app.js'))}}"></script>
<script type="text/javascript" src="{{url(elixir('js/models.js'))}}"></script>
<script type="text/javascript" src="{{url(elixir('js/controllers.js'))}}"></script>

</body>
</html>
