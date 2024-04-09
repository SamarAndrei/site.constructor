from pydantic import BaseModel, EmailStr


class SUserAuth(BaseModel):
    id: int
    email: EmailStr
    password: str


class SUser(BaseModel):
    id: int
    name: str
    email: EmailStr
    password: str

    class Config:
        orm_mode = True

