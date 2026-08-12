"""Local preview server for the Celinna portfolio."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
import webbrowser

HOST, PORT = "127.0.0.1", 8000
os.chdir(Path(__file__).parent)

with ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler) as server:
    url = f"http://{HOST}:{PORT}"
    print(f"\nPortfolio preview is running at {url}")
    print("Keep this window open while reviewing the website.\n")
    webbrowser.open(url)
    server.serve_forever()
