# for desktop
import pyjd

# ui imports
from pyjamas.ui.HTML import HTML
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.ui.Grid import Grid
from pyjamas.ui.HorizontalSlider import HorizontalSlider
from pyjamas.ui.Label import Label
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.CaptionPanel import CaptionPanel

# other pyjamas imports
from pyjamas import DOM

# pyjamas client-side library
from random import random
from datetime import datetime

# Timer class
from pyjamas.Timer import Timer

# random
import random as r

######################################################################

def num_gen():
    arr = range(1,91)
    r.shuffle(arr)
    return arr

num = num_gen()

class PopupTimerButton(Timer, Button):

    def __init__(self, countdown):
        # It's a Timer, no it's a Button, WAIT!  It's BOTH!!
        Timer.__init__(self)
        Button.__init__(self)

        # save the countdown value
        self.countdown_save = countdown
        # this instance handles the clicks
        self.addClickListener(self)
        # the box the popups go into
        self.box = SimplePanel(StyleName='popupbox')
        # kickstart
        self.reset()

    def run(self):

        # When subclassing, we just implement the run method

        # update the countdown
        self.setHTML('Popup in <b>%d</b> seconds! (Click to cancel)'
                     % self.countdown)
        # reschdule if we're not to zero else create the popup
        self.countdown -= 1
        if self.countdown >= 0:
            self.schedule(1000)
        else:
            self.create_popup()
            self.reset()

    def reset(self):
        # reset to starting state
        self.setHTML('Click for countdown popup')
        self.countdown = self.countdown_save
        self.start = True

    def onClick(self, *arg):

        # handle button clicks

        # are we cancelling?
        if not self.start:
            self.cancel()
            self.reset()
            return

        # no we're starting
        self.start = False
        self.schedule(1)


    def create_popup(self):

        # create the popup in the middle box
        popup = DialogBox(False, False)
        
        popup.setHTML(num.pop())

        x = self.box.getAbsoluteLeft() + random()*100
        y = self.box.getAbsoluteTop() + random()*100
        popup.setPopupPosition(x, y)
        popup.show()


######################################################################
# The app
######################################################################
class bingo:

    def __init__(self):

        # layed out in a grid with odd rows a different color for
        # visual separation
        #lucky = Grid(9,10, CellPadding=25, CellSpacing=1, BorderWidth=1)
        lucky = Grid()
        lucky.resize(9,10)
        lucky.setBorderWidth(1)
        lucky.setCellPadding(25)
        lucky.setCellSpacing(1)
        val = 0
        for x in range(0,9):
            for y in range(0,10):
                val += 1
                lucky.setText(x,y,val)

        grid = Grid(1,3,CellPadding=20,CellSpacing=0)
        rf = grid.getRowFormatter()
        rf.setStyleName(0, 'oddrow')

        # popup timer buttons
        ptb = PopupTimerButton(1)
        grid.setWidget(0, 0, CaptionPanel('Start the Lucky Number Countdown', ptb, StyleName='left'))
        grid.setWidget(0, 1, CaptionPanel('Current Lucky Number',ptb.box))
        grid.setWidget(0, 2, lucky)

        # add it all to the root panel
        RootPanel().add(grid, lucky)

def onModuleLoad():
    bingo()

if __name__ == '__main__':

    pyjd.setup("public/bingo.html")
    onModuleLoad()
    pyjd.run()
