Implementation:

It's an Single Page Application based on Angular 6, with router module and forms module
- has 3 components, two of them have forms as asked in the problem statement
- has 1 service, which writes to / reads from an an appData object. The servie is injected into all the three components.
- wrote test specs for all components 
(except the AppComponent, for which there's an open bug/issue. https://github.com/angular/angular/issues/17477, I didn't have time to investigate further)


TO Run the app:

1) Install NodeJS, the current recommended version from nodejs.org
2) navigate to the folder my-app on any console (windows cmd, git bash, or anyother cmd terminal)
3) run npm install
4) once all the dependencies are installed, run ng serve
5) You would see a link in the log from the execution of the above step (localhost:4200 in my case). Ctrl + Click the link
