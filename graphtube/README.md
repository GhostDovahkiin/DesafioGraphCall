<!--
    Thank you for reading this
    If you´re having any problem with this project please contact in the issues session
-->

<!-- VARS -->

[license-badge]: https://img.shields.io/github/license/ghostdovahkiin/DesafioGraphCall?color=%238257E5
[star-badge]: https://img.shields.io/github/stars/ghostdovahkiin/DesafioGraphCall?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/ghostdovahkiin/DesafioGraphCall?color=%238257E5
[codacy-badge]: https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db
[vercel-url]: https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world
[license-url]: https://github.com/ghostdovahkiin/DesafioGraphCall/blob/master/LICENSE
[issues-url]: https://github.com/ghostdovahkiin/DesafioGraphCall/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]: https://www.npmjs.com/
[expo-url]: https://expo.io/

<!-- VARS -->

<div align="center">

<img width="500px" align="center" src="https://www.graphcall.com/resources/images/external/logo-dark.png"></img>

</div>

<br>
<p align="center">
    Fetch video results and play from Youtube Data API 🚀
</p>

<div align="center">

[![License][license-badge]][license-url]
![Git Stars][star-badge]
![NLW Stats][nlw-badge]
![Codacy Quality][codacy-badge]
[![Deploy with Vercel](https://vercel.com/button)][vercel-url]

</div>

### Content

- [Getting Started](#Getting-Started-)
  - [Cloning](#Cloning)
  - [Requirements](#Requirements)
  - [Running](#Running)
- [Issues](#Issues-)
  - [Report](#Report)
- [Contributing](#Contributing-)
- [Todo](#Todo-)
- [License](#License-)

### Getting Started 🚀

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/ghostdovahkiin/DesafioGraphCall.git

# Access the project folder
$ cd DesafioGraphCall
```

#### Requirements

- [Yarn][yarn-url] or [npm][npm-url]

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd web
$ yarn install
```

> The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in web directory
$ cd web

# Installing depencies
$ yarn add @types/react-router-dom -D
$ yarn add axios
```

To start the server you need the database, to make migrations use the command:

```
$ yarn knex:migrate
```

> The above command is a custom command made on `package.json` file. (Ln 8, Col 5)

##### Server

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

> The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

#### Running

To start the Web Server run the command

# Run the web server

\$ yarn start

### Issues 🐛

#### Report

In case you are having any problem do not be shy to report to us in [Issues][issues-url] session.

### Contributing 🤝

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork ghostdovahkiin/DesafioGraphCall

# Clone your fork
$ git clone {your-fork-url}
$ cd DesafioGraphCall

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Then send a Pull Request that will be analyzed and approved if it helps with the project

### License 📝

This project is under the MIT license. See the [LICENSE][license-url] for more information.
