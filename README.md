Getting Started
=============== 

This application is written purely in JavaScript, HTML, and CSS, so it is ready to deploy and run in most web servers without any extra applications or modules installed.

You will need to be connected to the Internet though, since there is a dependency on a CDN-hosted version of jquery, downloaded at run-time.

The home page shows a form with space to enter details for up to 4 items you've purchased. Click the 'Generate Receipt' button and an itemised receipt with tax breakdown appears at the bottom of the page.


Running tests
=============

I used Jasmine to test parts of the JavaScript - this helped produce a clean design and provided easy regression testing as I extended the functionality.

To run the tests, just point your browser to 'SpecRunner.html' in the base directory, and you'll see a breakdown of tests run and their status.

The tests are located in the 'Spec' folder, and their names follow the pattern '[source_file_its_testing]_spec.js'

NOTE: at present, some tests fail. This is expected, there seems to be a mistake in the original task description where it lists some sample tests with expected inputs/outputs.


Code structure
==============

The source code is located in the 'src' directory, but dependent libraries are in the 'lib' folder.

Most of the JavaScript follows the 'Revealing Module Pattern.' See http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript for more details.

This avoids polluting the global namespace with functions and variables that other functions don't need access to. It also provides a clear way to organise functionality and make code easy-to-understand.

Future Improvements
===================

 A few things I'd do to improve the application, given more time:

 * integrate require.js so script imports in the SpecRunner.html and index.html can be condensed to just one - require.js handles loading the rest. It also has a compatible optimiser for combining files into a single source.
 * use prototype inheritance to remove code duplication in item.js and imported_item.js. I did play around getting this working in a way that's compatible with the Revealing Module Pattern, but didn't quite get there. This would enable me to get rid of the is_imported method and use an instanceof check to distinguish between imported and non-imported items.
 * make receipt.js more robust - at the moment it assumes a div called 'generated-receipt' exists...it would better if it just created it if it didn't exist
 * improve the look and feel! I haven't written any CSS given the focus of this task was on the functionality.
 * replace hardcoded values in switch statement within Item.js with some kind of enum that is easier to maintain.




