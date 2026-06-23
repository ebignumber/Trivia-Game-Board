<!-- Improved compatibility of back to top link: See: https://github.com/ebignumber/Trivia-Game-Board/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<br />
<div align="center">
  <a href="https://github.com/ebignumber/Trivia-Game-Board">
    <img src="images/screenshot.png" alt="Screen Shot Of Project">
  </a>

  <h3 align="center">Trivia Game Board</h3>

  <p align="center">
    A basic trivia game board for family game night
    <br />
    <a href="https://github.com/ebignumber/Trivia-Game-Board"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ebignumber/Trivia-Game-Board">View Demo</a>
    &middot;
    <a href="https://github.com/ebignumber/Trivia-Game-Board/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/ebignumber/Trivia-Game-Board/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

In my family we sometimes play a trivia game similar to <i>Jeoparty!</i> At first, my parents, who have very little experience with tech, had to struggle with a spreadsheet to color spaces. This project is supposed to provide a more user friendly alternative with a game board where spaces can be cleared by simply clicking on them. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is simply made with HTML, CSS, and Vanilla Javascript. Nothing else.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

All you need is a browser like Chrome, Edge, or Firefox. Nothing else is needed.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Start your file manager and open index.html

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

When you first open the page, you will be greeted with a template board starting on round 1, topics 1-5, and none of the spaces filled. 

You can edit the templates by clicking on the "Add/Edit Topics" button. This will bring you to a menu in which you can delete, change, and add topics.

Once you exit the menu, you should see the new topics on the board. You can then fill spaces by simply clicking on them. If you make a mistake and click on a space you didn't mean to, simply click on it again.

After all the spaces are filled (or you just want to rush through the game), you can either click the "Reset" or "Change Round" Button. Clicking on Reset will prompt you to click another button to confirm the reset and you will see the board just as you did when you first opened the file. "Change Round" will increment the round by 1, multiplying the scores by the round number.

What if you want to save the board for later use? Not to fear; this project takes advantage of localStorage to save your board so you can access it whenever you need to. If that's not good enough, you can also export and import the game data as json files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Dark Mode
- [ ] Implement Responsive Design For Mobile Devices
- [ ] Have Import Button Request JSON File

See the [open issues](https://github.com/ebignumber/Trivia-Game-Board/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/ebignumber/Trivia-Game-Board/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ebignumber/Trivia-Game-Board" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
I would like to give special thanks to the sites that I use often, and what made this project possible for me to make: 

[Code for file exporting]: https://www.javaspring.net/blog/how-can-javascript-save-to-a-local-file/
[W3schools]: https://www.w3schools.com/jsref/default.asp
[FreeCodeCamp]: https://www.freecodecamp.org

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ebignumber/Trivia-Game-Board.svg?style=for-the-badge
[contributors-url]: https://github.com/ebignumber/Trivia-Game-Board/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ebignumber/Trivia-Game-Board.svg?style=for-the-badge
[forks-url]: https://github.com/ebignumber/Trivia-Game-Board/network/members
[stars-shield]: https://img.shields.io/github/stars/ebignumber/Trivia-Game-Board.svg?style=for-the-badge
[stars-url]: https://github.com/ebignumber/Trivia-Game-Board/stargazers
[issues-shield]: https://img.shields.io/github/issues/ebignumber/Trivia-Game-Board.svg?style=for-the-badge
[issues-url]: https://github.com/ebignumber/Trivia-Game-Board/issues
[license-shield]: https://img.shields.io/github/license/ebignumber/Trivia-Game-Board.svg?style=for-the-badge
[license-url]: https://github.com/ebignumber/Trivia-Game-Board/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
