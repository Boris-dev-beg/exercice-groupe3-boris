import json
import requests
from bs4 import BeautifulSoup

# ! 1. Donwload the page
url = 'https://www.browse.ai/'
response = requests.get(url)

# ? Articles data will be stored in this list
articles_data = []

# ! 2. Check if the request was successful
if response.status_code == 200:
    # ! 3. Check the content of the page
    print('The page has been downloaded successfully!')
    soup = BeautifulSoup(response.content, 'html.parser')

    # ! 4. Extraction the specific data from the page
    # ? Getting the articles who are in the page 
    articles = soup.find_all('div', class_='homepage-capabilities-item')
    print(f'Found {len(articles)} articles on the page.')
    
    # ? Extracting the title and description of each article
    for article in articles:
        # ? Find the title (h4 tag)
        article_title = article.find('h3')
        title = article_title.text.strip() if article_title else 'Title not found'
        
        # ? Find the description (p tag)
        article_description = article.find('div', class_='homepage-capabilities-item-content-subtitle')
        description = article_description.text.strip() if article_description else 'Description not found'

        # ? Find the link (a tag)
        article_link = article.find('a')
        link = article_link['href'] if article_link else 'Link not found'

        print(f'Title: {title}')
        print(f'Description: {description}')
        print(f'Link: {link}')

        # ? Adding the extracted data to the articles_data list
        articles_data.append({
            'title': title,
            'description': description,
            'link': link
        })
    # ! 5. Storage the extracted data in a JSON file
    if articles_data:
        with open('../data.json', 'w') as json_file:
            json.dump(articles_data, json_file, indent=4)

        print('The data has been successfully saved in data.json')
    else:
        print('No articles were found on the page.')

else:
    print(f'Error while downloading the page: {response.status_code}')