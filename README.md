# Team-3
## Motto: Think Differently
* Pizza Topping: Fatte's Sticky Fingers with White Sauce
* Team Names: Austin Woo, Ian Fong, Bao Nguyen, Thomas Kaar
* Team Lead: **Austin Woo**
* QA Lead: **Ian Fong**
* UI Lead: **Bao Nguyen**
* API/DB Lead: **Thomas Kaar**
* Architect: **N/A**


Known Project Shortcomings:
  * No Tests
  * Image Upload functionality is not complete.
    We just ran out of time on this one we were working on other functionalities and didn't prioritize it because we didn't know where to start

```shell

# Clone the project
git clone https://github.com/CSC307Fall2018/Team-3.git

# Change directory to 'server'
cd Team-3/project_shell/server

# Install server dependencies
npm install 

# Run server locally
npm start server

# Server is now available at http://localhost:3000


### Open a new Terminal session or tab ###

# Change directory to 'app'
cd path/to/Team-3/project_shell/app

# Install app dependencies
npm install

# Run app locally
npm run serve

# Website is now available on http://localhost:8080

# Setup the db
cd path/to/Team-3/project_shell/server
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize db:migrate

# Login with owner account  
username: admin
password: password

# To add a picture when creating an item:
input the name of the picture ( bicycle1.jpg, bicycle2.png, bicycle3.jpg, bicycle4.jpg (what we have in local filesystem)
to the image field.
```


