<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Rosy Toys</title>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script>
        window.asset = path => `{{ asset('') }}${path}`;
    </script>
</head>

<body>
    <div id="app-modals" class="w-full absolute flex justify-center"></div>
    <div id="app">
    </div>
</body>

</html>
