from pydantic import BaseModel, EmailStr


class SUserAuth(BaseModel):
    email: EmailStr
    password: str


class SUser(BaseModel):
    name: str
    email: EmailStr
    password: str

    class Config:
        orm_mode = True

