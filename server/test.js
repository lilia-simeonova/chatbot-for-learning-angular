var Glossary = require('./glossary');


Glossary.set('angulartwo', 'Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.');
Glossary.set('angularfour', 'No much different than Angular 2, the "4" is just for semantic versioning.');
Glossary.set('angularthree', 'We skip Angular 3 in order to align with the version of the router.');
Glossary.set("angularjs", "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS is the predecessor of Angular 2.");
Glossary.set('ngFor', 'The NgFor directive instantiates a template once per item from an iterable. The context for each instantiated template inherits from the outer context with the given loop variable set to the current item from the iterable.https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html');
Glossary.set('ngmodule', "An Angular Module is a class adorned with the @NgModule decorator function. @NgModule takes a metadata object that tells Angular how to compile and run module code. It identifies the module's own components, directives and pipes, making some of them public so external components can use them.https://angular.io/docs/ts/latest/guide/ngmodule.html");
Glossary.set('animations', "Angular's animation system lets you build animations that run with the same kind of native performance found in pure CSS animations. You can also tightly integrate your animation logic with the rest of your application code, for ease of control.https://angular.io/docs/ts/latest/guide/animations.html");
Glossary.set('ChangeDetectionStrategy ', 'Describes within the change detector which strategy will be used the next time change detection is triggered. You can learn more https://angular.io/docs/ts/latest/api/core/index/ChangeDetectionStrategy-enum.html');
Glossary.set('oninit', 'Lifecycle hook that is called after data-bound properties of a directive are initialized.https://angular.io/docs/ts/latest/api/core/index/OnInit-class.html');
Glossary.set('MVVM', 'Model–view–view-model (MVVM) is a software architectural pattern. MVVM facilitates a separation of development of the graphical user interface – be it via a markup language or GUI code – from development of the business logic or back-end logic (the data model).https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel');
Glossary.set('MVC', 'Model–view–controller (MVC) is a software design pattern for implementing user interfaces on computers. It divides a given software application into three interconnected parts, so as to separate internal representations of information from the ways that information is presented to or accepted from the user.https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller');
Glossary.set('rxjs', 'RxJS ("Reactive Extensions") is a 3rd party library, endorsed by Angular, that implements the asynchronous observable pattern.https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs');
Glossary.set('ionic', 'Mobile SDK for developing native and progressive web apps with ease.https://ionicframework.com/docs/');
Glossary.set('ondestroy','Lifecycle hook that is called when a directive, pipe or service is destroyed.https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html');
Glossary.set('onchanges','Lifecycle hook that is called when any data-bound property of a directive changes.https://angular.io/docs/ts/latest/api/core/index/OnChanges-class.html');
Glossary.set('ngzone','An injectable service for executing work inside or outside of the Angular zone.https://angular.io/docs/ts/latest/api/core/index/NgZone-class.html');
Glossary.set('ngmoduleref','Represents an instance of an NgModule created via a NgModuleFactory. NgModuleRef provides access to the NgModule Instance as well other objects related to this NgModule Instance.https://angular.io/docs/ts/latest/api/core/index/NgModuleRef-class.html');
Glossary.set('zonejs','A Zone is an execution context that persists across async tasks. You can think of it as thread-local storage for JavaScript VMs.https://github.com/angular/zone.js/');
Glossary.set('onpush','OnPush means that the change detector\'s mode will be set to CheckOnce during hydration.');
Glossary.set('viewchild','You can use ViewChild to get the first element or the directive matching the selector from the view DOM. If the view DOM changes, and a new child matches the selector, the property will be updated.https://angular.io/docs/ts/latest/api/core/index/ViewChild-decorator.html');
Glossary.set('errorhandler','The default implementation of ErrorHandler prints error messages to the console. To intercept error handling, write a custom exception handler that replaces this default as appropriate for your app.https://angular.io/docs/ts/latest/api/core/index/ErrorHandler-class.html');
Glossary.set('bindtocontroller',' Component inputs and outputs should be bound to the controller instead of using the $scope.')
Glossary.set('apply',' While change detection still occurs after every event, no one needs to call scope.$apply() for that to happen. This is because all Angular 2 code runs inside something called the Angular zone. Angular always knows when the code finishes, so it also knows when it should kick off change detection. The code itself doesn\'t have to call scope.$apply() or anything like it.https://angular.io/docs/ts/latest/guide/upgrade.html#!#change-detection');
Glossary.set('viewcontainerref','Represents a container where one or more Views can be attached. The container can contain two kinds of Views. Host Views, created by instantiating a Component via createComponent, and Embedded Views, created by instantiating an Embedded Template via createEmbeddedView.https://angular.io/docs/ts/latest/api/core/index/ViewContainerRef-class.html');
Glossary.set('httpmodule','The HttpModule is not a core Angular module. It\'s Angular\'s optional approach to web access and it exists as a separate add-on module called @angular/http, shipped in a separate script file as part of the Angular npm package.https://angular.io/docs/ts/latest/tutorial/toh-pt6.html');
Glossary.set('universal','Angular Universal is a library that can be used to render an Angular 2 app on the server. https://github.com/angular/universal/blob/master/DOCUMENTATION.md');
Glossary.set('two-way-binding','We often want to both display a data property and update that property when the user makes changes. On the element side that takes a combination of setting a specific element property and listening for an element change event. Angular offers a special two-way data binding syntax for this purpose, [(x)]. The [(x)] syntax combines the brackets of property binding, [x], with the parentheses of event binding, (x).https://angular.io/docs/ts/latest/guide/template-syntax.html#!#two-way');
Glossary.set('tsconfig','Browsers can\'t execute TypeScript directly. Typescript must be "transpiled\" into JavaScript using the tsc compiler, which requires some configuration. Typically, you add a TypeScript configuration file (tsconfig.json) to your project to guide the compiler as it generates JavaScript files.https://angular.io/docs/ts/latest/guide/typescript-configuration.html');
Glossary.set('migration','Check the detailed guide on how to upgrade on the latest version: https://angular.io/docs/ts/latest/guide/upgrade.html');
// Comparisons:

