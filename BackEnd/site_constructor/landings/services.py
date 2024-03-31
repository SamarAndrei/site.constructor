from .repository import LandingRepository

class LandingService(LandingRepository):
    def add_landing(self, name, address):
        return self.__add_landing(name, address)

    def delete_landing(self, landing_id):
        return self.__delete_landing(landing_id)

    def update_landing(self, landing_id, name_new, address_new):
        return self.__update_landing(landing_id, name_new, address_new)

    def get_landing(self, landing_id):
        return self.__get_landing(landing_id)

    def get_all_landing(self):
        return self.__get_all_landing()

    def delete_user(self, user_id):
        return self.__delete_user(user_id)

    def update_user(self,user_id, name_new, email_new, password_new):
        return self.__update_user(user_id, name_new, email_new, password_new)

    def add_user(self,user_name, email, password):
        return self.__add_user(user_name, email, password)
