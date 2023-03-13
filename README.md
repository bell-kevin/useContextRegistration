# Registration with useContext

Access to data in a React Native project can be handled by passing props, but that is only one mechanism. Another is to use the useContext, a React application, another is to use the Redux library, and more. You will learn about useContext and Redux in the Udemy videos, but you will be using useContext in the rest of this course. After watching a brief introduction about useContext, which was implemented in a React project, practice the concepts in a React Native project here.

You previously created a project to practice stack navigation, which had a home page and 3 color pages. You need navigation to move between screens to practice using context, so you will use that color project as the starting point here. MAKE A COPY of that previous project.

In this project, you will create a very simple registration verification. If a user had entered data about their name, email, and phone, this app would ask them to verify that data. It doesn't have any mechanism for actually responding, to verify or change, that may happen later. It provides a basic experience with context.

### Preparation

Do some housekeeping first. Remove the images on the 3 color pages. In the navigation setup, change the names of the screens to "Registration" for the home screen, and "Name", "Phone", and "Email" for the other 3 pages. In the Home screen, be sure to change the navigation to use those names, rather than the color names from the previous project. The titles on each page also need to change to "Registration", "Name", "Phone", and "Email". On each color page, display a header that says "Verify your (name/phone/email)", and display text below that shows that data from the context.

![p](https://github.com/bell-kevin/useContextRegistration/blob/main/readMeExamplePictures/context-register.PNG) ![p](https://github.com/bell-kevin/useContextRegistration/blob/main/readMeExamplePictures/context-name.PNG)

![p](https://github.com/bell-kevin/useContextRegistration/blob/main/readMeExamplePictures/context-phone.PNG) ![p](https://github.com/bell-kevin/useContextRegistration/blob/main/readMeExamplePictures/context-email.PNG)

### Set up the Context

Create a folder in the project named "context", and a file in that folder named "userContext.js". In the intro video, the context was defined in the App.js file -- here, it will be in its own file. In that file, import createContext from React. This file will contain the definition of the structure of the data for this context. Use createContext to declare an object with the fields "firstName", "lastName", "phone", and "email". Declare them with null strings. Create this context in the constant variable UserContext, and export it, similar to the intro video.

![p](https://github.com/bell-kevin/useContextRegistration/blob/main/readMeExamplePictures/context-declare.PNG)

### App.js File

In that video, the content of the context is a single variable, "name", which was set with App.defaultProps. In your project, in App.js, declare a constant variable named "initialState", which assigns values to the fields in the object of the context. Use your own first and last names; you can use your own phone number and email, or make it up, for those fields.

![p](https://github.com/bell-kevin/useContextRegistration/blob/main/readMeExamplePictures/context-setup.PNG)

To make the context "globally" available, wrap the stack navigator with the context provider component. The file has a NavigationContainer, then a Stack Navigator. Put the Provider between those, so that everything in the stack has access to the context. The Provider requires a "value" parameter -- use the initialState variable for that value. See the code for the App.js file in the intro video for guidance.

### Three files

 In each of the color files, import useContext from React, and import UserContext from its file, userContext.js. In the function for the file, declare a context variable with useContext. For example, if working in the file about names, use the firstName and lastName values in the context. The variable that uses the context might be named "userNameCtx" -- that "ctx" helps to identify this as the context, not the actual names. It would look like this to declare the variable that accesses the context:

    const userNameCtx = useContext(UserContext);

Display the first name with code like this:

    {userNameCtx.firstName}

Display the appropriate text and context values on each of the three screens.

Note: You may change the colors on each page if you wish, for example, making each one the same color. You may not use black text on white background.

 

Take 4 screenshots, as shown above.

Submission: Zip together the root folder and the 4 screenshots, and submit the single zipped folder.

## How to:

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

https://reactnative.dev/docs/intro-react

Check out App.js here in the code files for the computer algorithm code.

## Reading: Storing Projects

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
