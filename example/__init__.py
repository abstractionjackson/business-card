from jinja2 import Environment, PackageLoader, select_autoescape

env = Environment(loader=PackageLoader("yourapp"), autoescape=select_autoescape())

template = env.get_template("index.html")

if __name__ == "__main__"
    template.render()
