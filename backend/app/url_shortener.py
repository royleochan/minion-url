from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .models import url
from .database.database import engine
from .routers import url_routes


url.Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(url_routes.router)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to url shortener."}
