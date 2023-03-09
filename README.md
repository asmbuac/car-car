# CarCar

Team: 1

* Shayne Buac - Sales microservice
* Jordan Bott - Service Microservice

## Table of Contents
- [Design](#design)
- [Installation](#installation)
- [Inventory Microservice](#inventory-microservice)
- [Service Microservice](#service-microservice)
- [Sales Microservice](#sales-microservice)

## Design
CarCar is a Web application that is designed to manage an automobile dealership by tracking the inventory, sales, and service of cars. The application consists of 3 microservices: inventory, sales, and service. These microservices utilize RESTful API in the back-end that is then brought to the user interface on the front-end to dynamically display data and allow user interaction with the application.

Docker is used to run the application. To use the app, follow the steps for the installation below and refer to each microservice's section.

<details><summary><strong>Diagram</strong></summary>
<img src="/CarCarModel.png">
</details>

## Installation
1. Open up your terminal to the desired directory on your local computer
2. Clone the repository
```
git clone https://gitlab.com/jordan.bott/project-beta.git
```
3. Open up Docker Desktop and run the following commands in your terminal:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
**Note:** When you run `docker-compose up` and if you're on macOS, you will see a warning about an environment variable named OS being missing. **You can safely ignore this.**

4. After Docker is done loading, access the application on your browser (Google Chrome recommended) at http://localhost:3000/
5. (Optional) To import a complete Insomnia collection for this project, open Insomnia and within Insomnia:
- Make a new project called CarCar
- Within that project, click the Create dropdown at the top right and click File under IMPORT FROM
- Select the Insomnia.yaml file from the project-beta folder and import
- A new collection called CarCar should show up, and **that should contain all of the RESTful API URLs and example inputs to use for each microservice**!

## Inventory Microservice
### Overview
The Inventory microservice consists of one main microservice, **api**, and represents the dealership's inventory of vehicles. 

Api is a Django application with a Django project, `inventory_project`, and a Django app, `inventory_rest`, where the latter handles create, read, update, and delete (CRUD) functionality for manufacturers (`Manufacturer` objects), vehicle models (`VehicleModel` objects), and automobiles (`Automobile` objects).

### RESTful API (Port 8100)
#### Manufacturer
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/manufacturers/` | List all manufacturers | `api_manufacturers` |
| POST | `http://localhost:8100/api/manufacturers/` | Create a manufacturer | `api_manufacturers` |
| GET | `http://localhost:8100/api/manufacturers/<id>/` | Show a manufacturer's details | `api_manufacturer` |
| PUT | `http://localhost:8100/api/manufacturers/<id>/` | Update a manufacturer | `api_manufacturer` |
| DELETE | `http://localhost:8100/api/manufacturers/<id>/` | Delete a manufacturer | `api_manufacturer` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all manufacturers:
```
{
	"manufacturers": [
		{
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Nissan"
		},
		{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Toyota"
		}
	]
}
```
##### Show a manufacturer's details:
```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Toyota"
}
```
</details>

<details>
<summary><strong>Example POST and PUT Input and Output</strong></summary>

##### Input:
```
{
	"name": "Toyota"
}
```

##### Output:
```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Toyota"
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"id": null,
	"name": "Toyota"
}
```
</details>


#### Vehicle Model
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/models/` | List all vehicle models | `api_vehicle_models` |
| POST | `http://localhost:8100/api/models/` | Create a vehicle model | `api_vehicle_models` |
| GET | `http://localhost:8100/api/models/<id>/` | Show a vehicle model's details | `api_vehicle_model` |
| PUT | `http://localhost:8100/api/models/<id>/` | Update a vehicle model | `api_vehicle_model` |
| DELETE | `http://localhost:8100/api/models/<id>/` | Delete a vehicle model | `api_vehicle_model` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all vehicle models:
```
{
	"models": [
		{
			"href": "/api/models/2/",
			"id": 2,
			"name": "Camry",
			"picture_url": "https://cdn-ds.com/blogs-media/sites/285/2022/09/14164814/E6-2023-Toyota-Camry_A1_o.jpg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Toyota"
			}
		},
		{
			"href": "/api/models/3/",
			"id": 3,
			"name": "Civic",
			"picture_url": "https://images.mktw.net/im-691168?width=1280&size=1.33333333",
			"manufacturer": {
				"href": "/api/manufacturers/2/",
				"id": 2,
				"name": "Honda"
			}
		},
		{
			"href": "/api/models/4/",
			"id": 4,
			"name": "Corolla Hybrid",
			"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Toyota"
			}
		}
	]
}
```
##### Show a vehicle model's details:
```
{
	"href": "/api/models/4/",
	"id": 4,
	"name": "Corolla Hybrid",
	"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Toyota"
	}
}
```
</details>

<details>
<summary><strong>Example POST and PUT Input and Output</strong></summary>

##### Input:
```
{
	"name": "Corolla Hybrid",
	"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
	"manufacturer_id": 1
}
```

##### Output:
```
{
	"href": "/api/models/4/",
	"id": 4,
	"name": "Corolla Hybrid",
	"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Toyota"
	}
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"id": null,
	"name": "Corolla Hybrid",
	"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Toyota"
	}
}
```
</details>

#### Automobile
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/automobiles/` | List all automobiles | `api_automobiles` |
| POST | `http://localhost:8100/api/automobiles/` | Create an automobile | `api_automobiles` |
| GET | `http://localhost:8100/api/automobiles/<vin>/` | Show an automobile's details | `api_automobile` |
| PUT | `http://localhost:8100/api/automobiles/<vin>/` | Update an automobile | `api_automobile` |
| DELETE | `http://localhost:8100/api/automobiles/<vin>/` | Delete an automobile | `api_automobile` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all vehicle models:
```
{
	"autos": [
		{
			"href": "/api/automobiles/F789SD0F7S89/",
			"id": 2,
			"color": "Celestite",
			"year": 2020,
			"vin": "F789SD0F7S89",
			"model": {
				"href": "/api/models/4/",
				"id": 4,
				"name": "Corolla Hybrid",
				"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Toyota"
				}
			}
		},
		{
			"href": "/api/automobiles/7890F7S89FSFA/",
			"id": 1,
			"color": "Silver",
			"year": 2022,
			"vin": "7890F7S89FSFA",
			"model": {
				"href": "/api/models/4/",
				"id": 4,
				"name": "Corolla Hybrid",
				"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Toyota"
				}
			}
		}
	]
```
##### Show a vehicle model's details:
```
{
	"href": "/api/automobiles/F789SD0F7S89/",
	"id": 1,
	"color": "Celestite",
	"year": 2020,
	"vin": "F789SD0F7S89",
	"model": {
		"href": "/api/models/4/",
		"id": 4,
		"name": "Corolla Hybrid",
		"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Toyota"
		}
	}
}
```
</details>

<details>
<summary><strong>Example POST and PUT Input and Output</strong></summary>

##### Input:
```
{
	"color": "Celestite",
	"year": "2020",
	"vin": "F789SD0F7S89",
	"model_id": 1
}
```

##### Output:
```
{
	"href": "/api/automobiles/F789SD0F7S89/",
	"id": 1,
	"color": "Celestite",
	"year": "2020",
	"vin": "F789SD0F7S89",
	"model": {
		"href": "/api/models/4/",
		"id": 4,
		"name": "Corolla Hybrid",
		"picture_url": "https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1440+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-02/78d8ef20-3984-11e9-b7fd-042327182633",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Toyota"
		}
	}
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```

```
</details>

### Models
`Manufacturer`
- 


## Service Microservice
### Overview


## Sales Microservice

### Models

- [x] `Sales person`
  - Name
  - Employee Number
- [x] `Customer`
  - Name
  - Address
  - Phone number
- [x] `Sale`s record
  - Sale price
  - Automobile (ForeignKey to AutomobileVO)
  - Sales person (ForeignKey)
  - Customer (ForeignKey)
- [x] `AutomobileVO`
  - import_href
  - vin

### RESTful API (Port 8090)

| Method | URL | What it does | View function | Notes |
| ------ | ------ | ------ | ------ | ------ |
| GET |  | | | |
| GET |  | | |  |
| POST |  |  |  |
| GET |  | |  |
| DELETE |  |  |  |

### Poller
- One poller to poll the Inventory API for `Automobile` resources every 60 seconds

### React
##### Components:
- List sales with details
- Sales person dropdown
- List a sales person's sales history
- Sales person form
- Customer form
- Sale record form

##### React Router
- Used `BrowserRoutes`, `Routes`, and `Route` from  `react-router-dom` to create paths for
