from .repository import LandingRepository
from .models import Landing, User

class LandingService(LandingRepository):
    def add_landing(self, name, address):
        return self._add_landing(name, address)

    def delete_landing(self, landing_id):
        return self._delete_landing(landing_id)

    def update_landing(self, landing_id, name_new, address_new):
        return self._update_landing(landing_id, name_new, address_new)

    def get_landing(self, landing_id):
        return self._get_landing(landing_id)

    def get_all_landing(self):
        return self._get_all_lending()

    def update_user(self,user_id, name_new, email_new, password_new):
        try:
            User.objects.get(pk = user_id)
            return self._update_user(user_id, name_new, email_new, password_new)
        except User.DoesNotExist:
            return False
    def delete_user(self, user_id):
        try:
            User.objects.get(pk = user_id)
            return self._delete_user(user_id)
        except User.DoesNotExist:
            return False

    def add_user(self,user_name, email, password):
        return self._add_user(user_name, email, password)
