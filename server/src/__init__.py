from flask import Flask
from flask_cors import CORS
from flask_bootstrap import Bootstrap

app = Flask(__name__)
CORS(app)
Bootstrap(app)
from src import routes