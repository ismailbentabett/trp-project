#!/bin/sh

# Make Folders Writable
# After the deployment finished, make the folders that Laravel needs
# to write to (storage/ and bootstrap/cache/) group-writable.
# 775 lets the owner and the web server group write, without
# giving write access to every user on the machine.

sudo chmod -R 775 storage/
sudo chmod -R 775 bootstrap/cache/

# Storage Symlink Creation

php artisan storage:link
