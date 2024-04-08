from fastapi import FastAPI
from app.Users.router import router as router_users


app = FastAPI()

app.include_router(router_users)



@app.post("/users")
def add_user():

    pass

@app.put("/user/{user_id}")
def update_user(user_id):
    pass