from ...app.Services.repository import *
from ..database import async_session_maker
from models import Users
from fastapi.responses import JSONResponse
from schemas import SUser



class UserServices(BaseServices):
    model = Users


    
    # async def find_by_id(self, user_id):
    #     async with async_session_maker() as session:
    #         query = select(self.model).filter_by(user_id = user_id)
    #         result = await session.execute(query)
    #         user = result.scalar_one_or_none()
    #         return user
    #         # if user is not None:
    #         #     return self.find_id(user_id)
    #         # else:
    #         #     return JSONResponse(content={"message": "Пользователь не найден"})