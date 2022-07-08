from pydantic import BaseModel


class ApiBase(BaseModel):
    class Config:
        orm_mode = True
        allow_population_by_field_name = True
