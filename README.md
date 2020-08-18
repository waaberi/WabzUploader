# WabzUploader

A simple ShareX Uploader built in NodeJS

## How to use

To start using WabzUploader, download the repository as a zip file (or clone it) and then create a .env file in the root folder of the project.
Follow the same template as example.env, but make sure to put a unique token. Also change example.sxcu with the new token.

Run the <code>npm install</code> command to make sure it installs all the dependencies, and then try it!
If you want to host it on some other place than your localhost (so that anyone can see the images and files), make sure to change example.sxcu once again with the new url.

When you want to use the ShareX Uploader or you updated some info, just double click on example.sxcu again.

## Where to host if i can't pay for hosting

I recommend repl.it and Glitch. I personally tested on repl.it, and it works super well. I did not have to change anything. Glitch should work too, but i did not test in it.

## I want to use it but my storage space is limited

I will later add a way to store files in other platforms (such as imgur), and that will take less storage.
The only thing is that it will probably take some kind of database system, such as MongoDB.
So it will run out of storage at some point, but because the files themselves are not hosted on your host, it will take way less storage.
