from fastapi import APIRouter, Depends
from app.Landings.services import LandingServices
from app.Landings.schemas import SLanding
from app.Users.dependencies import *
from app.Users.models import Users

router = APIRouter(prefix='/landings', tags=["Лендинги"])


@router.get("")
async def get_all_landings(user: Users = Depends(get_current_user)) -> list[SLanding]:
    return await LandingServices.find_all(user_id = user.id)


@router.get("/{landing_id}")
async def get_landing(landing_id: int, user: Users = Depends(get_current_user)) -> SLanding:
    if user:
        return await LandingServices.find_by_id(landing_id)


@router.delete("/{landing_id}")
async def delete_landing(landing_id: int, user: Users = Depends(get_current_user)):
    if user:
        return await LandingServices.delete(landing_id)


@router.post("")
async def add_landing(landing_data: SLanding, user: Users = Depends(get_current_user)):
    if user:
        await LandingServices.add(
            user_id = landing_data.user_id,
            name = landing_data.name, 
            adress = landing_data.address, 
            description = landing_data.description
        )

    


@router.put("/{landing_id}")
def update_landing(landing_id):
    pass
