# E-Commerce Back End

## Description

This project provides the back-end functionality for an e-commerce website using the latest technologies. The API is built with Express.js and interacts with a PostgreSQL database using Sequelize ORM. It supports CRUD operations for categories, products, and tags, allowing for a fully functional e-commerce back end.

## Table of Contents

- [Installation](#installation)
- [Demo](#demo)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Associations](#associations)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/SailorVirgo/E-Commerce-Back-End-.git
   cd e-commerce-back-end
   ```

2. Install the necessary packages:
    ```sh
    npm install
    ```

3. Create a .env file in the root directory and add your PostgreSQL database credentials:
    ```bash
    DB_NAME=your_db_name
    DB_USER=your_db_username
    DB_PASSWORD=your_db_password
    ```
4. Set up the database:
    * Open the terminal and navigate to the db folder:
    ```sh
    cd db
    ```
    * Log in to PostgreSQL:
    ```sh
     psql -U postgres
    ```
    * Execute the schema.sql file to create the database schema:
    ```sh
    \i schema.sql
    ```
    * Quit PostgreSQL:
    ```sh
    \q
    ```
    * Return to the main project folder:
    ```sh
    cd ..
    ```

5. Seed the database with test data:
    ```sh
    npm run seed
    ```

6. Start the server:
    ```sh
    npm start
    ```

## Demo
 #### Link to Demo 
 
https://drive.google.com/file/d/1-fITQ81QG9_p9UuJ2ztdL5NFKq3hcLvm/view

https://github.com/user-attachments/assets/0ebf33d8-7317-4ef8-a13a-9b22f810b9a4





## Usage
 After starting the server, you can use Insomnia to test the API endpoints. Below are the available endpoints and example requests.

## API Endpoints

### Categories
-   #### GET /api/categories: Get all categories
-   #### GET /api/categories/
    -  Get a single category by ID
-   #### POST /api/categories: Create a new category
    - Request Body:
    ```json
    { 
        "category_name": "New Category"
    }
     ```
-   #### PUT /api/categories/
    - Update a category by ID

      * Request Body:
    ```json
    {
        "category_name": "Updated Category"
    }
    ```

-   #### DELETE /api/categories/
    - Delete a category by ID


### Products

-   #### GET /api/products: Get all products
-   #### GET /api/products/
    - Get a single product by ID
-   #### POST /api/products: Create a new produc

      * Request Body:
    ```json
    {
        "product_name": "New Product",
        "price": 29.99,
        "stock": 10,
        "category_id": 1
    }
    ```
    #### PUT /api/products/
    - Update a product by ID

      * Request Body:
    ```json
    {
        "product_name": "Updated Product",
        "price": 39.99,
        "stock": 20,
        "category_id": 1
    }
    ```
    #### DELETE /api/products/
    - Delete a product by ID

    ### Tags

    #### GET /api/tags: Get all tags
    #### GET /api/tags/
    - Get a single tag by ID
    #### POST /api/tags: Create a new tag
    
      * Request Body:
    ```json
    {
        "tag_name": "New Tag"
    }
    ```
    #### PUT /api/tags/
    - Upate a tag by ID

      * Request Body:
    ```json
    {
        "tag_name": "Updated Tag"
    }
    ```
    #### DELETE /api/tags/
    - Delete a tag by ID


## Models

#### Category
* `id`: Integer, primary key, auto increment, not null

* `category_name`: String, not null

#### Product
* `id`: Integer, primary key, auto increment, not null

* `product_name`: String, not null

* `price`: Decimal, not null, validates as decimal

* `stock`: Integer, not null, default value 10, validates as numeric

* `category_id`: Integer, references `Category` model's `id`



#### Tag
* `id`: Integer, primary key, auto increment, not null

* `tag_name`: String

#### ProductTag

* `id`: Integer, primary key, auto increment, not null

* `product_id`: Integer, references Product model's `id`

* `tag_id`: Integer, references Tag model's `id`

#### Associations
* `Product` belongs to `Category`, and `Category` has many `Product` models.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models through the `ProductTag` model.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License
This project is licensed under the MIT License.
