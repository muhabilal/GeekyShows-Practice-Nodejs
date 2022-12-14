//File system call back API
import * as fs from 'fs';

//creating directory path should be there
fs.mkdir("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch6/test/demo", (error) => {
    if (error) throw error;
    console.log("directory created")
})

// fs.mkdir("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch6/geek", (error) => {
//     if (error) throw error;
//     console.log("directory created")
// })

//creating directory path is not require to be there

// fs.mkdir("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch6/test1/demo1", { recursive: true }, (error) => {
//     if (error) throw error;
//     console.log("directory created")
// })

//Read content of directory

// fs.readdir("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch6/test", (error, files) => {
//     if (error) throw error;
//     for (const file of files)
//         console.log(file)

// });

//Remove directory-directory should be empty

// fs.rmdir("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch6/test/demo", (error) => {
//     if (error) throw error;
//     console.log("Directory removed successfully")

// });

//create and write file
// fs.writeFile("readme.txt", "Hello Bilal", (error) => {
//     if (error) throw error;
//     console.log("file created successfully")

// });

//Read file
// fs.readFile("readme.txt", (error, data) => {
//     if (error) throw error;
//     console.log(data)

// });
//when readfile returns buffer

// fs.readFile("readme.txt", "utf-8", (error, data) => {
//     if (error) throw error;
//     console.log(data)

// });

//Append data into file

// fs.appendFile("readme.txt", " I am a developer", (error) => {
//     if (error) throw error;
//     console.log("Update data successfully")

// });

//Copy file

// fs.copyFile("readme.txt", "info.txt", (error) => {
//     if (error) throw error;
//     console.log("file copied successfully")

// });

//Get file info
// fs.stat("/media/bilal/5F943841302CBE71/NodeJS/GeekyShows(Practice)/Ch6/test/emp.js", (error, stats) => {

//     if (error) throw error;
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());

// })