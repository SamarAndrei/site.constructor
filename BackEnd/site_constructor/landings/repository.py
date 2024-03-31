from .models import Landing, User

class LandingRepository:

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


