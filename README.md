# Module 13 Challenge:  Ecommerce Backend

# Worked on with Salma Gonzelez

# Went over during office hours with Tyler

# Complted the following Acceptance Criteria found in Bootcamp Spot 

-- GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

# Github Link 

# Video Tutorial Link 

Category Post Route: 
{
	"category_name": "Suspenders"
}

Product Post Route: 

{
    "product_name": "Dallas Cowboys Shirt", 
    "price": 20.00,
    "stock": 50,
    "category_id": 33,
    "tagIds": [1, 2, 3, 4]
}

Tag Post Route: 

{
    "tag_name": "Football"
}

Category Put Route: 
{
    "category_name": "short sleeve-shirts"
}

Product Put Route: 
{
    "product_name": "Great Dallas Cowboys Shirt", 
    "price": 20.00,
    "stock": 50,
    "category_id": 33,
    "tagIds": [1, 2, 3, 4]
}

Tag Put route: 
{
    "tag_name": "Cool Dallas Shirt"
}