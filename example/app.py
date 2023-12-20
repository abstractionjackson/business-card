import os
from flask import Flask, render_template
from jinja2 import ChoiceLoader, FileSystemLoader, PrefixLoader

app = Flask(__name__)

print("app", app)

project_dir = os.path.dirname(os.path.dirname(__file__))
example_templates_dir = os.path.join(project_dir, "example", "templates")
business_card_templates = os.path.join(project_dir, "business_card", "templates")

app.jinja_loader = PrefixLoader(
    {
        "example": FileSystemLoader(example_templates_dir),
        "business_card": FileSystemLoader(business_card_templates),
    }
)


@app.route("/")
def index():
    return render_template("example/index.html")
