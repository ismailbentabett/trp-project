#!/usr/bin/env bash

yum -y install libzip libzip-devel

# Will enable zip extension in /etc/php.ini
pecl upgrade zip 