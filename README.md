# Project REST-rant

Rest-Rant is an app where users can review restauraunts.


| Method  |  Path |  Purpose |
|---|---|---|
|  GET | /  | Home Page |
| GET  | /places  |  Places Index Page |
|  POST | /places  |  Create New Place |
|  GET | /places/new  | Form page for creating a new place  |
|  GET | /places/:id  | Details about a particular place  |
|  PUT |  /places/:id |  Update a particular place |
| GET  | /places/:id/edit  |  Form page for editing an exisiting place |
| DELETE  | /places/:id  | Delete a particular place  |
| POST  | /places/:id/rant  | Create a rant about a particular place  |
|  DELETE | /places/:id/rant/:rantid  |  Delete a rant about a particular place |
| GET  | *  |  404 page (matches any route not defined above) |

**Places**
|  OBJECT | TYPE  |
|---|---|
| name  | string  |
|  city | string  |
|  state | string  |
|  cuisines |  string |
|  pic | string  |

**User Stories**
* *In progress* *

**Wireframes**
* *In progress* *
