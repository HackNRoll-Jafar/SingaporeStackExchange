import requests
import json

API_KEY = 'KWZSUXOD6PTP3968' 

def isJson(a_string) :
	try:
		a_json = json.loads(a_string)
		return True
	except:
		return False


def get_stock_data(stock = 'AAPL'):
	CSV_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+ stock+ '&outputsize=full&apikey=' + API_KEY
	with requests.Session() as s:
		r = s.get(CSV_URL)
		data = dict(r.json())
		output = {}
		output['STOCK_NAME'] = stock
		output['DAILY_PRICE'] = {}
		i = 0
		lst = list(data['Time Series (Daily)'].keys())
		for rows in lst:
			output['DAILY_PRICE'][rows] = data['Time Series (Daily)'][rows]['1. open']
			i = i+1
			if i == 120:
				break
		j = json.dumps(output) 
		return j

json_object = get_stock_data('GOOG')

with open("sample.json", "w") as outfile:
    outfile.write(json_object)