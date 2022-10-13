# Contributing
This wiki uses [VuePress v2](https://v2.vuepress.vuejs.org) with all wiki pages stored in the `docs` folder.

## Online editing
You can editing any of our wiki pages by using the GitHub online editor. Once you have made an edit it will prompt you to open a oull request which is a request to add your change. Once we have reviewed your change we will add it into the wiki.

## Local development

Clone the repo into your desired folder, `cd` into it, and install the dependencies.

```bash
git clone https://github.com/vecnz/wiki.git
cd wiki
yarn
```

You can use `yarn docs:dev` to open up a local version of the site at http://localhost:8080.

## Adding pages

To add a new page to the guide, create a `file-name.md` file inside the folder of your choice. If you want to link to `/dir/tutorial.html`, you would create a `tutorial.md` file inside a `dir` folder. [VuePress](https://v2.vuepress.vuejs.org) will pick up on it and set up the routing appropriately.

With that being said, you will still need to add the link to the sidebar manually. Go to the `/docs/.vuepress/config/sidebar.ts` file and insert a new item with the path to your newly created page.

## General guidelines

Because we want to keep everything as consistent and clean as possible, here are some guidelines we strongly recommend you try to follow when making a contribution.

### Spelling, grammar, and wording

Improper grammar, strange wording, and incorrect spelling are all things that may lead to confusion when a user reads the wiki. It's important to attempt to keep the content clear and consistent. Re-read what you've written and place yourself in the shoes of someone else for a moment to see if you can fully understand everything without any confusion.

Don't worry if you aren't super confident with your grammar/spelling/wording skills; all pull requests get thoroughly reviewed, and comments are left in areas that need to be fixed or could be done better/differently.

### Inclusive language

Avoid gendered and otherwise non-inclusive language. Examples are:

- Gendered pronouns (e.g. he/him/his) -> They, them, their
- Gendered terms (e.g. guys) -> Folks, people
- Sanity check -> Quick check, confidence check, coherence check
- Dummy value -> Placeholder, sample value

### Paragraph structure

Tied in with the section above, try to keep things as neatly formatted as possible. If a paragraph gets long, split it up into multiple paragraphs so that it adds some spacing and is easier on the eyes.

## External resources
As this project uses VuePress v2, you can find the documentation for it [here](https://v2.vuepress.vuejs.org) along with a handy guide 
[here](https://v2.vuepress.vuejs.org/guide/).