Glossary.set('component-angular-module', 'You write Angular applications by composing HTML templates with Angularized markup, writing component classes to manage those templates, adding application logic in services, and boxing components and services in modules.');
Glossary.set('component-directive','Components are the most common of the three directives - components, structural directives and attribute directives.');
Glossary.set('service-provider','A service is nothing more than a class in Angular. It remains nothing more than a class until we register it with an Angular injector. A provider provides the concrete, runtime version of a dependency value. The injector relies on providers to create instances of the services that the injector injects into components and other services.');
Glossary.set('service-class', 'A service is nothing more than a class in Angular. It remains nothing more than a class until we register it with an Angular injector.')
Glossary.set('class-angular-module','The Angular module — a class decorated with @NgModule — is a fundamental feature of Angular.https://angular.io/docs/ts/latest/guide/architecture.html#!#angular-modules-vs-javascript-modules');
Glossary.set('angulartwo-angularJs','AngularJS is the predecessor of Angular 2.');
Glossary.set('angulartwo-angularthree','We skip Angular 3 in order to align with the version of the router and will move directly to Angular 4');
Glossary.set('angulartwo-angularfour','No much different than Angular 2, the "4" is just for semantic versioning.');
Glossary.set('angulartwo-react', 'Angular is a development platform. React is a JavaScript library for building user interfaces.');
Glossary.set('angularfour-react', 'Angular is a development platform. React is a JavaScript library for building user interfaces.');
Glossary.set('change-detection', 'By using dirty checking Angular detects changes in the state of the user interface. Later based on the detected changes, the framework updates the view.')
Glossary.set('$digest','In AngularJS after evaluating the expression, the $apply method performs a $digest. In the $digest phase the scope examines all of the $watch expressions and compares them with the previous value. ')


Glossary.save();

console.log(Glossary.get('angularjs'));