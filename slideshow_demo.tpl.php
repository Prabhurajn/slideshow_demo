<?php
/**
 * @file
 * AngularJS template to render a json data block.
 */
?>
	<div ng-app = "App">
		<div ng-controller="AppController" ng-switch="slideshow">
		<center>
        <?php
            for ($x = 1; $x < 10; $x++) 
            { 
              echo "<div ng-switch-when='$x' ng-repeat='items in cars'><img src=\"{{ items[$x].img }}\" height=\"332\" width=\"620\"></div>";
            }
        ?>
        </center>
		</div>
  	</div>