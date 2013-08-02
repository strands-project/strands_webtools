#!/bin/bash

scitos_desc=`rospack find scitos_description`
webtools=`rospack find strands_webtools`
apache_doc_root="/var/www/strands"
apache_avail_sites="/etc/apache2/sites-available"

sudo install -d $apache_doc_root
sudo cp -af css/ $apache_doc_root/css
sudo cp -af js/ $apache_doc_root/js
find -name "build" -type d | xargs -i sudo cp --parents -af {} $apache_doc_root/
find -name "include" -type d | xargs -i sudo cp --parents -af {} $apache_doc_root/

sudo install -d $apache_doc_root/scitos_description

sudo cp -af $scitos_desc/meshes $apache_doc_root/scitos_description


sudo install -p *.html $apache_doc_root

sudo install -p strands.site $apache_avail_sites/strands

# enable apache modules
sudo a2enmod proxy* rewrite*

#disable default site
sudo a2dissite default
#enable strands site
sudo a2ensite strands

sudo chown -R www-data:www-data $apache_doc_root

sudo service apache2 reload

