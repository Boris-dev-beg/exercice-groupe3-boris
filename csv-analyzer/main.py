import csv

# ! Readding the file
def readCSVFile():
    with open('sale.csv', 'r', encoding="utf-8", newline='') as csvfile:
        datas = list(csv.DictReader(csvfile, delimiter=',', quotechar='"'))
        determinateTurnover(datas)

# ! Determinate the turnover
def determinateTurnover(datas):
    global bestSellingPrice
    TotalSellingPrice = 0
    bestSellingPrice = 0
    
    for data in datas:
        price = int(data['price']) * int(data['quantity'])
        TotalSellingPrice += price
        if bestSellingPrice < price:
            bestSellingPrice = price
        print(f"Name: {data['product']}, Price: {int(data['price']):,}, Quantiy: {data['quantity']}")
    print(f"\nThe turnover of this list of products is: {TotalSellingPrice:,.1f}")
    DeterminateBestSelling(datas)

# ! Determinate the best Selling Product
def DeterminateBestSelling(datas):
    for data in datas:
        price = int(data['price']) * int(data['quantity'])
        if price == bestSellingPrice:
            print(f"The best selling product is: {data['product']} with Total Selling price: {bestSellingPrice:,.1f}")

def start():
    print(f"{"=>"*5} WELCOME {"<="*5}")
    readCSVFile()


if __name__ == "__main__":
    start()