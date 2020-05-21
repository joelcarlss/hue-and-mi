# grupp10-vt19
## Project: Hue and Mi
Students: Carl Einarsson & Joel Carlsson

### What Does Hue and Mi do?
This application is built to create a smarter home that will make smart things communicating with each other.
This API will grant direct access to both Philips Hue smart lights solution and Xiaomi Vacuum cleaners.
One can easily maneuver the entire smart home from one app and get the best of it together. 
This app will let the different devices talk to eachother and create events dependent on the different devices.

The Auto Clean event creator will let user create events that starts autonomous cleaning with the 
vacuum cleaner if sensors in the Philips Hue system haven't detected any movement and if the vacuum has been unused for the desired amount of days.

The API will let the user get full controll over every unit in the merged system, 
where one can contoll colors and brightness of lights and and entire rooms, get temperatures and brightness levels from sensors and in the same time 
have full controll of the vacuum by sending it to the charger or start a new cleaning routine. The user will have easy access to the vacuums current battery level, 
what it currently does and when the last cleans where executed.

The system also includes a separately running client that will grant access to the APIs capabilities 
and give the user access to all data and full controll of every unit in a mouse click.

### Find
Due to the risk of leaking to private data, this app will be used as a local project in the LAN scope. 
The application holds data about the exact movement of every room and one can easily get information if someone is currently home or away.

### Implementing the application with the theories of Web of Things

#### Layer 1, ACCESS
We have chosen to build our Web Thing as an API running over HTTP.
This Web-API will be implemented with ReST architectural style.
This API will serve as a gateway to the connected things and make the system adapt the Gateway Intergration Pattern.

#### Layer 2, FIND
The system will use the "Web Thing Model" where each thing will have the routes /model, /properties, /actions when it allows.
The root will also guide into the intergrated systems using /things route. 
Links for current route and where to go next will follow the user through the visit in a version of HATEOAS.
Each path will have explainatory data of what one will find in the current path and how to access it.

#### Layer 3, SHARE
The plan was to write the application using Json Web Tokens that were generated when a user gets authenticated against a user database.
The risk of giving access to way to sensitive data is to huge for risking publishing this online.
If an unauthorized user should get access the system, this person could easily figure out the residents presence and the routines of the house hold.
Therefore we chose to make the system operating the lokal network. 
The functionalities doesn't require any outide maneuvering and will fullfill it's purpose inside the household.

#### Layer 4, COMPOSE
A Single Page Application will be the communication platform for the end user. 
This application will make everything available for the user and the user can get a full overview over the entire residence. 
