# HUGO HT

A simple hugo theme suitable for bilingual personal blogs. It is  a copy of [my personal website](https://hongtaoh.com/).

[Example site](https://hugo-ht.hongtaoh.com/)

![example site appearance](https://raw.githubusercontent.com/hongtaoh/hugo-ht/master/static/media/exampleSite.png)

## People 

- Kristen Zhang
- ??

## Shoulders of the giants

I wouldn't call it a "theme" because it is heavily built on other people's work:

- The base of Hugo-ht is [Yihui Xie](https://github.com/yihui)'s [hugo-xmin](https://github.com/yihui/hugo-xmin)

- The design of navigation bar and footer texts is copied from the theme of [Lithium](https://themes.gohugo.io/hugo-lithium-theme/) by Jonathan Rutheiser

- Styles of body texts are based on [typo.css](https://github.com/xiangming/typo/blob/master/css/typo.css) by [xiangming](https://github.com/xiangming)

- The style of table of contents is based on that of Zachary Betz's [personal blog](https://zwbetz.com/).

- Custom blocks are based on the [CSS of Bookdown](https://github.com/rstudio/bookdown/blob/master/inst/examples/css/style.css) by Yihui Xie

Besides, [Daijiang Li's](https://github.com/rbind/daijiang/) personal website helped me a lot. 

## Blog tutorial

If you read Chinese, consult the [website-building tutorial](https://hongtaoh.com/cn/2021/03/02/personal-website-tutorial/) I created. 

## Installation

Navigate to the root of hugo project and run:

```bash
cd themes
git clone https://github.com/hongtaoh/hugo-ht
mkdir hugo-ht-new
cp -r hugo-ht/* hugo-ht-new
rm -rf hugo-ht
mv hugo-ht-new hugo-ht
cd .. 
```
### Submodule 

Or you can add hugo-ht as a submodule:

```bash
git submodule add https://github.com/hongtaoh/hugo-ht themes/hugo-ht
```

The difference between the two methods is that if you add it as a submodule, the `hugo-ht` theme you use is connected to this repository. The benefit is that you can keep it updated, but there is a caveat: if you make lots of changes to the styles based on your personal preferences, these changes might be lost.

Simply `git clone` is recommended if:

- You pretty satisfied with the current version of `hugo-ht`; and/or

- You are going to make changes according to your personal taste; and/or

- You are not familiar with Git and do not know how to update the submodule. 

To update the submodule, run the following codes at the root directory of your hugo project:

```bash
cd themes/hugo-ht
git checkout master && git pull
cd ..
git add hugo-ht
git commit -m "updating submodule to latest"
cd ..
```
The above codes came from [paularmstrong](https://github.com/tj/git-extras/pull/80#issuecomment-3992323).

## Customize

### Editing `config.toml`

- Edit baseURL

- Edit `USERNAME` AND `REPONAME` associated with github

- `params.lang.author`: edit `Your Name`

### Language mode

If you want to use a single language in the menu. Make sure there are folders within the `content` folder. Let's say you have `about` and `posts`. 

1. Edit thems/hugo-ht/layouts/partials/nav.html

Change the codes between <ul class = "nav-links"> and </ul> to:

```
{{ $currentPage := . }}
{{ $section := replaceRE "^/([^/]+)/.*" "$1" .Permalink }}
{{ range (default .Site.Menus.main (index .Site.Menus $section)) }}
<li><a href="{{ .URL | relURL }}">{{ .Name }}</a></li>
{{ end }}
```

The above codes came from [Daijiang Li's blog](https://github.com/rbind/daijiang/blob/master/layouts/partials/nav.html).

2. Edit `config.toml`

Delete all the codes with `[[menu.en]]` and `[[menu.cn]]`. Add codes like:

```toml
[[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
[[menu.main]]
    name = "About"
    url = "/about/"
    weight = 2
[[menu.main]]
    name = "Posts"
    url = "/posts/"
    weight = 3
```

Then uncomment `# singleLang = true`.

## Notice

In `config.toml`, please make sure `blogDirNmae` matches the name used in `menu`:

## License

Codes are available under the MIT License. 