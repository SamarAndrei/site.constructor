from fastapi import FastAPI
from Users.router import router as router_users
from Landings.router import router as router_landings


app = FastAPI()

app.include_router(router_users)
app.include_router(router_landings)



@app.post("/users")
def add_user():

    pass

@app.put("/user/{user_id}")
def update_user(user_id):
    pass