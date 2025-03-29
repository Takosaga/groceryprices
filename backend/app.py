from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    # Register blueprints
    from routes import grocery_bp  # Updated import statement
    app.register_blueprint(grocery_bp)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)