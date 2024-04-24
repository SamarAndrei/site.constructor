from app.Services.repository import *
from app.database import async_session_maker
from app.Users.models import Users
from fastapi.responses import JSONResponse
from app.Users.schemas import SUser



class UserServices(BaseServices):
    model = Users
