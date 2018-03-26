# sun-static
designs, mock-ups and static-pages for the Cornell Daily Sun website. 

## Setting up this repository
First, in command line, navigate to a location in your file system where you'd like to keep the files. Click the clone/download button on the repository landing page, and copy the link. In command line, type **git clone** and paste the link you copied. This will download the files and establish a local respository. Woo, now you can start coding. 

## How to use Git. 
If you have Git installed on your computer, you can access it from the command-line. However, Git commands will only work within Git repositories. Makes sense right? We use git and github mainly to share code on collaborative projects and back up our projects to an online repository. The basic Git workflow includes adding changes, committing those changes, pulling other people's changes from the remote repository, and pushing your changes to the remote repository.

#### some vocab:
+ **remote repository**: the one hosted somewhere on GitHub's servers. You communicate with this repository mainly via the **push** and **pull** commands. 
+ **local repository**: the one hosted in the file system on your computer. This is where your files that you are coding in are stored. You interact with this one mainly via the **add** and **commit** commands. 

### Git commands (important/basic ones, there are lots more):
1. **git add**: use this command to add files you edited to the set you will send to the remote. Sending all the files each time is unecessary. We just want all the files that have been changed. To do this, use **git add --all**. Do this first when preparing to send changes 

2. **git commit**: use this command to tell Git you have finished collecting the files you want to send, and they are ready to send. Write a message that will accompany your commit like: **git commit -m "add feature X"**. You want your commit messages to be concise and informative. By convention, they are written in the present tense and don't have periods at the end. Do this second when preparing to push.

3. **git pull**: use this command to get code from the remote repository. Git won't let you push before you pull so do this 3rd. You may have conflicts with the code you pull. The easiest way to resolve these issues, called **merge conflicts**, is to compare your code to the code you pulled and decide which you want to keep. Remove the duplicate or unecessary code, and commit again. 

4. **git push**: This sends your work to the remote repository so other people can pull it. Do this last. 

