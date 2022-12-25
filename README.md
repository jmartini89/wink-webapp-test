# WiNK Web Application Test

## From zero to webdev

In summer 2022 I've been invited by WiNK to partecipate a selection process: I agreed.</br>

They asked me to solve a specific exercise in 7 days, build a webapp: I panicked.</br>

This repository is the result of an intensive 24/7 rush in learning JS, ReactJS, RESTful APIs and anything webdev related from scratch.</br>
As a first time ever experience with such technologies, I think it's not that bad.</br>
I landed the job.

#

## The Exercise

### Purpose of the exercise
To evaluate code organization and style and network management.

### Request
Create a responsive single page application in React or Angular.
Use this endpoint `https://www.googleapis.com/books/v1/volumes?q={search terms}` and
show the results of the GET call.
Implement the page with a search bar and pagination of results using API parameters.
The number of the pages is dynamic and depends on the total number of elements.
The maximum limit of shown elements can be changed, accepted values are [5, 10, 15, 20].
Implement a paginator to change pages.
When you click on a book you have to show the detail page that contains the information
of the book and its link (infoLink).

### Supplied material
- API documentation:
https://developers.google.com/books/docs/v1/reference/volumes/list

### Required
-  In the list view, every row should truncate the description to 2 lines with “...”
-  Search is live, so you have to update the results for every new character inserted.
-  Use Bootstrap 4 and do a full responsive layout.
-  Share your finished app with us via GitHub URL and ideally host it on CodeSandbox.
You can easily import a GitHub project into CodeSandbox.
Good to have
-  Customize the Bootstrap theme colors using Sass
-  Use Redux
-  Use Typescript as language