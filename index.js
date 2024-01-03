const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'What is your location?'
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Please write a short bio of yourself and professional accomplishments:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your email address:'
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Input your LinkIn URL:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Input your GitHub URL:'
        }
    ])
    .then((data) => {
        const filename = "index.html";

        const { name,
            location,
            bio,
            github,
            linkedin,
            email
        } = data;

        const indexHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio Generator</title>
            <link rel="stylesheet" href="./assets/style.css">
        </head>
        <body>
            <header>
                <h1>${name}</h1>
                <p>${location}</p>
            </header>

            <main>
                <article>
                    <h2>ABOUT</h2>
                    <p>${bio}</p>
                </article>
                <aside>
                    <h2>CONTACT</h2>
                    <ul>
                        <li><a href="mailto:${email}">Email</a></li>
                        <li><a href="${linkedin}">LinkedIn</a></li>
                        <li><a href="${github}">GitHub</a></li>
                    </ul>
                </aside>
            </main>

            <footer>
                <h3>&copy DND Web Design 2024</h3>
            </footer>
            <script src="./index.js"></script>
        </body>
        </html>`

        fs.writeFile(filename, indexHTML, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });