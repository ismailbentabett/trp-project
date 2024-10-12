<?php

namespace App\Filament\Resources\RolesResource\Pages;

use App\Filament\Resources\RolesResource;
use Filament\Resources\Pages\CreateRecord;

class CreateRoles extends CreateRecord
{
    protected static string $resource = RolesResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotificationTitle(): ?string
    {
        return 'Role Created';
    }
}
