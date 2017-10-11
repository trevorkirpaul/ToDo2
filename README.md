# ToDo2 

This is my second To Do List featuring much cleaner vanilla JS code than the first.

***

A big thing that I realized this time concerned how I dealt with functions interacting with the dynamically created tasks.

Insead of needing to use `closest()`, I could just use the variables for the dynamic DOM elements that I already made within that main `Create()` function.

This not only saves time but makes the code more readable and less error prone.

I believe this works because the variables of all new task DOM elements are instances and directly and specifically represent th DOM elements within that newly created task.

I have a feeling that there's a better way to create new DOM elements en masse but I'm still happy with this code.

This is definitely my last ToDo List for now and I dont plan on refactoring this one.

I'm still not sure what my next project will be. I plan on using 'local storage' next time to save content when the user leaves the page. I also want to get familliar with JSON, objects in general and hopefully database interactions. I really want to make something that utilizes an API so that I'll have tons of information to organize and manipulate.

***

##git test

###10/11/2017

I'm learning git/bash. I created a local folder, ran `$ git init` and set its remote to this repo. Then I ran `$ git pull origin master` to download the repo to my computer. It took me a few tries to figure this out as I kept runnint `$ git pull` to no avail.

I then created a new branch using `$ git branch gitTest` although seconds later I discovered the command to create and checkout a new branch in on line by adding `-b` before the new branch name.

After entering the new branch I added the updated README to the staging area and pushed to gitHub.


**Thanks if you read this!**
