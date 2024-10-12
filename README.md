# Laravel CMS with Vue and Tailwind

This project is a comprehensive CMS built with Laravel and Filament PHP for the backend, utilizing Vue.js and Tailwind CSS for the frontend. It integrates various modules to manage e-commerce, social media, AI-powered content generation, and user profiles. Key features include:

- E-commerce: Product and order management, cart, and special orders.
- Social Media: Facebook, Instagram, LinkedIn integrations.
- AI-powered content generation.
- Multi-layer filtering for products and accessories.
- Full CRUD for offers, services, and user profiles.
- Newsletter and contact form functionality.

The project follows a modular structure, with controllers managing all aspects of the application, ensuring a clean and scalable architecture.

---

You can modify this as needed to fit your preferences!



# [Trp](https://trp-france.fr) (CMS)

## Installation

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your development machine :

-   [Docker](https://www.docker.com/get-started)
-   [Composer](https://getcomposer.org/download/)

### Setup

1. **Clone the Repository**: Clone your Laravel application repository to your local development environment if you haven't already.

2. **Start Docker**: Ensure that Docker is running on your system.

3. **Start Sail Containers**: Use the following command to start the Sail containers for your Laravel application:

    ```bash
    sail up
    ```

4. **Install Composer & Node Dependencies**: In a separate terminal window, while the Sail containers are running, you can install your project's Composer & Node dependencies by running:

    ```bash
    sail composer install
    ```

    ```bash
    sail npm install
    ```

5. **Generate an Application Key**: You can generate an application key for your Laravel application using the following command:

    ```bash
    sail artisan key:generate
    ```

6. **Run Migrations**: If your application uses a database, run the migrations to create the necessary database tables:

    ```bash
    sail artisan migrate
    ```

7. **Seed the Database (Optional)**: If you have seeders set up, you can seed the database with sample data:

    ```bash
    sail artisan db:seed
    ```

8. **Start Your Application**: Once everything is set up, you can access your Laravel application by visiting the URL specified in your `.env` file. In this case, it's `http://localhost:8000` based on your configuration.

9. **Access Vite Development Server**: Instead of Mailhog, Laravel Sail can be configured to use the Vite development server for your frontend. You can access the Vite development server at `http://localhost:5173`.

-   **Access PHP MY ADMIN** : `http://localhost:8081`.

10. **Stopping Sail Containers**: To stop the Sail containers when you're done working on your application, you can use the following command:

    ```bash
    sail down
    ```

## Linking Storage

If your Laravel application uses storage for file uploads, you'll need to create a symbolic link from the `public` directory to the `storage/app/public` directory to make these files accessible from the web.

1. Open a terminal window and navigate to your project directory.

2. Use the following command to create the symbolic link:

    ```bash
    sail artisan storage:link
    ```

## Application Details

-   **Name**: YOUR_APP_NAME
-   **Environment**: local
-   **Debug Mode**: fase
-   **App URL**: YOUR_APP_URL
-   **VITE App URL**: YOUR_APP_URL
-   **App Port**: YOUR_APP_PORT

## Logging

-   **Log Channel**: YOUR_LOG_CHANNEL
-   **Log Deprecations Channel**: YOUR_LOG_DEPRECATIONS_CHANNEL
-   **Log Level**: YOUR_LOG_LEVEL

## Database Configuration

-   **DB Connection**: YOUR_DB_CONNECTION
-   **DB Host**: YOUR_DB_HOST
-   **DB Port**: YOUR_DB_PORT
-   **DB Database**: YOUR_DB_DATABASE
-   **DB Username**: YOUR_DB_USERNAME
-   **DB Password**: YOUR_DB_PASSWORD

## Caching and Queue

-   **Broadcast Driver**: YOUR_BROADCAST_DRIVER
-   **Cache Driver**: YOUR_CACHE_DRIVER
-   **Filesystem Disk**: YOUR_FILESYSTEM_DISK
-   **Queue Connection**: YOUR_QUEUE_CONNECTION
-   **Session Driver**: YOUR_SESSION_DRIVER
-   **Session Lifetime**: YOUR_SESSION_LIFETIME

## Cache Services

-   **Memcached Host**: YOUR_MEMCACHED_HOST
-   **Redis Host**: YOUR_REDIS_HOST
-   **Redis Port**: YOUR_REDIS_PORT
-   **Redis Password**: YOUR_REDIS_PASSWORD

## Email Configuration

-   **Mail Mailer**: YOUR_MAIL_MAILER
-   **Mail Host**: YOUR_MAIL_HOST
-   **Mail Port**: YOUR_MAIL_PORT
-   **Mail Username**: YOUR_MAIL_USERNAME
-   **Mail Password**: YOUR_MAIL_PASSWORD
-   **Mail Encryption**: YOUR_MAIL_ENCRYPTION
-   **Mail From Name**: YOUR_MAIL_FROM_NAME

## Mailgun Configuration

-   **Mailgun Domain**: YOUR_MAILGUN_DOMAIN
-   **Mailgun Secret**: YOUR_MAILGUN_SECRET
-   **Mailgun Endpoint**: YOUR_MAILGUN_ENDPOINT

## AWS S3 Configuration

-   **AWS Access Key ID**: YOUR_AWS_ACCESS_KEY_ID
-   **AWS Secret Access Key**: YOUR_AWS_SECRET_ACCESS_KEY
-   **AWS Default Region**: YOUR_AWS_DEFAULT_REGION
-   **AWS Bucket**: YOUR_AWS_BUCKET
-   **AWS Use Path Style Endpoint**: YOUR_AWS_USE_PATH_STYLE_ENDPOINT

## Pusher Configuration

-   **Pusher App ID**: (empty)
-   **Pusher App Key**: (empty)
-   **Pusher App Secret**: (empty)
-   **Pusher Host**: (empty)
-   **Pusher Port**: 443
-   **Pusher Scheme**: https
-   **Pusher App Cluster**: mt1

## Vite Configuration

-   **Vite App Name**: trp
-   **Vite Pusher App Key**: (empty)
-   **Vite Pusher Host**: (empty)
-   **Vite Pusher Port**: (empty)
-   **Vite Pusher Scheme**: (empty)
-   **Vite Pusher App Cluster**: (empty)

## Social Media Integration

### Facebook

-   **App ID**: YOUR_APP_ID
-   **App Secret**: YOUR_APP_SECRET
-   **Redirect URI**: YOUR_REDIRECT_URI

### Google

-   **App Key**: YOUR_APP_KEY
-   **Secret**: YOUR_SECRET
-   **Redirect URI**: YOUR_REDIRECT_URI

### LinkedIn

-   **Client ID**: YOUR_CLIENT_ID
-   **Client Secret**: YOUR_CLIENT_SECRET
-   **Redirect URI**: YOUR_REDIRECT_URI
-   **Scopes**: YOUR_SCOPES

## Filesystem Configuration

-   **Filesystem Driver**: s3
-   **Filepond Temp Disk**: public

## Algolia Search

-   **Algolia App ID**: YOUR_ALGOLIA_APP_ID
-   **Algolia Secret**: YOUR_ALGOLIA_SECRET

## Vite Algolia Configuration

-   **Vite Algolia App ID**: YOUR_VITE_ALGOLIA_APP_ID
-   **Vite Algolia Secret**: YOUR_VITE_ALGOLIA_SECRET

## Scout Queue

-   **Scout Queue**: true

## Social Authentication

### Facebook

-   **Key**: YOUR_APP_ID
-   **Secret**: YOUR_APP_SECRET
-   **Redirect URI**: YOUR_REDIRECT_URI

### Google

-   **Key**: YOUR_APP_KEY
-   **Secret**: YOUR_SECRET
-   **Redirect URI**: YOUR_REDIRECT_URI

### LinkedIn

-   **Key**: YOUR_CLIENT_ID
-   **Secret**: YOUR_CLIENT_SECRET
-   **Redirect URI**: YOUR_REDIRECT_URI

## Authors

- [@ismailbentabett](https://www.github.com/ismailbentabett)
















APP_NAME=trp
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY
APP_DEBUG=true
APP_URL=http://localhost:8000
VITE_APP_URL=http://localhost:8000
APP_PORT=3001

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=trp
DB_USERNAME=sail
DB_PASSWORD=password

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=s3
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=postmaster@example.com
MAIL_PASSWORD=YOUR_MAIL_PASSWORD
MAIL_ENCRYPTION=tls
MAIL_FROM_NAME="${APP_NAME}"

MAILGUN_DOMAIN=example.com
MAILGUN_SECRET=YOUR_MAILGUN_SECRET
MAILGUN_ENDPOINT=api.mailgun.net

AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_KEY
AWS_DEFAULT_REGION=eu-north-1
AWS_BUCKET=your-bucket-name
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

FACEBOOK_APP_ID=YOUR_FACEBOOK_APP_ID
FACEBOOK_APP_SECRET=YOUR_FACEBOOK_APP_SECRET
FACEBOOK_REDIRECT_URI=http://localhost:8000/auth/facebook/callback

FILESYSTEM_DRIVER=s3

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
CLOUDINARY_URL=cloudinary://YOUR_CLOUDINARY_API_KEY:YOUR_CLOUDINARY_API_SECRET@YOUR_CLOUD_NAME

VITE_CURRENCY=EUR
VITE_CURRENCY_SYMBOL=EUR

OPENAI_API_KEY=YOUR_OPENAI_API_KEY

LINKEDIN_CLIENT_ID=YOUR_CLIENT_ID
LINKEDIN_CLIENT_SECRET=YOUR_CLIENT_SECRET
LINKEDIN_REDIRECT_URL=http://localhost:8000/auth/linkedin/callback
LINKEDIN_SCOPES=r_emailaddress,r_liteprofile,w_member_social

FILEPOND_TEMP_DISK=public

ALGOLIA_APP_ID=YOUR_ALGOLIA_APP_ID
ALGOLIA_SECRET=YOUR_ALGOLIA_SECRET
VITE_ALGOLIA_APP_ID=YOUR_ALGOLIA_APP_ID
VITE_ALGOLIA_SECRET=YOUR_ALGOLIA_SECRET
SCOUT_QUEUE=true

SOCIAL_AUTH_FACEBOOK_KEY=YOUR_FACEBOOK_KEY
SOCIAL_AUTH_FACEBOOK_SECRET=YOUR_FACEBOOK_SECRET
SOCIAL_AUTH_GOOGLE_KEY=YOUR_GOOGLE_KEY
SOCIAL_AUTH_GOOGLE_SECRET=YOUR_GOOGLE_SECRET
SOCIAL_AUTH_LINKEDIN_KEY=YOUR_LINKEDIN_KEY
SOCIAL_AUTH_LINKEDIN_SECRET=YOUR_LINKEDIN_SECRET
SOCIAL_AUTH_FACEBOOK_REDIRECT_URI=http://localhost:8000/auth/facebook/callback
SOCIAL_AUTH_GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback
SOCIAL_AUTH_LINKEDIN_REDIRECT_URI=http://localhost:8000/auth/linkedin/callback

