function initialize() {

    var sky = [
		{ Name: "No Data", Id: 99 },
        { Name: "Suuny", Id: 1 },
        { Name: "Partly Cloudy", Id: 2 },
        { Name: "Overcast", Id: 3 },
        { Name: "Precipitation", Id: 4 }
    ];
	
	var columns = [
		{ title: "Time", name: "time", type: "text", inserting: false, filtering: false, editing: false, sorting: false}, 
		{ title: "Bicyclist", name: "bike", type: "number", inserting: true, filtering: false, editing: true, sorting: false  },
		{ title: "Pedestrian / Walker", name: "ped", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
		{ title: "Child in carrier", name : "child", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
		{ title: "Jogger", name: "jogger", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
		{ title: "Roller Blader / Skater" , name: "skater", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
		{ title: "Wheelchair User", name: "wheelchair", type: "number", inserting: true, filtering: false, editing: true, sorting: false }
	];
	
	var empty_data = [
		{ time : " 6:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }, // For the sake of symmetry
		{ time : " 6:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }, // For the sake of symmetry
		{ time : " 6:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 6:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 9:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 9:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 9:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 9:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "10:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "10:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "10:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "10:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "11:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "11:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "11:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "11:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "12:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "12:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "12:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : "12:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 1:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 1:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 1:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 1:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 2:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 2:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 2:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 2:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 3:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 3:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 3:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 3:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 4:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 4:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 4:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 4:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 5:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 5:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 5:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 5:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 6:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 6:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 6:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 6:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 7:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:00 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:15 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:30 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
		{ time : " 8:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	];
	

    $("#jsGrid").jsGrid({
        width: "100%",
        height: "600px",
		
		pageSize: 12,
 
        inserting: true,
        editing: true,
        sorting: false,
        paging: true,
 
        data: empty_data,
 
        fields: columns
    });
} // initialize