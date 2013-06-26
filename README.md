strands_webtools
================

An interface to access the real and/or simulated robot via web applications


# Useful Information

 * Slides from ROSCon talk: [here](https://speakerdeck.com/baalexander/introduction-to-robot-web-tools)

 * Source of examples from ROSCon talk: [here](https://github.com/baalexander/roscon2013-examples)

 * ROS requirements on Ubuntu: 
```
sudo apt-get install￼ros-groovy-rosbridge-suite
```

 * ROS requirements on Ubuntu: rosbridge_suite, rosauth, tf2_web_republisher, mjpeg_server
 e.g. 
```
- git: {local-name: rosbridge_suite, uri: 'https://github.com/RobotWebTools/rosbridge_suite.git'}

- git: {local-name: rosauth, uri: 'https://github.com/WPI-RAIL/rosauth.git'}

- git: {local-name: tf2_web_republisher, uri: 'https://github.com/RobotWebTools/tf2_web_republisher.git'}

- git: {local-name: mjpeg_server, uri: 'https://github.com/RobotWebTools/mjpeg_server.git'}

```




# Running

 1. Run robot/sim plus nav
 2. Rub webserver in root directory of repo: `python -m SimpleHTTPServer`
 3. Run rosbridge: `roslaunch rosbridge_server rosbridge_websocket.launch`
 4. Run mjpeg server: `rosrun mjpeg_server mjpeg_server`
 5. Open in web browser: [http://localhost:8000/main.html](http://localhost:8000/main.html)
