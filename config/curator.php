<?php

use App\Providers\CustomServerFactory;

return [
    'accepted_file_types' => [
        'image/*',

        'application/pdf',
        //videos
        'video/*',

        //audio
        'audio/*',

        //docs
        'application/*',

    ],
    'cloud_disks' => [
        's3',
        'cloudinary',
        'imgix',
    ],
    'curation_presets' => [
        \Awcodes\Curator\Curations\ThumbnailPreset::class,
    ],
    'directory' => 'media',
    'disk' => 's3',
    'glide' => [
        'server' => CustomServerFactory::class,
        'fallbacks' => [],
    ],
    'image_crop_aspect_ratio' => null,
    'image_resize_mode' => null,
    'image_resize_target_height' => null,
    'image_resize_target_width' => null,
    'is_limited_to_directory' => false,
    'max_size' => 10000,
    'model' => \Awcodes\Curator\Models\Media::class,
    'min_size' => 0,
    'path_generator' => null,
    'resources' => [
        'label' => 'Media',
        'plural_label' => 'Media',
        'navigation_group' => null,
        'navigation_icon' => 'heroicon-o-photo',
        'navigation_sort' => null,
        'navigation_count_badge' => false,
        'resource' => \Awcodes\Curator\Resources\MediaResource::class,
    ],
    'should_preserve_filenames' => false,
    'should_register_navigation' => true,
    'visibility' => 'public',
];
