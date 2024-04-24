from fastapi import APIRouter, Depends, Response

from BackEnd.site_constructor.app.exception import IncorrectEmailOrPasswordException, UserAlreadyExistException
from app.Users.auth import authenticate_user, create_access_token, get_password_hash
from app.Users.services import *
from app.Users.schemas import SUser, SUserAuth
from app.Users.dependencies import *
from app.Users.models import Users


router = APIRouter(prefix='/users', tags=["Пользователи & Auth"])


@router.get("/me")
async def get_current_user(current_user: Users = Depends(get_current_user)):
    return current_user

@router.delete("")
async def delete_user(current_user: Users = Depends(get_current_user)):
    return UserServices.delete(current_user.id)


@router.post("/register")
async def register_user(user_data: SUser):
    existing_user = await UserServices.find_by_filter(email = user_data.email)
    
    if existing_user:
        raise UserAlreadyExistException
    hashed_password = get_password_hash(user_data.password)
    await UserServices.add(name = user_data.name, email = user_data.email, password = hashed_password)

@router.post("/login")
async def login_user(Response: Response, user_data:SUserAuth):
    user = await authenticate_user(email = user_data.email, password = user_data.password)
    
    if not user:
        raise IncorrectEmailOrPasswordException
    access_token = create_access_token({"sub": str(user.id)})
    Response.set_cookie("landing_access_token", access_token, httponly=True)
    
    return access_token

@router.post("/logout")
async def login_user(Response: Response):
    Response.delete_cookie("landing_access_token")



@router.put("")
def update_user(current_user: Users = Depends(get_current_user), ):
    if current_user:
        pass
        


