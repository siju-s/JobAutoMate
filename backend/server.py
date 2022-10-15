import flask

from main import readEmails

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/jobs', methods=['GET'])
def fetch_jobs():
    return readEmails()

app.run()