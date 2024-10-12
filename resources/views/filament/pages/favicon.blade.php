<x-filament-panels::page>

    <head>


        <link href="https://releases.transloadit.com/uppy/v3.18.0/uppy.min.css" rel="stylesheet">


        <div class="container">
            <div id="uppy"></div>


        </div>


        <script type="module">
            import {
                Uppy,
                Dashboard,
                ImageEditor,
                DropTarget,
                Informer,
                StatusBar,
                ProgressBar,
                XHRUpload,
                AwsS3
            } from "https://releases.transloadit.com/uppy/v3.18.0/uppy.min.mjs"
            const uppy = new Uppy({
                debug: true,
                autoProceed: false,
            })

            uppy.use(Dashboard, {
                target: '#uppy',
                inline: true,
                autoOpenFileEditor: true,
                theme: 'dark',
                allowMultipleUploadBatches: false,
                showProgressDetails: false,
                proudlyDisplayPoweredByUppy: false,
                hideUploadButton: false,

                restrictions: {
                    maxFileSize: 1000000,
                    maxNumberOfFiles: 1,
                    minNumberOfFiles: 1,
                    allowedFileTypes: ['image/x-icon']
                }

            })
            var IMGURL = 'https://s3.eu-north-1.amazonaws.com/trp-upload-bucket/favicon/favicon.ico';
            fetch(
                    IMGURL

                )
                .then((response) => response.blob())
                .then((blob) => {
                    uppy.addFile({
                        name: "image.ico",
                        type: blob.type,
                        data: blob
                    });
                });
            uppy.use(ImageEditor, {
                target: Dashboard
            });
            uppy.use(DropTarget, {
                target: document.body
            })
            uppy.use(Informer, {
                target: Dashboard
            })

            uppy.use(ProgressBar, {
                target: document.body
            })


            uppy.use(XHRUpload, {

                endpoint: '{{ route('favicon.store') }}',
                formData: true,
                fieldName: 'file',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }

            })

            //upload from uppy to s3  url: '{{ route('logo.store') }}', // Laravel route to handle file uploads




            //get .env logo
        </script>

        <style>
            //turn filepond dark
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

            .uppy-DashboardContent-addMore {
                display: none;
            }
        </style>
</x-filament-panels::page>