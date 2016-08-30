[![Build Status](https://travis-ci.org/LliamRuzzell/Divi-Starter-Child-Theme.svg?branch=master)](https://travis-ci.org/LliamRuzzell/Divi-Starter-Child-Theme)

Divi Child Theme
===

Version 1.0.0

## Summary

A Starter Child Theme for the [Divi WordPress Theme](https://www.elegantthemes.com/gallery/divi/). This repo comes with a [Standard path](#standard-path) and a  [Grunt path](#grunt-path).  

## Getting Started

Clone this repo `git clone git@github.com:LliamRuzzell/Divi-Starter-Child-Theme.git`.  
If you don't have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed, you can download the [ZIP file](https://github.com/LliamRuzzell/Divi-Starter-Child-Theme/archive/master.zip).


## CSS Path

The Divi Child Theme is located within the directory `dist/divi-child-theme`

* Rename the directory `dist/divi-child-theme` to `dist/theme-name`
* Search for: `divi-child-theme` and replace with: `theme-name`
* Search for: `dct_` and replace with: `tn_`
* Update the stylesheet header in `style.css` with your own information.
* Update or delete the `README.md` with your own information.

## Grunt Path

#### Requirements
Below are a list of applications/software that you will need installed before continuing down this path.

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](http://nodejs.org/)
- [GruntJS](http://gruntjs.com/)
- [Sass](http://sass-lang.com/install)

If these are already installed, skip to Step [#4](#step-4-cloning-repo)

-

#### Step 1: Installing Node.js
The first step is getting NodeJS installed.

1. Head over to `https://nodejs.org/en/` and install the latest version of Node.js
1. Now that it's installed, run `node -v` to verify that you have the latest version installed.

-

#### Step 2: Installing GruntJS
The next step is setting up GruntJS locally.

1. Now that you have Node installed, let's install GruntJS by running the following command: `npm install -g grunt-cli`.

-

#### Step 3: Installing Git
After installing Node and Grunt, you can now install Git. 

1. Go to `https://git-scm.com/book/en/v2/Getting-Started-Installing-Git` and follow the instructions to install git on your OS.

-

#### Step 4: Cloning Repo
1. With git now installed, navigate to `wp-content/themes` folder.
1. Clone the repo using the following command: `git clone git@github.com:elegantthemes/divi-child-theme-init.git`.
1. Now with the repo cloned, you can navigate to it by typing in `cd ` and dragging the divi child theme folder into your terminal.

-

#### Step 5: Initiate your theme
1. Install the node packages with the following command: `npm install`.
1. Edit the Details _(Grunt Templates)_  in `Gruntfile.js`
1. From the current directory, run the following command: `grunt init`.
1. Update or delete the `src/README.md` with your own information.

-

#### Step 6: Commence Theming 
1. From the current directory, run the following command: `grunt watch` or simply `grunt` to watch for `src/assets` changes.
1. Create the Theme!
1. Build the Theme by running the following command: `grunt build`.

## License

License: GNU General Public License v2 or later  
License URI: [src/LICENSE](src/LICENSE)