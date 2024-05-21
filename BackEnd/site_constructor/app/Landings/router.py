from fastapi import APIRouter, Depends
from app.Landings.services import LandingServices
from app.Landings.schemas import SLanding
from app.Users.dependencies import *
from app.Users.models import Users
from fastapi.responses import JSONResponse

router = APIRouter(prefix='/landings', tags=["Лендинги"])


@router.get("")
async def get_all_landings(current_user: Users = Depends(get_current_user)) -> list[SLanding]:
    return await LandingServices.find_all(user_id = current_user.id)


@router.get("/{landing_id}")
async def get_landing(landing_id: int) -> SLanding:
    return await LandingServices.find_by_id(landing_id)


@router.delete("/{landing_id}")
async def delete_landing(landing_id: int, current_user: Users = Depends(get_current_user)):
    if current_user:
        return await LandingServices.delete(landing_id)


@router.post("")
async def add_landing(landing_data: SLanding, current_user: Users = Depends(get_current_user)):
    if current_user:
        await LandingServices.add(
            user_id = current_user.id, #landing_data.user_id если отправляем а не сами достаем
            name = landing_data.name, 
            adress = landing_data.address, 
            description = landing_data.description,
            structure = landing_data.structure,
        )

@router.post("/creating")
async def accessCreate(current_user: Users = Depends(get_current_user)):
    if current_user:
        return JSONResponse(content={"message": "Доступ имеется"})

    


@router.put("/{landing_id}")
def update_landing(landing_id):
    pass
