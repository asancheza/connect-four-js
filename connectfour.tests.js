<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
  <script src="connectfour.js"></script>
  <script>
  	QUnit.test( "hello test", function( assert ) {
		  assert.ok( 1 == "1", "Passed!" );
		});
  </script>
</body>
</html>