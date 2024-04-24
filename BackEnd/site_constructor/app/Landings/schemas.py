from pydantic import BaseModel, Json
from typing import Optional
from pydantic import BaseModel


class SLanding(BaseModel):
    id: int
    user_id: int
    name: str
    address: str
    description: str
    structure: Json
    description: Optional[str] = None

    class Config:
        orm_mode = True
