- @Injectable
  - It insures that providers are being injected on any other class that may be depends on it.
  - automatically intantiate the provider for controller by passing service in constructor of controller.
  ```
  behind the scene
  this.
      export class Usercontroller{
          constructor(private readonly userService: UserService){}
      }
  similar to this:
      export class Usercontroller{
          const service = new UserService()
          const controller = new UserController(service)
      }
  ```
