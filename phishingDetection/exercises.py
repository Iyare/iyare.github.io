import pip._vendor.requests as req
from bs4 import BeautifulSoup
import os

# import requests as req

URL = "https://www.dahsen.com"
response = req.get(URL)

# print("response is ...", response, "\ntype is ", type(response))

if response.status_code != 200:
    print("Your http request was not successful")
else:
    print("Your http request is successful")
    
soup = BeautifulSoup(response.content, "html.parser")

print("title with tags:", soup.title, "\n without tags: ", soup.title.text)

# for link in soup.find_all("link"):
#     print(link.get("href"))
    

print(soup.get_text())


# Create a folder to save HTML files
folder = "mini_dataset"

if not os.path.exists(folder):
    os.mkdir(folder)
    
# Define a function  that scrapes and returns it

def scraper(URL):
    response = req.get(URL)
    if response.status_code == 200:
        print("HTTP connection is successful for this URL", URL)
        return response
    else:
        print("HTTP connection failed for this URL", URL)



# 3 Define a function to save a HTML file of tthe scraped webpage in a directory
# 4 Define a URL list variable
# 5 Define a function which takes the  URL list and runs step 2 and setp 3 for each URL
# 6 Check if you have 10 different HTML files
