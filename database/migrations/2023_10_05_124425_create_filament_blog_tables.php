<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();

            $table->longText('description')->nullable();
            $table->boolean('is_visible')->default(false);
            $table->timestamps();
        });

        Schema::create('blog_category_blog_category', function (Blueprint $table) {
            $table->unsignedBigInteger('parent_id');
            $table->unsignedBigInteger('child_id');
            $table->primary(['parent_id', 'child_id']);
            $table->timestamps();
        });

        Schema::create('blog_authors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('photo')->nullable();
            $table->longText('bio')->nullable();
            $table->string('github_handle')->nullable();
            $table->string('twitter_handle')->nullable();
            $table->timestamps();
        });

        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_author_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('blog_category_id')->nullable()->constrained()->nullOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt')->nullable();
            $table->boolean('view_count')->default(0);
            $table->string('banner')->nullable();
            $table->longText('content');
            $table->date('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_categories');
        Schema::dropIfExists('blog_authors');
        Schema::dropIfExists('blog_posts');
    }
};
