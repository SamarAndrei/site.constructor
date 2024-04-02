from django.http import JsonResponse

from .models import Landing, User

class LandingRepository:

    def _add_landing(self, name, address):
        landing = Landing(name=name, address=address)
        landing.save()
        return True

    def _delete_landing(self, landing_id):
        landing = Landing.objects.get(id=landing_id)
        landing.delete()
        return True

    def _update_landing(self, landing_id, name_new, address_new):
        landing = Landing.objects.get(id=landing_id)
        if name_new != "":
            landing.name = name_new
            landing.save()

        if address_new != "":
            landing.email = address_new
            landing.save()
        return True

    def _get_landing(self, landing_id):
        landing = Landing.objects.get(id=landing_id)
        return JsonResponse({'name': landing.name, 'address': landing.address})

    def _get_all_landing(self):
        landings = Landing.objects.all()
        landing_list = [{'name': landing.name, 'address': landing.address} for landing in landings]
        return JsonResponse({'landing_list': landing_list})


    def _add_user(self, user_name, email, password):
        user = User(name=user_name, email=email, password=password)
        user.save()
        return True

    def _delete_user(self, user_id):
        user = User.objects.get(pk=user_id)
        user.delete()
        return True

    def _update_user(self, user_id, name_new, email_new, password_new):
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


