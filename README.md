# CS-465-Full-Stack-Development
**Architecture**

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
This project used the different layers of MEAN stack to apply to different parts of the project. Express HTML was used to make a user friendly UI with buttons, nav bars, submission forms and arranging backgrounds and images. JavaScript was used to create many different methods that were called when a user interacted with the SPA to change the presented content and make calls to the database. The website being a single page application also affects the front end, as when a user visits they download and cache the website data. This allows them to change what content is presented to them with limited calls to the database and even allowing them to browse offline.
    
Why did the backend use a NoSQL MongoDB database? NoSQL databases, such as MongoDB, are a lot more flexable than SQL databases. They are able to change data models, have faster queries and are easier for use to use which is a big advantage for junior developers. Another benefit that is including is the fast updates that we did for this project: adding and editing trips, and making frequent changes to the database throughout the module work is much more effecient on NoSQL databases.
    
**Functionality**

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a syntax based off Javascript used to translate readable text into data objects for the server and database to better work with. Since it is a sort of     translation between the user/developer and the server/database it acts as the middle man between the two. We used it mainly for error messages, and handling data in   the database which is why we have error outputs in json as well as having trips written as json. 

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
There were a few times throughout the project where we refactored the code for effeciency and readability. In module 3 we changed the trips from static HTML to JSON data, which let us render it out easier, and allowed us to enter it into the database for the backend. We also added /api endpoints to test and check trip data and specific trips as well. In module 6/7 we used HTML to make different nav bars and buttons and ended up reusing a lot of that code for adding and editing trips for faster development and uniform UIs.
    
**Testing**

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security.     Explain your understanding of methods, endpoints, and security in a full stack application.
Most of the methods implemented made logs to the server so it could be confirmed that they were being called, such as the GET, POST, PUT, and DELETE methods. Additionally since the backend Angular page updated after changes were saved it was pretty easy to watch in real time when HTML, trips or the navbar were changed. Security for the backend required a user with permissions to log in to make changes to the trip database.

**Reflection**

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more       marketable candidate in your career field?
This course has been a great introduction into MEAN and other related stacks. Learning how to use multiple processes to make a more effecient website has been good to learn. Previous classes generally only stuck to one, such as just MongoDB. It's easy to imagine that many practical and real world applications do make use of multiple tools like these and being able to integrate and pass on data is an important step for the future.
