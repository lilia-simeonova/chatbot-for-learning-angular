var Glossary = require('./glossary');


Glossary.set('angulartwo', 'Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.');
Glossary.set('angularfour', 'No much different than Angular 2, the "4" is just for semantic versioning.');
Glossary.set('angularthree', 'We skip Angular 3 in order to align with the version of the router.');
Glossary.set('ngIf', 'Removes or recreates a portion of the DOM tree based on an {expression}. If the expression assigned to ngIf evaluates to a falsy value then the element is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.');
Glossary.set('ngStyle', 'Update an HTML element styles.');
Glossary.set('ngFor', 'The NgFor directive instantiates a template once per item from an iterable. The context for each instantiated template inherits from the outer context with the given loop variable set to the current item from the iterable.');
Glossary.set('ngSwitch', 'Adds / removes DOM sub-trees when the nest match expressions matches the switch expression.');
Glossary.set("angularJS", "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS is the predecessor of Angular 2.");
Glossary.set('ngmodule', "An Angular Module is a class adorned with the @NgModule decorator function. @NgModule takes a metadata object that tells Angular how to compile and run module code. It identifies the module's own components, directives and pipes, making some of them public so external components can use them.");
Glossary.set('animations', "Angular's animation system lets you build animations that run with the same kind of native performance found in pure CSS animations. You can also tightly integrate your animation logic with the rest of your application code, for ease of control.");

// Introducing Angular Team:

Glossary.set('Misko', 'Father of Angular');
Glossary.set('Igor', 'Software geek changing the web with https://angular.io');
Glossary.set('Misko', 'Father of Angular');
Glossary.set('Misko', 'Father of Angular');
Glossary.set('Misko', 'Father of Angular');
Glossary.set('Misko', 'Father of Angular');

 
 
 
 
 
Glossary.save();

console.log(Glossary.get('animations'));