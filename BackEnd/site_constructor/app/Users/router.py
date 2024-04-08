from fastapi import APIRouter
from ..database import async_session_maker
from services import *

router = APIRouter(prefix='/users', tags=["Пользователи"])

@router.get("")
async def get_all_users():
    return await UserServices.find_all()

@router.get("/{user_id}")
async def get_users(user_id: int):
    return await UserServices.find_by_id(user_id)

@router.delete("/{user_id}")
async def delete_user(user_id: int):
    return await UserServices.delete(user_id)


@router.post("")
def add_user():

    pass

@router.put("/{user_id}")
def update_user( user_id):
    pass



