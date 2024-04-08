from pydantic import BaseModel, EmailStr


class SUser(BaseModel):
    id: int
    name: str
    email: EmailStr
    password: str

    class Config:
        orm_mode = True