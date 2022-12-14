//File system asynchronous API
import * as fs from 'fs';

//Create directory, path should be there
fs.mkdirSync("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch7/test/demo")

// fs.mkdirSync("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch7/geek")

// fs.mkdirSync("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch7/test1/demo1", { recursive: true })

//read content of directory

// const files = fs.readdirSync("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch7/test");
// for (const file of files)
//     console.log(file);

//Remove directory, path should be empty
// fs.rmdirSync("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch7/test/demo");
//write file and create
// fs.writeFileSync("readme.txt", "Hello bilal");