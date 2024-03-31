from django.http import JsonResponse

from .models import Landing, User

class LandingRepository:

    def __add_landing(self, name, address):
        landing = Landing(name=name, address=address)
        landing.save()
        return True

    def __delete_landing(self, landing_id):
        try:
            landing = Landing.objects.get(id=landing_id)
            landing.delete()
            return True
        except Landing.DoesNotExist:
            return False

    def __update_landing(self, landing_id, name_new, address_new):
        try:
            landing = Landing.objects.get(id=landing_id)
            if name_new != "":
                landing.name = name_new
                landing.save()

            if address_new != "":
                landing.email = address_new
                landing.save()
            return True
        except Landing.DoesNotExist:
            return False

    def __get_landing(self, landing_id):
        try:
            landing = Landing.objects.get(id=landing_id)
            return JsonResponse({'landing_name': landing.name, 'landing_address': landing.address})
        except Landing.DoesNotExist:
            return False

    def __get_all_lending(self):
        try:
            landings = Landing.objects.all()
            landing_list = [{'land_name': landing.land_name, 'land_address': landing.land_address} for landing in landings]
            return JsonResponse({'landing_list': landing_list})
        except Landing.DoesNotExist:
            return False


    def __add_user(self, user_name, email, password):
        user = User(name=user_name, email=email, password=password)
        user.save()
        return True

    def __delete_user(self, user_id):
        try:
            user = User.objects.get(id=user_id)
            user.delete()
            return True
        except User.DoesNotExist:
            return False

    def __update_user(self, user_id, name_new, email_new, password_new):
        try:
            user = User.objects.get(id=user_id)
            if name_new != "":
                user.name = name_new
                user.save()

            if email_new != "":
                user.email = email_new
                user.save()

            if password_new != "":
                user.password = password_new
                user.save()

            return True
        except User.DoesNotExist:
            return False


