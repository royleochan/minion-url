import sys
import uvicorn


if __name__ == "__main__":
    port = int(sys.argv[1])
    uvicorn.run("app.url_shortener:app",
                host="0.0.0.0", port=port, reload=True)
