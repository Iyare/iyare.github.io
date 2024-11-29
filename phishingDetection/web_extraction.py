import pip._vendor.requests as req
from bs4 import BeautifulSoup
import os



# 1 Create a folder to save HTML files
folder = "mini_dataset"

if not os.path.exists(folder):
    os.mkdir(folder)
    
    
# Define a function  that scrapes and returns it
def web_scraper(URL):
    response = req.get(URL)
    if response.status_code == 200:
        print("HTTP connection is successful for this URL", URL)
        return response
    else:
        print("HTTP connection failed for this URL", URL)
        return None


# 3 Define a function to save a HTML file of tthe scraped webpage in a directory
path = os.getcwd() + "/" + folder

def save_html(to_where, text, name):
    file_name = name + ".html"
    with open(os.path.join(to_where, file_name), "w", encoding="utf-8") as f:
        f.write(text)

    
    
# 4 Define a URL list variable
URL_list = [
    "https://www.gmail.com",
    "https://www.dahsen.com",
    "https://www.kaggle.com",
    "https://www.github.com",
    "https://www.phishtank.org",
    "https://www.cnn.com",
    "https://www.dropbox.com",
    "https://www.konga.com",
    "https://www.jumia.com.ng",
    "https://www.preblesbooks.com",
    "https://www.medium.com"
    
]


# 5 Define a function which takes the  URL list and runs step 2 and setp 3 for each URL
def create_mini_dataset(to_where, URL_list):
    for i in range(0, len(URL_list)):
        content = web_scraper(URL_list[i])
        if  content is not None:
            save_html(to_where, content.text, str(i))
        else:
            pass
    print("Mini dataset is  created!")
    

create_mini_dataset(path, URL_list)

# 6 Check if you have 10 different HTML files
