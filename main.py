from taipy.gui import Gui

value = 10

page = """
#HopHacks23: [Insert Title Here]

doctor bear to the rescue! <|{value}|> <br/>
<|{value}|slider|>

"""

Gui(page).run(use_reloader=True, port=5001)