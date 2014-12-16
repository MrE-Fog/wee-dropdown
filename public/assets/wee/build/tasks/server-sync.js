/* global browserSync, config, project, reloadPaths, server */

module.exports = function(grunt) {
	grunt.registerTask('sync', function() {
		var serverConfig = project.server,
			reloadConfig = project.server.reload;

		if (reloadConfig.enable === true) {
			var reloadWatch = reloadConfig.watch,
			reloadExtensions = reloadWatch.extensions.join();

			if (reloadWatch.extensions.length > 1) {
				reloadExtensions = '{' + reloadExtensions + '}';
			}

			// Add user-defined paths
			reloadWatch.paths.forEach(function(path) {
				reloadPaths.push(path + '/**/*.' + reloadExtensions);
			});

			// Add root to watchlist
			if (reloadWatch.root === true) {
				reloadPaths.push(project.paths.root + '/**/*.' + reloadExtensions);
			}

			// Bind BrowserSync watchlist
			reloadPaths.push(config.assetPath + '/**/*.{min.css,min.js,gif,jpg,png,svg}');

			server.files = reloadPaths;
		}

		// Ghost mode
		if (serverConfig.ghostMode === false) {
			server.ghostMode = false;
		}

		server.port = serverConfig.port;
		server.logPrefix = 'Wee';
		server.open = 'external';
		server.notify = false;

		browserSync(server);
	});
};