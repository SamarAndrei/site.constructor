from .repository import LandingRepository

class LandingService(LandingRepository):
    def delete_user(self, user_id):
        return self.__delete_user(user_id)

    def update_user(self,user_id, name_new, email_new, password_new):
        return self.__update_user(user_id, name_new, email_new, password_new)

    def add_user(self,user_name, email, password):
        return self.__add_user(user_name, email, password)
