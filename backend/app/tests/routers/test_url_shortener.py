from ..test_setup import test_db, client


def test_read_root(test_db):
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to MinionUrl."}
