var employee1 = {"name":"Amit",
                "age":"27",
                "salary":1600000,
                "address":{"city":"Bangalore",
                           "state":"Karnataka",
                           "pincode":"560043"
                          }
               };

var employee2 = {"name":"Rahul",
                "age":"29",
                "salary":1000000,
                "address":{"city":"Varanasi",
                            "state":"U.P",
                            "pincode":"221001"
                            }
                };

var employee3 = {"name":"Samsul",
                "age":"28",
                "salary":10000,
                "address":{"city":"Kolkata",
                            "state":"West Bengal",
                            "pincode":"700007"
                            }
                };

var employee4 = {"name":"Paulami",
                "age":"28",
                "salary":900000,
                "address":{"city":"Kolkata",
                            "state":"West Bengal",
                            "pincode":"700021"
                            }
                };

var employee5 = {"name":"Akshatha",
                "age":"31",
                "salary":1200000,
                "address":{"city":"Bangalore",
                            "state":"Karnataka",
                            "pincode":"560043"
                            }
                };

var empArray = [employee1,employee2,employee3,employee4,employee5];


for(x in empArray)
{
    console.log("\nObject"+x+" Detail")
    console.log("\tName: "+empArray[x].name);
    console.log("\tAge: "+empArray[x].age);
    console.log("\tSalary: "+empArray[x].salary);
    console.log("\tCity: "+empArray[x].address.city);
    console.log("\tState: "+empArray[x].address.state);
    console.log("\tPincode: "+empArray[x].address.pincode);
}
