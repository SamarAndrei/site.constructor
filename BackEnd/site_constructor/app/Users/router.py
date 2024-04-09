from fastapi import APIRouter, HTTPException, Response, status

from app.Users.auth import authenticate_user, create_access_token, get_password_hash
from app.database import async_session_maker
from app.Users.services import *
from app.Users.schemas import SUser, SUserAuth

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
async def register_user(user_data: SUser):
    existing_user = await UserServices.find_by_filter(email = user_data.email)
    if existing_user:
        raise HTTPException(status_code=500)
    hashed_password = get_password_hash(user_data.password)
    await UserServices.add(name = user_data.name, email = user_data.email, password = hashed_password)

@router.post("/login")
async def login_user(Response: Response, user_data:SUserAuth):
    user = await authenticate_user(email = user_data.email, password = user_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    access_token = create_access_token({"sub": user.id})
    Response.set_cookie("landing_access_token", access_token, httponly=True)
    return access_token


@router.put("/{user_id}")
def update_user(user_id: int, user_data: SUser):
    pass



