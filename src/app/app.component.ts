import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as Twitter from 'twitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // store search results
  results = '';

  // Event triggered when user types into the text box
  onKeyPress(event: KeyboardEvent) {

    console.log("key pressed: " + (<HTMLInputElement>event.target).value + "\n");

    // set the client info - for app authentication
    var client = new Twitter({
      consumer_key: 'DNFEMaZupgwcEC9fSygSHaRqX',
      consumer_secret: 'JV7THeyYZQL8keervqYjSyEfXJmV9vn7NxLGjlZo54734QgKd1',
      access_token_key: '3428088196-4irQNQxlvJ2zYYVxw9nY6zyXNMCKHxCqO3Gj94L',
      access_token_secret: 'APBdJKjJ3jhI0mslZcyTpkYJgVUoinpDp9I9dsZYBuWfv'
    });

    // set the search query 
    let userQuery = {query: (<HTMLInputElement>event.target).value};

    // request data from Twitter API
    client.get('users/search', {q: 'userQuery', page: 1, count: 10}, function(error, searchResults, response) {
      if (!error) {
        console.log("--- Search results ---\n");
        console.log(searchResults);
        console.log("--- raw response ---\n");
        console.log(response);
      } else {
        console.log(error);
      }
    });

  }
 

 




}
