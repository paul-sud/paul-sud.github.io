# Gatsby GitHub pages blog

Based on [Elemental Gatsby template](https://github.com/akzhy/gatsby-theme-elemental)

## Usage

You will need `npm` and [Gatsby](https://www.gatsbyjs.org/tutorial/part-zero/) installed. You should NOT edit files on the `master` branch, since that is the branch GitHub uses to find the content to serve. Instead, edit the files on `dev` and only update `master` by running the deploy script.

To deploy site to GitHub pages, run the following:

```
npm run deploy
```

For local development, run the following and visit localhost:8000:

```
gatsby develop
```

### Configuring

Almost all features of this starter are editable. In order to personalize, open the `gatsby-config.js` file and start editing the below part. See Elemental README for details.

#### Creating new blog posts.

Open the `contents/blog` folder and create a new folder with the name you wish to see as the URL. Inside the folder create an `index.md` file and also include any files you wish to add.

The frontmatter should be of the below structure

```
---
title: Title of your post
date: 2019-06-29 <-- Date should be in the given format
template: blog <-- The template you wish to use. "blog" for blog posts
image: ./image.jpg <-- Image shown on the list pages and also used as open graph image
banner: ./banner.jpg <-- Banner shown in the blog post
description: The description shown in the listing page. Also used for SEO description. 
---
```

If you don't want the blog section, simply delete everything inside the `contents/blog` folder. (Do not delete the folder itself)

#### Creating new portfolio posts.

Open the `contents/portfolio` folder and create a new folder with the name you wish to see as the URL. Inside the folder create an `index.md` file and also include any files you wish to add.

The formatter should be of the below structure

```
---
title: Title of your post
date: 2019-06-29 <-- Date should be in the given format
template: blog <-- The template you wish to use. "blog" for blog posts
image: ./image.jpg <-- Image shown on the list pages and also used as open graph image
description: The description shown in the listing page. Also used for SEO description. 
---
```

Portfolio pages support the creation of grids.

To create a grid, follow the below structure

```
[row]
[col]
**Markdown**
[/col]
[/row]
```

The columns will have equal width on wide screens, and will expand on smaller screens.

#### Creating miscellaneous posts

These posts follow the URL structure of `http://example.com/miscellaneous-post/`. They are useful for creating pages like `privacy-policy`

The "About" page is created as a miscellaneous post.


## Contributing

Any kind of contributions are welcome. Bump the version and create a PR.
