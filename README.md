strands_webtools
================

An interface to access the real and/or simulated robot via web applications. It is suggested that you run the server on a separate computer and have that computer connect to the robot's roscore, e.g. by setting `export ROS_MASTER_URI="http://robot-ip:11311/"` accordingly.


# Useful Information

 * Slides from ROSCon talk: [here](https://speakerdeck.com/baalexander/introduction-to-robot-web-tools)

 * Source of examples from ROSCon talk: [here](https://github.com/baalexander/roscon2013-examples)

 * ROS requirements on Ubuntu: 
```
rosdep -y install -r strands_webtools
```

   * ROS requirements from source (e.g. OS X): rosbridge_suite, rosauth, tf2_web_republisher, mjpeg_server, robot_pose_publisher

# Install Apache2
 * ```sudo apt-get install apache2 libapache2-mod-proxy-html```
 * install the [mod_wstunnel](http://www.amoss.me.uk/2013/06/apache-2-2-websocket-proxying-ubuntu-mod_proxy_wstunnel/) for apache (the script `roscd strands_webtools; sudo ./build_wstunnel.sh` automates the following)
     ```
# Check apache version (should be 2.2.20 as of writing, if not adjust the next step)
dpkg -s apache2
# Checkout apache source
svn checkout http://svn.apache.org/repos/asf/httpd/httpd/tags/2.2.20/ httpd-2.2.20 
# Get patch and apply it
wget http://cafarelli.fr/gentoo/apache-2.2.24-wstunnel.patch
cd httpd-2.2.20
patch -p1 < ../apache-2.2.24-wstunnel.patch
# Build Apache 
svn co http://svn.apache.org/repos/asf/apr/apr/branches/1.4.x srclib/apr
svn co http://svn.apache.org/repos/asf/apr/apr-util/branches/1.3.x srclib/apr-util
./buildconf
./configure --enable-proxy=shared --enable-proxy_wstunnel=shared
make
# Copy the module and recompiled mod_proxy (for new symbols) to the ubuntu apache installation and update the permissions to match the other modules
sudo cp modules/proxy/.libs/mod_proxy{_wstunnel,}.so /usr/lib/apache2/modules/
sudo chmod 644 /usr/lib/apache2/modules/mod_proxy{_wstunnel,}.so
echo -e "# Depends: proxy\nLoadModule proxy_wstunnel_module /usr/lib/apache2/modules/mod_proxy_wstunnel.so" | sudo tee -a /etc/apache2/mods-available/proxy_wstunnel.load

      ```
 * install configure Apache to run the STRANDS config: `roscd strands_webtools; bash -x ./configure_apache.sh` 

# Running
1. `roslaunch strands_webtools webtools.launch`
2. (optional) `rosrun topic_republisher republish_ptu_jointstate.py` (republishes the PTU joint state on `/ptu`, only needed for MORSE; The package [topic_republisher](https://github.com/strands-project/strands_utils/tree/master/topic_republisher) can be found in the [strands_utils](https://github.com/strands-project/strands_utils) repository)
3. Open in web browser: [http://localhost/](http://localhost/)
