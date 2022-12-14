// File system promise API

// const fs = require('fs/promises');

//ES6 mn import aya
import * as fs from 'fs/promises';

//creating directory path should be there

try {
    await fs.mkdir('/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch5/demo')
    console.log("Directory created...")
} catch (error) { console.log(error) }

//in the directory folder is not created then
// try {
//     await fs.mkdir('/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch5/test/demo1', { recursive: true })
//     console.log("Directory created...")
// } catch (error) { console.log(error) }

//If I want to read the file from the directory
// try {
//     const files = await fs.readdir('/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch5/test');
//     for (const file of files)
//         console.log(file);
// }
// catch (error) {
//     console.log(error)
// }


//Remove directory : directory should be empty

// try {
//     await fs.rmdir('/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch5/test/demo1');
//     console.log("directory deleted successfully")
// }
// catch (error) { console.log(error) }

//create and write files

// try {
//     await fs.writeFile('readme.txt', "Bilal NodeJS")
// }
// catch (error) {
//     console.log(error)
// }

//Read File
//It returns buffer not actuall data
// try {
//     const data = await fs.readFile('readme.txt');
//     console.log(data)
// }
// catch (error) { console.log(error) }

//Read Actuall data 
// try {
//     const data = await fs.readFile('readme.txt', 'utf-8');
//     console.log(data)
// }
// catch (error) { console.log(error) }

//Append data into file to add data in the same file
// try {
//     await fs.appendFile('readme.txt', " I am a developer");
// }
// catch (error) { console.log(error) };


//Copy file
// try {
//     await fs.copyFile('readme.txt', " info.txt");
//     console.log("File copied successfully")
// }
// catch (error) { console.log(error) };

//Get file information
// try {
//     const stats = await fs.stat('/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch5/test/emp.js');
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//     console.log(stats)
// }
// catch (error) { console.log(error); }