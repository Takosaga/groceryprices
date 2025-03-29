import os
from pathlib import Path

class Config:
    # Get the project root directory
    BASE_DIR = Path(__file__).resolve().parent.parent
    
    # SQLite database file path
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{BASE_DIR}/data/grocery.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False 