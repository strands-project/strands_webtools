strands_webtools
================

An interface to access the real and/or simulated robot via web applications


# Useful Information

 * Slides from ROSCon talk: [here](https://speakerdeck.com/baalexander/introduction-to-robot-web-tools)

 * Source of examples from ROSCon talk: [here](https://github.com/baalexander/roscon2013-examples)

 * ROS requirements on Ubuntu: 
```bash
sudo apt-get install ros-groovy-rosbridge-suite ros-groovy-robot-pose-publisher ros-groovy-tf2-web-republisher ros-groovy-mjpeg-server
```

 * ROS requirements from source (e.g. OS X): rosbridge_suite, rosauth, tf2_web_republisher, mjpeg_server, robot_pose_publisher

```bash
- git: {local-name: rosbridge_suite, uri: 'https://github.com/RobotWebTools/rosbridge_suite.git'}
- git: {local-name: rosauth, uri: 'https://github.com/WPI-RAIL/rosauth.git'}
- git: {local-name: tf2_web_republisher, uri: 'https://github.com/RobotWebTools/tf2_web_republisher.git'}
- git: {local-name: mjpeg_server, uri: 'https://github.com/RobotWebTools/mjpeg_server.git'}
- git: {local-name: robot_pose_publisher, uri: 'https://github.com/WPI-RAIL/robot_pose_publisher.git'}
```

# Running
1. `roslaunch strands_webtools webtools.launch`
2. (optional) `rosrun topic_republisher republish_ptu_jointstate.py` (republishes the PTU joint state on `/ptu`, only needed for MORSE; The package `topic_republisher` can be found in the `strands_utils` repository)
3. Open in web browser: [http://localhost:8000/main.html](http://localhost:8000/main.html)
