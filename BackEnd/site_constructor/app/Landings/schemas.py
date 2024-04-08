from pydantic import BaseModel


class SLanding(BaseModel):
    id: int
    name: str
    address: str
    description: str

    class Config:
        orm_mode = True
