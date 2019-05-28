# sveltepress

Svelte + Markdown === Awesome!

## What is it?

SveltePress is a static site generator made up of svelte components and markdown and a simple build pipeline
script. You create you content using markdown with front-matter, then you can use svelte components to present 
your content. Svelte is html components that make it easy for you to manage how the markup is presented as well 
as add your css. The default setup is an example of how you might want to setup a blog site, but you can use this
tool for any site that you have content that can be compiled and delivered.

## Why?

There are a lot of SSGs and one could argue it is a solved problem, but I wanted to see what this might look like
using `svelte` which is a superset of html, versus having to learn a bunch on patterns and a lot of tooling. Also, 
markdown is great for creating and managing content, finally leveraging tools like `zeit` to automatically deploy when pushed to github. Getting started is straight forward if you have a good solid background in html, css, and javascript. Also, you will neeed nodejs installed and have a little knowledge about npm or yarn. If you want to deploy with a single command, getting a zeit account makes deploying static web apps one command.

## Usage

First you want to use degit to create a new project:

```
npm install degit -g
degit twilson63/sveltepress myblog
```

`degit` is a cli tool that will checkout a git repo for you, but not attach the git meta data, so you are 
free to modify and make it your own project.

Next you will want to cd into the project directory and install dependencies:

```
cd myblog
npm install
```

Setting your blog meta data:

Open the `package.json` and modify the `meta` node to include your project meta data, like title, author,
etc.

``` json
{
  "meta": {
    "title": "My Awesome Blog",
    "author": {
      "name": "Tom Wilson",
      "twitter": "@twilson63",
      "bio": "A Javascript Developer"
    }
  }
}
```

Run the dev server

``` sh
npm run dev
```

Now, you are ready to start adding content, this blog press project uses markdown with front matter for your 
content files.  Here is an example,

> Use the `content` folder to add your `markdown` files.

``` markdown
---
ID: my-url-id
title: My Title
date: 2019-01-01
---
My Awesome Article
```

> It is recommended that you use these three keys in your front-matter for markdown, but you can use anything you 
want, it will pass to each component in the props `article` object for each `post` or in the articles array in the
`blog` component.

There are currently two basic components, which you can customize with your best html, css, and javascript.

* Blog - this component is used to build the sites landing page or root page.
* Post - this component is used for each markdown file in the `contents` folder.

These components are located in the `components` folder, you can modify these components or remove them and add your own components. The components are written in `Svelte`.

The pipeline script to build the static site is in `build.js` and can be adjusted to totally customizable, it is 
a composed set of functions that starts with creating the `dist` directory to reading the content and generating the 
pages and copying the assets over.

The assets are stored in `content/assets` and any file stored in this directory or child directories will be copied over to the `dist/assets` folder, so it is easy to create asset links in your markdown files or svelte components.


``` markdown
![avatar](/assets/avatar.png)
```

``` html
<img src="/assets/avatar.png" alt="avatar" />
```

### We are just getting started.

The current focus of this project is simplicity and composibility, for example, if you want to add an image 
compression lib to the build pipeline, all you have to do is create a function and then require it to the
build pipeline. Examples coming soon.

We also see a potential to mix both static and dynamic sites/apps together, by leveraging mono repos
and zeit serverless. For example you should be able to create a static project and a dynamic project 
in the same repo, then create a single now.json file to manage deploying both to the same url.

This will give you a lot of flexibility in what you can accomplish leveraging patterns and practices that you 
have without having to learn some customized system. More to come here.

## License

The license for this project is MIT

See LICENSE

## Contributing

Bugs, examples, pipeline functions are welcome either as npm modules or pull requests is considered a core need.

See CONTRIBUTING.md

## Tutorial

You can checkout the Tutorial Site at https://sveltepress.com/tutorial

 
