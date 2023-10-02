function initialize() {
	var clients = [
        { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
        { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
        { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
        { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
        { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
    ];
 
    var sky = [
		{ Name: "No Data", Id: 99 }
        { Name: "Suuny", Id: 1 },
        { Name: "Partly Cloudy", Id: 2 },
        { Name: "Overcast", Id: 3 },
        { Name: "Precipitation", Id: 4 }
    ];
	
	var count_type = [
		{ Name: "Child in carrier", Id : "C"},
		{ Name: "Bicyclist", Id: "B" },
		{Name, "Jogger", Id: "J" },
		{ Name: "Roller Blader / Skater" , Id: "S" },
		{ Name" "Pedestrian / Walker", Id: "P" },
		{ Name: "Wheelchair User", Id: "W" },
		{ Name: "Other", Id: "O" }
	];
	
	var fields = [
		{ name : "cnt_0630", title : " 6:30 am", type : "number", valueType: "number" },
		{ name : "cnt_0645", title : " 6:45 am", type : "number", valueType: "number" },
		{ name : "cnt_0700", title : " 7:00 am", type : "number", valueType: "number" },
		{ name : "cnt_0715", title : " 7:15 am", type : "number", valueType: "number" },
		{ name : "cnt_0730", title : " 7:30 am", type : "number", valueType: "number" },
		{ name : "cnt_0745", title : " 7:45 am", type : "number", valueType: "number" }
	];
 
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
 
        inserting: true,
        editing: true,
        sorting: false,
        paging: true,
 
        data: clients,
 
        fields: [
            { name: "Name", type: "text", width: 150, validate: "required" },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            { type: "control" }
        ]
    });
} // initialize