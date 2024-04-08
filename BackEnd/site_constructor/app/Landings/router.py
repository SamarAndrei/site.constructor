from fastapi import APIRouter
from services import *

router = APIRouter(prefix='/landings', tags=["Лендинги"])


@router.get("")
async def get_all_landings():
    return await LandingServices.find_all()


@router.get("/{landing_id}")
async def get_landing(landing_id: int):
    return await LandingServices.find_by_id(landing_id)


@router.delete("/{landing_id}")
async def delete_landing(landing_id: int):
    return await LandingServices.delete(landing_id)


@router.post("")
def add_landing():
    pass


@router.put("/{landing_id}")
def update_landing(landing_id):
    pass
