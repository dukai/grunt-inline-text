/*
 * grunt-inline-text
 * 
 *
 * Copyright (c) 2016 dukai
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');

var Template = require('template');



module.exports = function(grunt) {
    var filepath = path.resolve(__dirname, 'fn_template');
    var filecontent = fs.readFileSync(filepath, 'utf8');
    var tmpl = new Template(filecontent);

    grunt.registerMultiTask('inline_text', 'Package the requirejs text plugin module content to inline amd javascript module, so after these processing, the modules that have text! dependencies can be used cross domains.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            var src = f.src[0];
            var dest = f.dest + '.js';
            grunt.log.debug('dest target', dest);

            var fileContent = grunt.file.read(src);
            grunt.log.debug('file content', fileContent);

            fileContent = fileContent.replace(/\r/g, '\\r')
                .replace(/\n/g, '\\n')
                .replace(/\t/g, '')
                .replace(/'/g, "\\\'");


            // Write the destination file.
            grunt.file.write(dest, tmpl.render({
                content: fileContent
            }));

            // Print a success message.
            grunt.log.writeln('File "' + dest + '" created.');
        });
    });

};
