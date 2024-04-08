from fastapi import APIRouter, HTTPException

from app.Users.auth import get_password_hash
from app.database import async_session_maker
from app.Users.services import *
from app.Users.schemas import SUser

router = APIRouter(prefix='/users', tags=["Пользователи & Auth"])

@router.get("")
async def get_all_users():
    return await UserServices.find_all()

@router.get("/{user_id}")
async def get_users(user_id: int):
    return await UserServices.find_by_id(user_id)

@router.delete("/{user_id}")
async def delete_user(user_id: int):
    return await UserServices.delete(user_id)


@router.post("/register")
async def add_user(user_data: SUser):
    existing_user = await UserServices.find_by_filter(email = user_data.email)
    if existing_user:
        raise HTTPException(status_code=500)
    hashed_password = get_password_hash(user_data.password)
    await UserServices.add(name = user_data.name, email = user_data.email, password = hashed_password)

@router.put("/{user_id}")
def update_user( user_id):
    pass



