from datetime import datetime, timezone
from fastapi import Depends, Request, HTTPException, status
from jose import jwt, JWTError

from app.exception import IncorrectTokenFormatException, TokenAbsentException, TokenExpiredException, UserIsNotPresentException
from app.config import settings
from app.Users.services import UserServices

def get_token(request: Request):
    token = request.cookies.get("landing_access_token")
    if not token:
        raise TokenAbsentException
    return token

async def get_current_user(token: str = Depends(get_token)):
    try:
        payload = jwt.decode(
        token, settings.SECRET_KEY, settings.ALGORITHM
    )
    except JWTError:
        raise IncorrectTokenFormatException
    expire: str = payload.get("exp")

    if not expire or int(expire) < datetime.now(timezone.utc).timestamp():
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    
    user_id: str = payload.get("sub")
    if not user_id:
        raise UserIsNotPresentException

    user = await UserServices.find_by_id(int(user_id))
    if not user:
        raise UserIsNotPresentException
    return user
