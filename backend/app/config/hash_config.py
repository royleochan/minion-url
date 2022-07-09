from pydantic import BaseSettings


class HashConfig(BaseSettings):
    salt: str

    class Config:
        env_file = ".env"
