from pydantic import BaseModel, Json


class SLanding(BaseModel):
    id: int
    user_id: int
    name: str
    address: str
    description: str
    structure: Json

    class Config:
        orm_mode = True
