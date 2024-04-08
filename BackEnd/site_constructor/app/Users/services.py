from fastapi import HTTPException
from app.Services.repository import *
from app.database import async_session_maker
from app.Users.models import Users
from fastapi.responses import JSONResponse
from schemas import SUser



class UserServices(BaseServices):
    model = Users

    # async def delete_user(self, user_id: int):
    #     if self.find_by_id(user_id):
    #         result = self.delete(user_id)
    #         return await result
    #     raise HTTPException(status_code=500)
