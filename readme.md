# Foundation libsass template

This is a template to start your own project that uses Grunt and libsass!!!

##Structure

When creating stylings we are going to ensure scss files will be in the scss directory and that everything is  created in components this is how it will work.

scenario:

Need to create navigation styles

* step 1: create a branch from master.
* Step 2: create a scss file named navigation and put it in the scss folder
* step 3: import that scss file into the main scss file I think its called app.scss
* step 4: make sure prepros is tracking the app.scss file it will compile it into html.
* step 5:once done merge your work back into the master.



## Requirements

You'll need to have the following items installed before continuing.(dont worry about now covered next classes)

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:zurb/foundation-libsass-template.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

## Directory Strucutre

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here
