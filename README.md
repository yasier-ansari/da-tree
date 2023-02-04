<p align="center">
  <a href="" rel="noopener">
  <img src="./public/hack-ccelerate.webp" />
 </a>
</p>
<h3 align="center">Da-tree</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-mlh-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://da-tree.vercel.app)
[![GitHub Issues](https://img.shields.io/github/issues/yasier-ansari/da-tree/issues.svg)](https://github.com/yasier-ansari/da-tree/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yasier-ansari/da-tree.svg)](https://github.com/yasier-ansari/da-tree/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<h4 align="center"> Introducing da-tree, the next-generation linktree alternative that lets coders and tech enthusiasts build their own custom linktree-style websites in a breeze. No more generic templates or clunky interfaces - da-tree gives you the power to spin up a da-tree website by simply changing the .json file. 
</h4>
<br/>
<h4>With da-tree, you have complete control over your website's look and feel. Whether you want to tweak the CSS using TailwindCSS, create custom components, or dive into the code and learn Next.js, the choice is yours. Whether you're looking to showcase your portfolio, promote your business, or share your passions with the world, da-tree makes it easier than ever. So why wait? Showcase the world your potential through da-tree today!</h4>

## 📝 **Table of Contents**

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 **Problem Statement** <a name = "problem_statement"></a>

All skill levels, ranging from beginners to veteran developers, were invited to attend these Hackathons where they were free to be inspired by the themes provided or let their creativity soar in any direction they choose. Building on the themes was encouraged, but having fun and allowing imagination to flourish was prioritized. In conclusion, there were no creative limitation on the problem statement.

## 💡 **Idea / Solution** <a name = "idea"></a>

### **Education & Tech**

##### **_Empowering the Next Generation of Web Developers: with Nextjs, TailwindCSS, and Typescript_**

As the world of technology evolves, so too does the landscape of web development. With the rise of Nextjs, TailwindCSS, and Typescript, it's no wonder that aspiring web developers are eager to dive in and master these highly sought-after tools.

> 1052 Major company like Netflix, Apple, Nike, TikTok, Uber, imdB, Even Linktree uses NextJs
> <br/>
> around 70% of above company uses TypeScript which is manages by microsoft
> <br/>
> Design Centered Websites like Stripe, Medium Blog, StarBuck, Twitch, Netflix uses TailwindCSS as their CSS.

All of the above facts points to one thing, that these technologies are soon gonna be the top cream of the web development domain. Thus to educate the masses, we made this project.

Our mission is to provide a launching pad for those just starting out on their web development journey. With a focus on these cutting-edge technologies, students can not only build their own personal website, but they'll also gain hands-on experience with the latest and greatest in web development.

Think of it as killing two birds with one stone. Not only will you have a stunning online presence to showcase your work and profile, but you'll also be well on your way to becoming a seasoned web developer.

It brings us immense joy to be a part of this journey and to watch as our learners unleash their full potential. So, to all our aspiring web developers, we say: Get ready to soar! 💖

## ⛓️ **Dependencies / Limitations** <a name = "limitations"></a>

- **From a wider perspective, our project has no external or logical dependencies.**

> As our project is basically an improved template, we can proudly say that there are no dependencies whatsoever. Whoever wishes to showcase his portfolio and his work through social media links, can do so with no to minimal work.

- `except some basic Technical Knowledge is needed`

> What we mean by that is, the user who is trying to make his da-tree link, can do so if he has basic knowledge of github pull, fork, and vercel deployment. As mentioned above, our project is specifically made for coders, so that they will not only have a ready made template but they can also customize if using nextJs and tailwindcss. If they don't have that knowledge they can surf through our code and read some tailwindcss blog which will help they customize the site according to their likeability.

## 🚀 **Future Scope** <a name = "future_scope"></a>

Due to the only dependency being the necessity of technical knowledge, we can add a database server and custom server for every user to better take care of his/her customizability without the need of manually nextJs and tailwindCSS.
Once we do this, our project would be competing in the general audience, which as of now is only for programmers or someone with some programming knowledge

## 🔮 **Prerequisites**

- 🟢 IDE like **_[VS Code](https://visualstudio.com/)_** is recommended
- 🔵 Github Account
- 🟠 Recommended web-hosting **_[vercel](https://www.vercel.com/)_** Account

`if You're Reading this, probability is that you already have above above recommended things at your service`

## 🏁 **Getting Started** <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

- ### **_Clone/Fork Repo_**

```
    git clone https://github.com/yasier-ansari/da-tree.git
```

> or you can just fork this repo with your own GitHub account

Above step will get you folder like this

```
da-tree
└───component
|    └───...All component
|
└───pages
|    └───    ...home page and some boilerplate configure files
|
|   public
|   └───    ... all the images and website favicon
|
│   styles
|   └───global.css
│
|   ... other config files
|
|   data.json      <!-- IMPORTANT FILE --/>
└
```

- ### **_Install in local machine_**

open terminal from your da-tree directory and paste the following commands

```
npm i
<!-- installs all packages and dependencies --/>

npm run start
<!-- spins up a local terminal --/>
```

- ### **_Update your data.json_**

> make appropriate changes to this file so that the website can properly display your profile

```
{
    "name": "...your Name (e.g. Keanu Reeves )",
    "at": "... your tag (e.g. @keanu-rvs )",
    "headProf": "... your profession (e.g. Actor) ",
    "prof": [
        "Profession1",
        "... list max 3 headings (e.g. Producer, singer, philanthropist) ",
    ],
    "subHead": "... you subHeading (e.g. I am a down to earth person that is also loved by almost everyone )  ",
    "img": "... your image ( e.g. /dummy.png )",

    <!--- remember to include that image in /public/ folder otherwise it wont how up ---/>
    <!--- or you can use internet images like 'https://pbs.twimg.com/profile_images/930686889778085889/F1ijZJam_400x400.jpg'  ---/>

    "links": [
        {
            "title": "portfolio website",
            "url": "https://github.com/yasier-ansari/da-tree",
            "img": "/dummy.png"
        },
        .......
        {
            "title": "...link title (e.g. My Medium BLog )  ",
            "url": "...link (e.g. 'https://medium/keanu-23/my-blog') ",
            "img": "... link image ( follow the same procedure as "img" property above 👆 )"
        }
    ],
    "socials": [
        {
            "linkName": "instagram",
            "url": "https://github.com/yasier-ansari/da-tree"
        },
        ....
        {
            "linkName":"...social media platform ( e.g. twitter, github,e.t.c know more about it below ) "
        }
    ],
    "webLink": "... your website link ( more info in deployment section ) ",
    "comp": "...your current company (e.g. Google)  ",
    "compUrl": "...your comapnys Link ( e.g. https://linkedin.com/google/ )  "
}
```

Make sure to read the [customize](#customize) section to better know how to store your images

- ### **_Deployment_** <a name = "authors"></a>

you can deploy this however you like , wether on heroku or some other hosting website. But we recommend you to host this nextJs website on its native hosting platform **_[vercel](https://www.vercel.com/)_**

    - create your vercel account
    - link your github repository
    - deploy your site

> just the above steps will get you your own da-tree website in 5 minutes (at most)

Now, coming to the above query , what to fill in website link ?

First, perform the given steps

- open vercel dashboard
- choose your da-tree project
- Check the domain link and copy it
- Copy the link

_*Now paste this url in data.json `"webLink" : "...paste here"`*_

and Voila, you have completed the data.json updation 🎊
if you want to tweak your images , continue to the below section, otherwise you can skip it

## 🎈 **Customize** <a name="customize"></a>

- ### **_image_**

It is advised that you store every image in `/public` folder with webp format, as it is low in size and scales better with websites
<br/>
( if you want to change your image format to `webp`, use this website [image converter](https://cloudconvert.com/) )

```
    <!-- always link images with `/` --/>

    ...
    "img":"/fileName.webp",
    ...

    <!-- the above path means that the file `fileName.webp` is present in `/public` folder --/>

```

> nextJs renders static images and other files through `/public` folder, so abide by that rule.

Always try to name your main profile picture as `main.webp`
otherwise you'll have to change the second line of `component/mainSec.tsx`

- before:
  `import mainPfp from '../public/main.webp'; `

- after:
  `import mainPfp from '../public/<fileName>'; `

```
da-tree
└───component
|    └───.MainSec.tsx
|   ...
└
```

- ### **_CSS_**

  - **_plain CSS_** (Beginner)

  Don't know Tailwindcss, you can just use plain CSS to customize your da-tree website. . start adding your css after

  ```
  /* add your plain css here */
  ```

  All you have to do is change the `styles/globals.css` file according to your need and give appropriate classes to the components and pages file.

  - **_TailwindCSS_** (Intermediate)

  want to learn [Tailwindcss?](https://tailwindcss.com/), worry no more as tailwindcss is the best CSS framework that is used my millions of developer. It is very easy to get started with tailwindcss, after learning the basics, you can dive into the `/styles/globals.css` file ans start customizing the website to give it an unique touch that matched your vibes ✨

  - **_Component_** (Advanced)

  if you want to add new component or content, then it is adivisible to have some typescript experience. If you're shy with typescript, you can start writing your component in plain javascript too, just dont add type safety or just use `any` type whenever you feel like it 😁

## ⛏️ **Built With** <a name = "tech_stack"></a>

- [ReactJs](https://www.react.org/) - frontend Library
- [NextJs](https://nextjs.org/) - React Meta-Framework
- [TypeScript](https://www.typescriptlang.org/) - Javascript with TypeSafety
- [TailwindCSS](https://tailwindcss.com/) - Custom .less CSS library
- [NodeJs](https://nodejs.org/en/) - Server Environment

## 🪴 **Usage** <a name = "usage"></a>

## ✍️ **Authors** <a name = "authors"></a>

- [@Noru](https://github.com/yasier-ansari) - Full Project

## 🎉 **Acknowledgments** <a name = "acknowledgments"></a>

- References

  obviously I used linktree website as a reference.
