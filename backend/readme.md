# Grocery Prices Backend

This is the backend service for the Grocery Prices application, built with Flask and SQLAlchemy.

## Setup

1. Create a virtual environment:
python -m venv venv

2. Activate the virtual environment:
- Windows:
venv\Scripts\activate
- Unix/MacOS:
source venv/bin/activate

3. Install dependencies:
pip install -r requirements.txt


4. Run the application:
python app.py


The server will start at `http://localhost:5000`

## Database Structure

The application uses SQLite with three main tables:
- `Stores`: Store information
- `GroceryItems`: Product information
- `Prices`: Price records linking stores and items

## API Endpoints

### 1. Search Products
GET /api/search?q={search_term}
Search for products by name. Returns matching products with their prices across different stores.

Example response:
json
{
    "success": true,
    "results": [
        {
            "itemId": 1,
            "itemName": "Milk",
            "prices": [
            {
                "store": "Lidl",
                "price": 0.89,
                "pricePerQuantity": 0.89
            },
            {
                "store": "Maxima",
                "price": 0.99,
                "pricePerQuantity": 0.99
            }
            ],
                "lowestPrice": {
                "store": "Lidl",
                "price": 0.89,
                "pricePerQuantity": 0.89
            },
                "priceRange": {
                "min": 0.89,
                "max": 0.99
            }
        }
    ]
}

### 2. Top Viewed Products
GET /api/top-viewed
Returns the 10 most frequently updated products (based on price entries).

### 3. Get Stores
GET /api/stores

Returns a list of all stores in the database.

Example response:
json
{
    "success": true,
    "results": [
    {
        "id": 1,
        "name": "Maxima"
    },
    {
        "id": 2,
        "name": "Lidl"
    }
    ]
}


## Error Handling

All endpoints return responses in the following format:
- Success: `{"success": true, "results": [...]}`
- Error: `{"success": false, "error": "error message"}`

## CORS

The backend has CORS enabled and accepts requests from any origin (*) for development purposes.

## Dependencies

- Flask 3.0.2
- Flask-SQLAlchemy 3.1.1
- SQLAlchemy 2.0.28
- python-dotenv 1.0.1

## Structure
backend/
├── init.py
├── app.py # Main application file
├── config.py # Configuration settings
├── requirements.txt # Project dependencies
├── models/ # Database models
│ └── init.py
└── routes/ # API routes
└── init.py
