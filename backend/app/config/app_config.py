from pydantic import BaseSettings


class AppConfig(BaseSettings):
    environment: str

    class Config:
        env_file = ".env"
