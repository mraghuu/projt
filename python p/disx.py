ast=int(input("enter the quantity "))
if(ast>1 or ast==1):
    print(ast,"kg", '\n'"you are eligible for a discount on your purchase as you shop 1kg of ast or more than 1kg\n")
    price=int(input("enter the price of ast one bought "))
    dis=price*.1*ast
    print("your discount is",dis,"rs")
    total_dis=ast*price-dis
    print("total amout",total_dis,"rs")
else:
    print("there is no bonus as you bought less than 1kg")
    