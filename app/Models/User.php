<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Coderflex\LaravelTicket\Concerns\HasTickets;
use Coderflex\LaravelTicket\Contracts\CanUseTickets;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use ShayanYS\LaraReserve\Interfaces\CustomerInterface;
use ShayanYS\LaraReserve\Traits\Customer;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements CanUseTickets, CustomerInterface, FilamentUser
{
    use customer, HasApiTokens, HasFactory, HasRoles, HasTickets, Notifiable;

    public function canAccessPanel(Panel $panel): bool
    {
        return $this->hasRole(['Admin', 'Editor', 'Super Admin']);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    //user has many special orders
    public function specialOrders()
    {
        return $this->hasMany(SpecialOrder::class);
    }

    public function is_admin()
    {
        return $this->hasRole(['Admin']);
    }

    public function is_editor()
    {
        return $this->hasRole(['Editor']);
    }

    public function is_super_admin()
    {
        return $this->hasRole(['Super Admin']);
    }

    public function is_customer()
    {
        return $this->hasRole(['Customer']);
    }

    public function is_user()
    {
        return $this->hasRole(['User']);
    }

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'google_id',
        'facebook_id',
        'linkedin_id',
        'avatar',
        'cover',
        'phone',
        'address',
        'city',
        'country',
        'zip_code',
        'state',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
