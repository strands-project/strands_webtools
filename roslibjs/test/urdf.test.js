var expect = chai.expect;

var sample_urdf = function (){
  return '<robot name="test_robot">' +
    '  <link name="link1" />'+
    '  <link name="link2" />'+
    '  <link name="link3" />'+
    '  <link name="link4" />'+
    '  <joint name="joint1" type="continuous">'+
    '    <parent link="link1"/>'+
    '    <child link="link2"/>'+
    '  </joint>'+
    '  <joint name="joint2" type="continuous">'+
    '    <parent link="link1"/>'+
    '    <child link="link3"/>'+
    '  </joint>'+
    '  <joint name="joint3" type="continuous">'+
    '    <parent link="link3"/>'+
    '    <child link="link4"/>'+
    '  </joint>'+
    '</robot>';
}

describe('URDF', function() {

  describe('parsing', function() {
    it('should load simple xml', function() {
      // http://wiki.ros.org/urdf/Tutorials/Create%20your%20own%20urdf%20file
      var urdfModel = new ROSLIB.UrdfModel({
        string: sample_urdf()
      });

      expect(urdfModel.name).to.equal('test_robot');
    });

    it('is ignorant to the xml node', function(){
      var parser = new DOMParser();
      var xml1 = parser.parseFromString("", 'text/xml');
      var xml2 = parser.parseFromString(sample_urdf(), 'text/xml');
      var robotXml = xml1.evaluate('//robot', xml2, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      expect(robotXml.getAttribute('name')).to.equal('test_robot');
      var robotXml = xml2.evaluate('//robot', xml2, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      expect(robotXml.getAttribute('name')).to.equal('test_robot');
    });
  });

});
