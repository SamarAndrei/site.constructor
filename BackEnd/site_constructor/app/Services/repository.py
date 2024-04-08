from sqlalchemy import select
from app.database import async_session_maker
from fastapi.responses import JSONResponse



class BaseServices:
    model = None

    @classmethod
    async def find_all(cls):
        async with async_session_maker() as session:
            query = select(cls.model)
            result = await session.execute(query)
            return result.mappings().all()
        
    @classmethod
    async def find_by_id(cls, id):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(id = id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    @classmethod
    async def delete(cls, id):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(id = id)
            result = await session.execute(query)
            deleted_row = result.scalar_one_or_none()
            if deleted_row:
                await session.delete(deleted_row)
                await session.commit()
                return deleted_row
            return JSONResponse(content={"message": "Пользователь удален"})
            