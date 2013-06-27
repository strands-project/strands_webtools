strands_webtools
================

An interface to access the real and/or simulated robot via web applications


# Useful Information

 * Slides from ROSCon talk: [here](https://speakerdeck.com/baalexander/introduction-to-robot-web-tools)

 * Source of examples from ROSCon talk: [here](https://github.com/baalexander/roscon2013-examples)

 * ROS requirements on Ubuntu: 
```bash
sudo apt-get install￼ros-groovy-rosbridge-suite
```

 * ROS requirements from source (e.g. OS X): rosbridge_suite, rosauth, tf2_web_republisher, mjpeg_server

```bash
- git: {local-name: rosbridge_suite, uri: 'https://github.com/RobotWebTools/rosbridge_suite.git'}
- git: {local-name: rosauth, uri: 'https://github.com/WPI-RAIL/rosauth.git'}
- git: {local-name: tf2_web_republisher, uri: 'https://github.com/RobotWebTools/tf2_web_republisher.git'}
- git: {local-name: mjpeg_server, uri: 'https://github.com/RobotWebTools/mjpeg_server.git'}
```

 * STRANDS-based requirements: strands_utils (for `/robot_pose` workaround described [here](https://github.com/strands-project/strands_webtools/issues/12#issuecomment-20111023))

# Running
1. `roslaunch strands_webtools webtools.launch`
2. `rosrun strands_utils republish_robot_pose.py` (for `/robot_pose` workaround described [here](https://github.com/strands-project/strands_webtools/issues/12#issuecomment-20111023))
3. Open in web browser: [http://localhost:8000/main.html](http://localhost:8000/main.html)
