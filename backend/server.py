import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/jobs', methods=['GET'])
def fetch_jobs():
    return {}

app.run()
