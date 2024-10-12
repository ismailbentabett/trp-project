<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Primary Meta Tags -->
<meta name="title" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
<meta name="description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
<meta property="og:description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
<meta property="twitter:description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
<meta property="og:type" content="business.business">
<meta property="og:title" content="Trp - Télécom Radio Professionnel Motorola Solutions ">
<meta property="og:url" content="https://trp-france.fr/">
<meta property="og:image" content="https://trp-algeria.com/wp-content/uploads/2021/08/logo-motorola-1.png">
<meta property="og:description" content="EURL Télécom Radio Professionnel Motorola Solutions ">
<meta property="business:contact_data:street_address" content="">
<meta property="business:contact_data:locality" content="">
<meta property="business:contact_data:region" content="">
<meta property="business:contact_data:country_name" content="France">

<!-- Meta Tags Generated with https://metatags.io -->
    <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.20.0/dist/algoliasearch-lite.umd.js"
        integrity="sha256-DABVk+hYj0mdUzo+7ViJC6cwLahQIejFvC+my2M/wfM=" crossorigin="anonymous"></script>

    <!-- For Vue 3: -->
    <script src="https://cdn.jsdelivr.net/npm/vue-instantsearch@4.10.11/vue3/umd/index.js"
        integrity="sha256-GtoVqj10iAyU1NS0QV/SvDBVud8j0tPxsSW2umw1uz0=" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />

    <title inertia>{{ config('app.name', 'Laravel') }}</title>



    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />

    <!-- Favicon -->
    <link rel="favicon" type="image/x-icon" href="https://s3.eu-north-1.amazonaws.com/trp-upload-bucket/favicon/favicon.ico" />
    <link rel="icon" href="https://s3.eu-north-1.amazonaws.com/trp-upload-bucket/favicon/favicon.ico">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
