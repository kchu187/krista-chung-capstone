# WhereBean

## Overview

WhereBean is an app that will help you document and rate your restaurant journeys, with a fun UI! With your own interactive bean map, keep track of how many times you have been to one restaurant (add a bean for each visit), and/or rate them out of 5 beans! Leave comments to remind yourself what you loved or what you would like to try next time you are back.

As for why the mascot is Beans - WhereBean is a play off words for "Where been", as in, where have you been?

Please see below under "How to Run this Project" for instructions on running WhereBean.

### The Why

WhereBean adds a fun twist to documenting your food adventures. If you're a person who eats out a lot, or even rarely eats out, it can be really easy to forget what exactly you ordered - especially if something did not stand out the first time. You ever order something again at a restaurant and then realize it was the same dish you swore you wouldn't get when you were there the first time, but you forgot what the name was? Or, the restaurant makes things differently (different sugar levels, spiciness levels, etc) and, for an example, a mild spiciness at one restuarant could be another restaurant's super hot. Wherebean provides you with space to document your experiences, so you can make the most out of each dining endeavor.

WhereBean also gives you the opportunity to visualize where you have been - by adding more and more to your bean map, you can start to visualize the places you have been - which can help a person decide where to go next. With the option to place "Wish beans", which are places a person wants to go, they can quickly pull up their Bean map if they are in the area to see if they are nearby any places they would like to try. If you live in a larger city with a growing restaurant industry (such as Calgary and Vancouver) - Wherebean can help you keep track of all the restuarants you'd like to try.

### User Profile

The average foodie (a person who loves to explore the food scene/loves trying out new food in general), a person who eats out a lot, and also people who would like to journal/document their experiences. As Wherebean will have a fun UI of "beans" on the map, it will also be for individuals who enjoy a fun twist on documenting their experiences, as well as the completionist who wants to "try them all".

### Features

- Users can search for a restaurant on their Bean Map with a search tool that utilizes the Yelp API, and upon clicking on the restaurant, a form will open up where users can rate the place out of 5 beans, and then add notes on their experience. Note that the Yelp API has a limitation of 300 API calls per day!
- Once a user is finished completing their rating/ comments, the user can then press "Add bean", which will add an image of a bean on the map where the restaurant they have just rated is.
- If a user would like to visit a potential restaurant, users can also search up a restaurant, and then press "Add as wish bean" to record the restaurant on their Bean map (with the bean asset not filled in yet).
- A user will be able to see a list of their rated beans/wish beans on the right side of the bean map in a list (or below in mobile responsiveness).
- Clicking on a restaurant in this list will open up the form that was previously filled out to rate the restaurant, and users can choose to edit this form.
- Users can sign up for an account, and log in once an account is created with a log-in/sign-up page.

### How To Run WhereBean

1.  Install all packages/dependencies with "npm install"
2.  Ensure you have mySQL installed, and modify the .env file accordingly with your database credentials
3.  Run "npx knex migrate:latest" to create the database files in mySQL
4.  Seed both data files with npx knex seed:run
5.  Start the server with the command 'node index.js"
6.  Now, with a new terminal, enter the "client" directory.
7.  Run "npm start" command
8.  Ensure you log in with the following test credentials:
    Username:brainstation@brainstation.com
    Password:Test123
9.  You will be re-directed to the beanmap, and you are free to add some beans on the map! Start by searching up a restaurant, and then click on it to procee to add a bean.
10. You can also edit existing bean entries as well by clicking on the beans on the side-bar to the right. Keep adding beans to create your very own bean map to document all your restaurant journies!

## Implementation

### Tech Stack

- CSS Library - Materials UI
  -React

#### Back-end

-Express
-Knex.js

### APIs

Yelp Fusion API for Place/restaurant data (Note that the Yelp API has a limitation of 300 API calls per day!)
Google Maps API to render a custon map

### Sitemap

Home Page (containing bean map)
Site Page
Page/form component when adding a bean (restaurant review/rating).
Login page
Sign-up Page

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.
Please see images for mockups

### Data

A user will have an ID, name, email, and restaurants data, and within the restaurant data, the restaurant is either a rated bean, or a wish bean. The restuarnt data also includes the business name, address, and longitude/latitude coordinates.

The location/restaurant data will be from Yelp's [Fusion API using business search](https://docs.developer.yelp.com/reference/v3_business_search)
Using the name/address/longitude latitude coordinates, these will apply markers on the map supplied from the customizable [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)

Adding a bean onto the bean map (aka, rating a restaurant) will create a POST request to add the restaurant to the user's data.

### Endpoints

GET user

    {  "id":  1,
      "name":  "Krista Chung",
       "email":  "kchung187@gmail.com",

          "beans": [
      {
        "id": "SKhV8mF40RcsGrJjkuEwvw",
    "name": "Ten Foot Henry",
    "userrating": 4,
        "comments": "Amazing meal - pasta was done perfectly. Want to try the carpaccio next time - didn't like the fried food though. Opt for a salad next time. Definitely gotta have the potato croquettes again",
         "coordinates": {
                "latitude": 51.041083366219205,
                "longitude": -114.06598360272451
            },
            "address": "1209-1st Street South West",
        "wishbean": "Yes"
      }

POST - Create User

     {  "id":  1,
          "name":  "Krista Chung",
           "email":  "kchung187@gmail.com",

              }

PUT User - Add rated restaurant, or visited restaurant

### Auth

Authentication won't be implemented in Phase 1, but will be under nice-to-have. We will hardcode the users and have a "log-in" page for Phase 1 to demonstrate the user log-in flow.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

### Sprint -1 April 8-15

- Initial project proposal handed in, receive feedback from TA
- Set-up initial repros, including both front-end and back-end.
- Seed initial databases with sample data and set-up data base
- Complete User log-in front -end forms styling +responsiveness. (Mobile first, 3 endpoints).
- Incorporate Google Maps API + Yelp API onto Front-end Home page, and try to have Searching functionality work for a restaurant name

### Sprint -2 April 15-22

- Complete Front-end Home page styling +responsiveness
  -- Header + footer components, responsiveness and styling
- Style bean map component, and ensure a bean can be placed on the map upon rating a bean.
- Add "wish bean" functionality, where a person can add a restaurant they would like to try on the bean map.

### Sprint -3 April 22- 28

- Create bean list component for all list of beans
- Style bean list
- Style profile page

## Nice-to-haves

- Filter bean map by geographic locations, such as cities (Calgary, Vancouver etc.)
- Implement authentication of the App.
- Have the map be able to display both where beans and rated beans at the same time.
- Create an interactive bean jar that, as more restaurants are rated (more is added to the bean map), the amount of beans on the bean map can also be shown in a little bean jar. This bean jar can be shaken and you can see which restaurant you'd like to try again (or try new restaurants from your restaurant to-go list, if that is implemented).

- Be able to add other users to your network, to view and share their bean map
- Have hidden and non-hidden bean ratings
- Be able to comment on someone's bean map
