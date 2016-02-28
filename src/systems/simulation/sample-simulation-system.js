"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var globeRotation = game.entities.get(entity, "rotation");
		globeRotation.angle -= elapsed/10000;
	}, "globe");
};
