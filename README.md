`bower install angular#1.2.27`

AngularJS is a Model-View-Controller framework. The view is what the user sees (DOM), the controller is what the user interacts with (JavaScript Classes), and the model is what binds the two together: feeding imformation from one to update the other (data stored in object properties). 

Keep in mind:

1. Don't be frustrated when the learning curve steepens drastically. This is the same for everyone. 
2. Dependency Injection - is a key concept to get your head around early on. 
    2.1. To avoid headaches, learn and plan your modules before you start.
3. $scope - understand how it works. This point is particularly important when breaking large controllers in to sub-controllers. 
    3.1. fyi - angular creates a scope implicitly in ng-repeat. 
4. Put control logic in the directive controller, and DOM logic in the link function; scope sharing is the glue. 
5. AngularJS Router works like a server-side router. When a route is hit it injects a defined template into ng-view and the defined controller can be instantiated. 

Data Binding

- This is the ability to make your html reflect the data that you pass to attributes. It allows you to write something in one place and have it instantaneously watched and parsed by angular. 
- If Controllers are defined but the details of their scope are not, then the a controller sibling will bind over the others - by inheritence.
- The significance of ng-model="something.something" - having just message means there is no binding across instances because they are separate. data.message -> when the message is changed it is just the message on the data and so it is reflected at everyinstance of data.message.
    - ng-model is the way of allowing dynamic alteration of a data-binding, rather than simply displaying the data-bind with the use of curly braces.

Dependency Injection

- Quite straightforwardly this is the idea of injecting dependencies rather than having to define them in functions. Key dependencies that can be injected straight into things are $scope, $location, $watch etc. 






