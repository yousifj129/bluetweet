
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/yousifj129/bluetweet">
    <img src="./public/thumbnail.png" alt="Logo" width="800px" height="800px">
  </a>

<h3 align="center">BlueTweet</h3>

  <p align="center">
    <br />
    <a href="https://github.com/yousifj129/bluetweet">View Demo</a>
    &middot;
    <a href="https://github.com/yousifj129/bluetweet/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/yousifj129/bluetweet/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is a twitter inspired social media application. 





### Built With
* EJS
* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* Cloudinary
* MongoDB
* mongoose
* morgan
* multer
* bcrypt.js
* dotenv
* method-override





<!-- GETTING STARTED -->
## Getting Started

Fork this repository and run the game, and follow these steps:
- install the packages: ```npm install```
- add the .env file and write this with your details:
```
MONGODB_URI=you can get it from your database
PORT= probably 3000
SESSION_SECRET= anything random but should stay a secret
CLOUDNAME= cloudinary name
APIKEY= cloudinary api key
APISECRET= cloudinary api secret
```


<!-- ROADMAP -->
## Roadmap

- [x] create accounts and login and update profile pictures and description.
- [x] post text and images if needed.
- [x] comment on a post and like or dislike a post.
- [x] follow other users and see their content on the "following" feed page
- [x] search for posts






<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


### Top contributors:

<a href="https://github.com/yousifj129/bluetweet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yousifj129/bluetweet" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.


<!-- ACKNOWLEDGMENTS -->
## Attributions

* Source of logo: ChatGPT


## Things I am proud of
* top posts in feed using aggregate to add a field of likes and sort posts based on it
* searching for posts and users using $regex
* learned about logical queries in mongodb such as $or and $regex and $size and $lt and many others
* did some security checks on every route that is requiring some security, such as the delete route and update

## Next Step

* Private chat with other users
* Repost a post, just like retweet in twitter
* Post videos along side images
* Ability to add multiple images and videos in 1 post
* if you follow someone and he follows you back you become "friends"
* redesign the whole project

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yousifj129/bluetweet.svg?style=for-the-badge
[contributors-url]: https://github.com/yousifj129/bluetweet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yousifj129/bluetweet.svg?style=for-the-badge
[forks-url]: https://github.com/yousifj129/bluetweet/network/members
[stars-shield]: https://img.shields.io/github/stars/yousifj129/bluetweet.svg?style=for-the-badge
[stars-url]: https://github.com/yousifj129/bluetweet/stargazers
[issues-shield]: https://img.shields.io/github/issues/yousifj129/bluetweet.svg?style=for-the-badge
[issues-url]: https://github.com/yousifj129/bluetweet/issues
[license-shield]: https://img.shields.io/github/license/yousifj129/bluetweet.svg?style=for-the-badge
[license-url]: https://github.com/yousifj129/bluetweet/blob/master/LICENSE.txt
[product-screenshot]: ./Assets/Screenshot.png
[html-url]: 
