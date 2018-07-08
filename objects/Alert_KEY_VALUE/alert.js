var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  alertname : function () {
  	for( key in employee)
  	{
  		alert(key + " is " + this.key)
  	}
  }
}

employee.alertname()

