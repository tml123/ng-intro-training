### Getting Started

Welcome to our Angular tutorial!

The tutorial today is meant to be a basic overview of the Angular development process.  We will create a very basic application to become familiar with a few core Angular "components" and techniques.  

In order to make development go smoothly, we'll be utilizing [Stackblitz](https://stackblitz.com/).  Each lesson will have a Stackblitz instance on the right with some notes for guidance about what we are building on the left.  We'll also link you to further reading in the [Angular Docs](https://angular.io/docs).

Stackblitz enables us to use a few convenient tools - such as the [Angular CLI](https://angular.io/cli) - directly in our browser.  We won't cover the CLI in depth here, but we'll touch on some basics so that you understand the basic features.

### Angular CLI

> The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications.

To start a new application and to run a new application

```sh
npx ng new myApplicationName
cd myApplicationName
npx ng serve
```

Suppose you want to create a new component inside of your new project:

```sh
npx ng g c components/myFirstComponent
```

A few things are noteworthy here.  `npx ng g c` is shorthand for `ng generate component`.  `components/myFirstComponent` is the directory path that the `ng generate` command will follow.  Your component will be placed in a subdirectory called `components` along with files for styling and testing.  The component is also "declared" in the nearest module, i.e. `app.module.ts`.  In order to build the remainder of your project, you can follow the same flow for creating each component, service, pipe, etc. required for the project.

Now that we've touched on the basics of the CLI, let's write some code.

[Next Lesson](/lesson-2.md)
