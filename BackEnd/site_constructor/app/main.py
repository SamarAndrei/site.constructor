from fastapi import FastAPI
from app.Users.router import router as router_users
from app.Landings.router import router as router_landings


app = FastAPI()

app.include_router(router_users)
app.include_router(router_landings)


