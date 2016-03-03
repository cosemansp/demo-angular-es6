import "angular";
import services from "./services";
import components from "./components";

class MyController {
    constructor(myService) {
        this.myService = myService;
        this.message = "hello world" + myService.add(1, 2);
    }
}

angular
    .module("myApp", [
        services,
        components
    ])
    .controller("MyController", MyController);

