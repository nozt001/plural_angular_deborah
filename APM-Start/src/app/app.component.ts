import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>My First Component</div>
      <p>Build Android apps using the popular and efficient Android Studio 3 suite of tools,
       an integrated development environment (IDE) for Android developers using Java APIs. 
       With this book, you’ll learn the latest and most productive tools in the Android tools ecosystem, 
       ensuring quick Android app development and minimal…</p>
    </div>
    
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}