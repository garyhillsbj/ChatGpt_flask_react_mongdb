from src import app
import os
from werkzeug.utils import secure_filename
import flask
from flask import render_template, request
from src.servics.handle_requests import *
from src.servics.handle_openai import *
STATIC_FOLDER = os.path.dirname(os.path.abspath(__file__)) + '/static/'

@app.route('/')
def start():
    return render_template('index.html')

@app.route("/createLabels", methods=['GET', 'POST'])
def createLabels():
    if flask.request.method == 'POST':
        image = flask.request.files['image']
        label = flask.request.form['label']
        image.save(STATIC_FOLDER + secure_filename(image.filename))
        
        alreadyPresent = isLabelInDb(label, image.filename)
        
        if alreadyPresent:
            message = "The label is already in the database. Try with other label"
            return render_template('error.html', message = message)
        else:
            message = "The label is successfully inserted to the database"
            return render_template('success.html', message = message)
    else:
        return render_template('createLabels.html')
    
@app.route('/api/home', methods=['POST'])
def home():
    json_data = request.get_json()
    question=json_data['question']
    ans=answer_ai(question)
    response = {'answer': ans[0]}
    return flask.jsonify(response)

@app.route('/fetchImages', methods=['POST'])
def fetchImages():
    if flask.request.method == 'POST':
        label = flask.request.form['label']
        totalImages = getRequiredImages(label)
        if len(totalImages) == 0:
            message = "No image is present in the database with the label " + str(label)
            return render_template('error.html', message = message)
        else:
            data = [totalImages, label]
            return render_template('show_images.html', results=data)
        
@app.route('/updateLabel', methods=['POST'])
def updateLabel():
    if flask.request.method == 'POST':
        image = flask.request.form['image']
        curr_value = flask.request.form['current_label']
        new_value = flask.request.form['new_label']
        updateInfo(image, curr_value, new_value)
        message = "Label is updated !!"
        return render_template('success.html', message=message)