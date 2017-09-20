from characters.base import CharacterBase

WEREWOLF_GREETING = 'ARRRGHASHGHGHAHGHAHRR'


class WereWolf (CharacterBase):
    def __init__ (self, name):
        super().__init__(name)
        self.health = 10

    def greet (self):
        super().greet()
        print(WEREWOLF_GREETING)
