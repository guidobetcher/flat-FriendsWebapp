export class RootUrl {
    // urlUser = 'http://147.83.7.155:3702/user/';
    rootUrl = 'http://localhost:8080/';
    constructor(serviceUrl: string) {
      this.rootUrl = this.rootUrl + serviceUrl;
    }
}
