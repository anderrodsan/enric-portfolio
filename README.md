This is a web portfolio developed by [@anderrodsan](https://github.com/anderrodsan) and designed by Enric Clemente. It can be visited at [enrik.dk](https://enrik.dk).

# Introduction

The website has been created with the ability of being expanded in the future, once projects start coming up. The purpose of this documentation is to inform the owner of the website how new content could be added.

## Project Structure

The project is structured in different main folders:

- **/public**: contains all the images, videos, svgs or any kind of media. It also contains subfolders to easily divide them, but just for a better accessibility.
- **/content**: contains the mdx files for each project, so they can be rendered as a blog.
- **/src**: the main folder containing the app with components, functions, etc. No need of changing the content here, as long as the design or layout of the website have to be changed. Contact me for this.
  - **/db**: includes the dynamic data to be shown, such as the list of projects, background, tools... in JSON format. To add new data, just copy one of the objects (into brackets) and change the values such as title: "project1".

### Adding new projects

The projects are listed in a bento grid, and when pressing into the card, the user will be navigated into the specific project page with detailed information.

#### Requirements

Two differents approaches have been taken depending on how projects are shown.

- The bento grid contains cards with a consistent layout and data. That is why adding projects into the "src/db/projects.json" file is enough.
- The detailed project pages might include different paragraphs, images, and layout. That is why a markdown solution is the most optimal one.

The idea is that users will navigate to the work page, and press into a bento grid project item to access the project page. Hence, both solutions have to be used to add a new project.

#### Step 1: Add project into the bento grid

The projects are stored in a json format file that includes an array filled with objects with value pairs.

```
{
    id: "project-shortname",
    title: "UX Design",
    description: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    type: "phone",
    color: "light-pink",
  },
```

There are many variants for each bento item, thats why different values need to be added:

- **id**: the text that will be included to navigate into the url/work/[id]. They have to be UNIQUE.
- **title**: the main title of the card
- **descripion**: the subtitle displayed in UPERCASE
- **image**: the image with the mockups included. Those are saved into the "/public" folder, so just type "/images/..." without the "/public". (see example above)
- **type**: phone cards occupy 1 column while browsers/laptops occupy 2
- **color**: each card can have any specific color. Just type the predefined "light-pink" | "light-orange" | "light-blue"| "light-green", or a custom HEX value like [#ffffff]

To add a new project? Just add a new object into the array at "/src/db/projects.db"

P.S. What about other data as the education, tools, etc.? The same, just add a new object and change the values!

```
export const projects = [
  {
    id: "project-shortname",
    title: "UX Design",
    description: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    type: "phone",
    color: "light-pink",
  },
  --- NEW PROJECT ADDED ------------------------
  {
    id: "project-shortname,
    title: "Design System",
    description: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    type: "browser",
    color: "light-green",
  },
  ----------------------------------------------
  ...
]
```

#### Step 2: Add the markdown file

To add a new project page, just create a new file at "/content/work/" and give it the name of its' id from the project located at the json file explained below.

Example: for a project page of the one below, just create an "app-design.mdx" file in the "content/work" directory. When navigating to the "enric.dk/work/app-design" page, the website will detect there is a file with that name and render it.

```
{
    id: "app-design",
    title: "Design System",
    description: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    type: "browser",
    color: "light-green",
  },
```

Now lets add the content into the ".mdx" file, which is divided in two parts:

This is the metadata of the app that will be showed into the header of the page. Just change the values depending on the project.

```
---
title: "Feature Redesign for Element Bolt CRM."
publishedAt: "2024-10-21"
summary: "This is a test."
company: "Element Bolt CRM"
role: "UX Designer"
team: "Product Manager, QA, Developer, Strategist"
duration: "90 hours"
tools: "figma, figma, figma"
---
```

The rest is the actual content of the page. Check the "/content/work/test.mdx" file to hae a reference.

- Images are rendered in different components called "FullWidthImage", "TwoColumnImages" and "ThreeColumnImages" components, folowed by the "Caption" component for the caption. Just change the src with the url of the images.
- The text has a max width, that is why it has to be wrapped with the "MaxWidth" component. Note that two need to be placed: the opening one and the closing one with "/"
