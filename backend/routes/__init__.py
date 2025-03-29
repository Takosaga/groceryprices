from flask import Blueprint, jsonify, request
from models import GroceryItem, Price, Store
from app import db
from sqlalchemy import func, desc

grocery_bp = Blueprint('grocery', __name__)

# Enable CORS for frontend
@grocery_bp.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST')
    return response

@grocery_bp.route('/api/search', methods=['GET'])
def search_products():
    query = request.args.get('q', '')
    
    try:
        # Query items that match the search term
        items = GroceryItem.query.filter(
            GroceryItem.ItemName.ilike(f'%{query}%')
        ).all()
        
        results = []
        for item in items:
            store_prices = []
            for price in item.prices:
                store_prices.append({
                    'store': price.store.StoreName,
                    'price': price.Price,
                    'pricePerQuantity': price.PricePerQuantity
                })
            
            # Sort prices from lowest to highest
            store_prices.sort(key=lambda x: x['price'])
            
            results.append({
                'itemId': item.ItemID,
                'itemName': item.ItemName,
                'prices': store_prices,
                'lowestPrice': store_prices[0] if store_prices else None,
                'priceRange': {
                    'min': min(p['price'] for p in store_prices) if store_prices else None,
                    'max': max(p['price'] for p in store_prices) if store_prices else None
                }
            })
        
        return jsonify({
            'success': True,
            'results': results
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@grocery_bp.route('/api/top-viewed', methods=['GET'])
def get_top_viewed():
    try:
        # Get 10 items with the most price entries across different stores
        top_items = db.session.query(
            GroceryItem,
            func.count(Price.PriceID).label('price_count')
        ).join(Price).group_by(GroceryItem).order_by(
            desc('price_count')
        ).limit(10).all()
        
        results = []
        for item, _ in top_items:
            store_prices = []
            for price in item.prices:
                store_prices.append({
                    'store': price.store.StoreName,
                    'price': price.Price,
                    'pricePerQuantity': price.PricePerQuantity
                })
            
            # Sort prices from lowest to highest
            store_prices.sort(key=lambda x: x['price'])
            
            results.append({
                'itemId': item.ItemID,
                'itemName': item.ItemName,
                'prices': store_prices,
                'lowestPrice': store_prices[0] if store_prices else None,
                'priceRange': {
                    'min': min(p['price'] for p in store_prices) if store_prices else None,
                    'max': max(p['price'] for p in store_prices) if store_prices else None
                }
            })
            
        return jsonify({
            'success': True,
            'results': results
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@grocery_bp.route('/api/stores', methods=['GET'])
def get_stores():
    try:
        stores = Store.query.all()
        return jsonify({
            'success': True,
            'results': [{
                'id': store.StoreID,
                'name': store.StoreName
            } for store in stores]
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500