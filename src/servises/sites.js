export const sitesService = {
    query,
    getSiteById
}
const sites = [
    {
        name: 'AudioFly',
        id: 'audiofly',
        ip: 'https://audiofly.herokuapp.com/',
        github: 'https://github.com/Noamzil/AudioFly',
        imgName: 'audiofly',
        desc: 'This app, in the inspiration of spotify, allows you not only to search your favorite songs, create and organize your own playlists out of them, and listen and follow other people\'s playlists. But also allows a shared listening. The App is supported by a full Back-end, wich in it\'s own makes use of a mongoDB database. The project was the finale project in a Full-Stack course, and was done by Noam Zilberman, Elior Papo and myself',
        uses: {
            frameworks: ['Vue.js'],
            serverSide: ['node.js', 'MongoDb'],
            style: 'Sass',
            others: ['VueX', 'axios', 'express', 'socket.io']
        }
    },
    {
        name: 'Mister Bit',
        id: 'mister-bit',
        ip: 'https://orzisko.github.io/masterBit/',
        github: 'https://github.com/OrZisko/masterBit',
        imgName: 'masterBit',
        desc: 'My first interaction with the Angular framework. The app is designed to simulate an account that holds money and shows it in the currency of dollars and bitcoins. And allows an exchange of money between list of friends',
        uses: {
            frameworks: ['Vanila.js', 'Html'],
            style: 'CSS',
        }
    },
    {
        name: 'Meme Generator',
        id: 'meme-generator',
        ip: 'https://orzisko.github.io/Meme-Gen/',
        github: 'https://github.com/OrZisko/Meme-Gen',
        imgName: 'mimGen',
        desc: 'This is an app for creating memes, so that you can add your own images and add writings on them to make a bit of fun with your friends. This project wat done as part of a Fullstack course, and was done only a month after my first encounter with the language.',
        uses: {
            frameworks: ['Vanila.js', 'Html'],
            style: 'CSS',
        }
    },
    {
        name: 'Appsus',
        id: 'appsus',
        ip: 'https://OrZisko.github.io/Appsus/',
        github: 'https://github.com/OrZisko/Appsus',
        imgName: 'appsus',
        desc: 'This is a site that combines two usefull apps in the insipraition of google\'s Gmail and Google Keep. The Email app helps you to organise your emalis (simulate as if there was an actual active email address), by importance, category and read and unread. And the keep app gives you an opprotunity to create your own persolnal clip board. To save massages for yourself, lists, images, drawing and more. With the capabillity to add tags on them for order and set an importance. This project wat done as part of a Fullstack course, and was my first experience with Vue.js. For the project i used Vue.js framework and no other additional external libraries. The project was a collaboration with Gilad Abrevaya',
        uses: {
            frameworks: ['Vue.js'],
            style: 'CSS',
            others: ['VueX']
        }
    },
    {
        name: 'Mine Sweeper',
        id: 'mine-sweeper',
        ip: 'https://orzisko.github.io/Mines-Sweeper/',
        github: 'https://github.com/OrZisko/Mines-Sweeper',
        imgName: 'mineSweeper',
        special: 'Not For Mobile!',
        desc: 'This is my own rendition for the classic game mine sweeper, and was my first ever full functional app in JS, after only 2 weeks of learning the language. With every move effecting the game in varied and complex conditions, it was a real fun challenge to accomplish',
        uses: {
            frameworks: ['Vanila.js', 'Html'],
            style: 'CSS',
        }
    },

]


function query() {
    return sites
}

function getSiteById(id) {
    return sites.find(site => site.id === id)
}