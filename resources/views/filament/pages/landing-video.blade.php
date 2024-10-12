<x-filament-panels::page>

    <head>

        <link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
        <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
            rel="stylesheet">
            <link href="
https://cdn.jsdelivr.net/npm/filepond-plugin-media-preview@1.0.11/dist/filepond-plugin-media-preview.min.css
" rel="stylesheet">
    </head>
    <div class="container">
        <h1>File Upload</h1>
        <input type="file" class="filepond" name="file" accept="video/mp4">

    </div>
    
    <script src="https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js"></script>
    <script src="https://unpkg.com/filepond/dist/filepond.js"></script>
    <script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
    <script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script src="
https://cdn.jsdelivr.net/npm/filepond-plugin-media-preview@1.0.11/dist/filepond-plugin-media-preview.min.js
"></script>
    <script>
        // Initialize FilePond
        FilePond.setOptions({
            server: {
                url: '{{ route('landing.video.store') }}', // Laravel route to handle file uploads
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }

            }
        });
        FilePond.registerPlugin(FilePondPluginImagePreview);
        FilePond.registerPlugin(FilePondPluginFileValidateType);
        FilePond.registerPlugin(FilePondPluginMediaPreview);

        const inputElement = document.querySelector('input[type="file"]', {
            acceptedFileTypes: ['video/mp4'],
            fileValidateTypeDetectType: (source, type) =>
                new Promise((resolve, reject) => {
                    // Do custom type detection here and return with promise

                    resolve(type);
                }),
        });
        const pond = FilePond.create(inputElement, {
            instantUpload: false, // Disable instant upload

        });
        //get .env video
        var VIDEOURL = '{{ env('APP_URL') }}' + '/storage/' + 'videos/landing.mp4';
        pond.addFile(VIDEOURL, {
            options: {
                type: 'local',
                file: {
                    name: '{{ env('VIDEOURL') }}',
                    
                }
            }

        });


        //initiate filepond

        document.getElementById('uploadButton').addEventListener('click', function () {
        pond.processFiles(); // This will start the upload process for selected files.
    });

    </script>

    <style>
        .filepond--root {
            background-color: #1e1e1e;
        }

        .filepond--drop-label {
            color: #fff;
        }

        .filepond--label-action {
            color: #fff;
        }

        .filepond--panel-root {
            background-color: #1e1e1e;
        }

        .filepond--item-panel {
            background-color: #1e1e1e;
        }

        .filepond--item-panel:hover {
            background-color: #1e1e1e;
        }

        .filepond--item-panel .filepond--item-info {
            color: #fff;
        }

        .filepond--item-panel .filepond--item-status-main {
            color: #fff;
        }

        .filepond--item-panel .filepond--item-status-sub {
            color: #fff;
        }

        .filepond--item-panel .filepond--item-status-error {
            color: #fff;
        }

        .filepond--item-panel .filepond--item-status-success {
            color: #fff;
        }

        .filepond--item-panel .filepond--item-progress {
            background-color: #fff;
        }

        .filepond--item-panel .filepond--item-progress .filepond--item-progress-bar {
            background-color: #fff;
        }

        .filepond--item-panel .filepond--item-progress .filepond--item-progress-status {
            color: #fff;
        }

        .filepond--item-panel .filepond--item-process-wrapper {
            background-color: #fff;
        }

        .filepond--item-panel .filepond--item-process-wrapper .filepond--item-process {
            background-color: #fff;
        }

        .filepond--item-panel .filepond--item-process-wrapper .filepond--item-process .filepond--item-process-status {
            color: #fff;
        }
    </style>
</x-filament-panels::page>
