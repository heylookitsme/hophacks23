from taipy.gui import Gui

value = 10

page = """
#HopHacks23: [Insert Title Here]

ahh literally what is this <|{value}|> <br/>
<|{value}|slider|>

"""

Gui(page).run(use_reloader=True, port=5001)