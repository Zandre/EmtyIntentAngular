# Emty Intent Angular Project
An empty project intented to be used as a template for when starting up new projects. Angular front-end, JWT auth, Intent Architect managed models; services; repository patterns; dependency injection etc

## JWT Authentication
One of the largest influences in this repo has been [this post](https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login) describing how to create an Angular project with JWT authentication in ASP.NET. I've had to change a few of his methods slightly to work alongside Intent and I skipped the Facebook login part completely (might still add it later on...) but for the most part it seems to work

## Intent Architect
All services; db models; patterns; dependency injection gets done with the help of [Intent Architect](https://github.com/IntentSoftware/IntentArchitect) and advise from a few fellow devs

## Angular Material
Installation [here](https://material.angular.io/guide/getting-started)
I chose the deep purple and amber theme for now

## Angular Flex Layout
Repo/installation instructions can be found [here](https://github.com/angular/flex-layout) and demos can be found [here](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

## Font Awesome
Official Font Awesome component for Angular can be found [here](https://fontawesome.com/how-to-use/on-the-web/using-with/angular)

## Toast Messages
Toast messages used in the project can be found [here](https://www.npmjs.com/package/ngx-toastr)

## Typescript error handling
Implemented global error handling for typescript errors by following [this post](https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c) and installing [stacktrace-js](https://www.npmjs.com/package/stacktrace-js)

## ng version

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 9.1.3
Node: 10.15.3
OS: win32 x64

Angular: 9.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... platform-server, router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.901.3
@angular-devkit/build-angular     0.901.3
@angular-devkit/build-optimizer   0.901.3
@angular-devkit/build-webpack     0.901.3
@angular-devkit/core              9.1.3
@angular-devkit/schematics        9.1.3
@angular/cdk                      9.2.1
@angular/flex-layout              9.0.0-beta.29
@angular/material                 9.2.1
@ngtools/webpack                  9.1.3
@schematics/angular               9.1.3
@schematics/update                0.901.3
rxjs                              6.5.5
typescript                        3.8.3
webpack                           4.42.0

```
