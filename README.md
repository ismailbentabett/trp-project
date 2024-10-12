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
