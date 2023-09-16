from taipy.gui import Gui

value = 10

page = """
#HopHacks23: [Insert Title Here]

On a scale of 1 to 100, how ill are you feeling today? <|{value}|> <br/>
<|{value}|slider|>

"""

Gui(page).run(use_reloader=True, port=5001)