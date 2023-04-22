import json

# Load the JSON data from files or strings
json_data1 = '{"product_code":{"0":"RB2861","1":"RB33049","2":"RB36463","3":"RB36464","4":"RB240073","5":"RB4817","6":"RB4816"},"quantity":{"0":"6","1":"12","2":"24","3":"12","4":"24","5":"24","6":"24"},"item":{"0":"RED BULL 8.4oz 4PK","1":"RED BULL 16oz LS","2":"RED BULL 20oz LS","3":"SugarFree 20oz LS","4":"RB Amber 12oz LS","5":"SugarFree 12oz LS","6":"RED BULL 12oz LS"},"unit_price":{"0":"$38.88","1":"$34.80","2":"$41.88","3":"$41.88","4":"$52.32","5":"$62.32","6":"$52.32"},"price":{"0":"$40.08","1":"$35.40","2":"$84.96","3":"$42.48","4":"$53.52","5":"$53.52","6":"$53.52"}}'
json_data2 = '{"0":{"type":"ADDRESS","valueDetection":"Red Bull Distribution Company Inc.\\nP.O. Box 204760\\nDallas, TX 75320-4750"},"1":{"type":"STREET","valueDetection":"P.O. Box 204760"},"2":{"type":"CITY","valueDetection":"Dallas,"}}'
data1 = json.loads(json_data1)
data2 = json.loads(json_data2)

# Create a new dictionary with columns from both JSON objects
new_data = {}
for i in range(len(data1['product_code'])):
    row = {'row_index': i}
    for key in data1:
        row[key] = data1[key][str(i)]
    for key in data2:
        column_name = data2[key]['type']
        column_value = data2[key]['valueDetection']
        row[column_name] = column_value
    new_data[i] = row

# Print the new dictionary
print(json.dumps(new_data, indent=2))