from ..test_setup import test_db, client

prefix = "/url"


def test_create_url(test_db):
    original_url = "http://test.com"
    response = client.post(prefix, json={"originalUrl": original_url})
    result = response.json()

    assert response.status_code == 201
    assert result['id'] >= 0
    assert result['originalUrl'] == original_url
    assert len(result['shortenedUrl']) >= 4
