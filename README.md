## Task List Coding Exercise

### Project Requirements
Using either Flux/React or Angular (your choice), please create a single page application that
implements a todo tracking application. The mocks below are rough illustrations of the expected
functionality. Your application should be much more polished.
I should be able to load this application from a file:// URL in my browser. It should support
adding todo entries in a text entry field when the user enters text and hits the enter key, and it
should show a list of previously-added todo entries.

Do thi
Do that...

When I hover over an entry in the list, I should see a check button and a delete button. Clicking
the check button should mark the entry as complete, and clicking the delete button should
remove the entry from the list.
Completed entries should have an incomplete button and a delete button. Clicking on the check
button should mark the entry as incomplete, and clicking the delete button should remove the
entry from the list.

Do this...
Do that...
Done that...

Completed entries should be rendered in gray and with strikethrough.
Todo items should persist such that subsequent launch of app will read persisted entries.
Include a Readme that provides an overview of the application and choices you had to make.
Also, to include any setup instructions to run the application.
Include test case(s) for extra credit.
For additional extra credit, you can show notifications when the user completes a todo item.


### Requirements Not Met
Project requires Node JS and can be viewed by running following command in the project root directory.
```sh
npm start
```

Also The hover state for tasks was not added.

 

### Project Notes
 - Exercise result relied heavily on the following tutorial: [React JS Crash Course](https://www.youtube.com/watch?v=A71aqufiNtQ)
 - This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
 - No test cases have been provided.
 - Task persistance uses local storage
