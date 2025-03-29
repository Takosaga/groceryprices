from flask_sqlalchemy import SQLAlchemy
from app import db

class Store(db.Model):
    __tablename__ = 'Stores'
    
    StoreID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    StoreName = db.Column(db.String, unique=True)
    prices = db.relationship('Price', backref='store', lazy=True)

class GroceryItem(db.Model):
    __tablename__ = 'GroceryItems'
    
    ItemID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ItemName = db.Column(db.String, unique=True)
    prices = db.relationship('Price', backref='item', lazy=True)

class Price(db.Model):
    __tablename__ = 'Prices'
    
    PriceID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ItemID = db.Column(db.Integer, db.ForeignKey('GroceryItems.ItemID'))
    StoreID = db.Column(db.Integer, db.ForeignKey('Stores.StoreID'))
    Price = db.Column(db.Float)
    PricePerQuantity = db.Column(db.Float, nullable=True) 