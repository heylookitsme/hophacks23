from taipy.gui import Gui, Markdown, Html

value = 10

page = section2 = """
help
#Our Very First Taipy Application

<|layout|columns=1 1 1|

<|first column
<|container container-styling|
###Slider 1 <br/>
Slider value: <|{value}|> <br/>
<|{value}|slider|>
|>
|>

<|second column
<|container container-styling|
###Slider 2 <br/>
Slider value: <|{value}|> <br/>
<|{value}|slider|>
|>
|>

<|third column
<|container container-styling|
###Slider 3 <br/>
Slider value: <|{value}|> <br/>
<|{value}|slider|>
|>
|>
|>

<div>hiiiii</div>

<a href="/page1"> next page</a>

"""

md_page = Markdown("""
# Page title

Any [_Markdown_](https://en.wikipedia.org/wiki/Markdown) content can be used here.
                   
you can't escape because you cant add links in markdown LUL 
""")

html_page = Html("""
<h1>Page title</h1>

Any <a href="https://en.wikipedia.org/wiki/HTML"><i>HTML</i></a>
content can be used here.
                 
<a href="/page1"> next page</a>
""")

pages = {
    'page1': md_page,
    'page2': html_page
}


content = "average_age.csv"

# Gui(page).run(use_reloader=True, port=5001)
Gui(pages=pages).run(use_reloader=True, port=5001)