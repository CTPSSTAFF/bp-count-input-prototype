const bikeColIx = 1,
      pedColIx = 2,
	  childColIx = 3, 
	  jogColIx = 4, 
	  skateColIx = 5,
	  wheelColIx = 6,
	  otherColIx = 7;
	  
function submitHandler(e) {
	var _DEBUG_HOOK = 0;
	
	// Information pertaining to all mode-specific counts associated with this 'uber-count'
	var bp_locid = $('#countlocs option:selected').val();
	var dtemp1 = $('#date').datepicker('getDate');
	// Contrary to what the 1st parameter suggests,
	// the following call acutally returns a date in the format mm-dd-yyyy.
	var dtemp2 = $.datepicker.formatDate("mm-dd-yy", dtemp1); 
	// Convert date to mm/dd/yyyy format
	var date = dtemp2.replaceAll("-", "/");
	var temperature = $('#temp').val();
	var sky = $('#sky').val();
	var from_st = $('#from_st').val();
	var from_st_dir = $('#from_st_dir option:selected').text();
	var to_st = $('#to_st').val();
	var to_st_dir = $('#to_st_dir option:selected').text();
	var desc = $('#description').val();
	
	// Assemble all rows into a single array "allrows"
	var rows_1 = $('#grid_1 > tbody > tr'),
	    rows_2 = $('#grid_2 > tbody > tr'),
		rows_3 = $('#grid_3 > tbody > tr'),
		rows_4 = $('#grid_4 > tbody > tr'),
		rows_5 = $('#grid_5 > tbody > tr');
	var i, allrows = [];
	
	for (i = 0; i < rows_1.length; i++) {
		allrows.push(rows_1[i]);
	}
	for (i = 0; i < rows_2.length; i++) {
		allrows.push(rows_2[i]);
	}
	for (i = 0; i < rows_3.length; i++) {
		allrows.push(rows_3[i]);
	}
	for (i = 0; i < rows_4.length; i++) {
		allrows.push(rows_4[i]);
	}
	for (i = 0; i < rows_5.length; i++) {
		allrows.push(rows_5[i]);
	}
	// Total # of rows should be 58, i.e., 10 + 12 + 12 + 12 + 12 + 12
	console.log("Total # of rows = " + allrows.length);
	if (allrows.length !== 58) {
		alert('Error total # of rows = ' + allrows.length + '. Should be 58.');
	}
	
	// Assemble a single array of data for each input type (column),
	// i.e., bike, ped, child, jogger, skater, wheelchair, and other.
	var bike_data = [], ped_data = [], child_data = [], jog_data = [],
	    skate_data = [], wheelchair_data = [], other_data = [];
	var td, val;
	
	// bike
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.bike');
		val = $(td).find('input').val();
		bike_data.push(val);
	}
	// ped
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.ped');
		val = $(td).find('input').val();
		ped_data.push(val);
	}
	// child
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.child');
		val = $(td).find('input').val();
		child_data.push(val);
	}
	// jogger
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.jog');
		val = $(td).find('input').val();
		jog_data.push(val);
	}
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.skate');
		val = $(td).find('input').val();
		skate_data.push(val);
	}
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.wheel');
		val = $(td).find('input').val();
		wheel_data.push(val);
	}
	// other
	for (i = 0; i < allrows.length; i++) {
		td = $(allrows[i]).find('.other');
		val = $(td).find('input').val();
		other_data.push(val);
	}
	
	_DEBUG_HOOK = 1;
	// Everything should be in place to input the data into the staging database.
	// Note: TBD replace 'town' with 'bp_countloc_id'.
	//
	// For development / validation: write data out in CSV format
	//
	
	// HERE: PHP code to insert data into count table of staging database.
	// The SQL will look something like the following:
	//
	// QUESTION: What do to about 'count_id'???
	//
	// INSERT INTO bp_counts (id, bp_locid, count_id, description, temperature, sky, 
	//						  count_type, town, from_st_name, from_st_dir, to_st_name, to_st_dir,
	//                        cnt_0630, cnt_0645, ... cnt_2030, cnt_2045, cnt_total),
	//        VALUES         ( ... ),
	//                       ( ... ),
	//                       etc.,
	//                       ( ...),;
	
	
} // submitHandler

var aTowns = [ 
	{ name: "Acton", id: "Acton" },
	{ name: "Arlington", id: "Arlington" },
	{ name: "Ashland", id: "Ashland" },
	{ name: "Bedford", id: "Bedford" },
	{ name: "Bellingham", id: "Bellingham" },
	{ name: "Belmont", id: "Belmont" },
	{ name: "Beverly", id: "Beverly" },
	{ name: "Bolton", id: "Bolton" },
	{ name: "Boston", id: "Boston" },
	{ name: "Boxborough", id: "Boxborough" },
	{ name: "Braintree", id: "Braintree" },
	{ name: "Brookline", id: "Brookline" },
	{ name: "Burlington", id: "Burlington" },
	{ name: "Cambridge", id: "Cambridge" },
	{ name: "Canton", id: "Canton" },
	{ name: "Carlisle", id: "Carlisle" },
	{ name: "Chelsea", id: "Chelsea" },
	{ name: "Cohasset", id: "Cohasset" },
	{ name: "Concord", id: "Concord" },
	{ name: "Danvers", id: "Danvers" },
	{ name: "Dedham", id: "Dedham" },
	{ name: "Dover", id: "Dover" },
	{ name: "Essex", id: "Essex" },
	{ name: "Everett", id: "Everett" },
	{ name: "Foxborough", id: "Foxborough" },
	{ name: "Framingham", id: "Framingham" },
	{ name: "Franklin", id: "Franklin" },
	{ name: "Gloucester", id: "Gloucester" },
	{ name: "Hamilton", id: "Hamilton" },
	{ name: "Hingham", id: "Hingham" },
	{ name: "Holbrook", id: "Holbrook" },
	{ name: "Holliston", id: "Holliston" },
	{ name: "Hopkinton", id: "Hopkinton" },
	{ name: "Hudson", id: "Hudson" },
	{ name: "Hull", id: "Hull" },
	{ name: "Ipswich", id: "Ipswich" },
	{ name: "Lexington", id: "Lexington" },
	{ name: "Lincoln", id: "Lincoln" },
	{ name: "Littleton", id: "Littleton" },
	{ name: "Lynn", id: "Lynn" },
	{ name: "Lynnfield", id: "Lynnfield" },
	{ name: "Malden", id: "Malden" },
	{ name: "Manchester", id: "Manchester" },
	{ name: "Marblehead", id: "Marblehead" },
	{ name: "Marlborough", id: "Marlborough" },
	{ name: "Marshfield", id: "Marshfield" },
	{ name: "Maynard", id: "Maynard" },
	{ name: "Medfield", id: "Medfield" },
	{ name: "Medford", id: "Medford" },
	{ name: "Medway", id: "Medway" },
	{ name: "Melrose", id: "Melrose" },
	{ name: "Middleton", id: "Middleton" },
	{ name: "Milford", id: "Milford" },
	{ name: "Millis", id: "Millis" },
	{ name: "Milton", id: "Milton" },
	{ name: "Nahant", id: "Nahant" },
	{ name: "Natick", id: "Natick" },
	{ name: "Needham", id: "Needham" },
	{ name: "Newton", id: "Newton" },
	{ name: "Norfolk", id: "Norfolk" },
	{ name: "North Reading", id: "North Reading" },
	{ name: "Norwell", id: "Norwell" },
	{ name: "Norwood", id: "Norwood" },
	{ name: "Peabody", id: "Peabody" },
	{ name: "Quincy", id: "Quincy" },
	{ name: "Randolph", id: "Randolph" },
	{ name: "Reading", id: "Reading" },
	{ name: "Revere", id: "Revere" },
	{ name: "Rockland", id: "Rockland" },
	{ name: "Rockport", id: "Rockport" },
	{ name: "Salem", id: "Salem" },
	{ name: "Saugus", id: "Saugus" },
	{ name: "Scituate", id: "Scituate" },
	{ name: "Sharon", id: "Sharon" },
	{ name: "Sherborn", id: "Sherborn" },
	{ name: "Somerville", id: "Somerville" },
	{ name: "Southborough", id: "Southborough" },
	{ name: "Stoneham", id: "Stoneham" },
	{ name: "Stow", id: "Stow" },
	{ name: "Sudbury", id: "Sudbury" },
	{ name: "Swampscott", id: "Swampscott" },
	{ name: "Topsfield", id: "Topsfield" },
	{ name: "Wakefield", id: "Wakefield" },
	{ name: "Walpole", id: "Walpole" },
	{ name: "Waltham", id: "Waltham" },
	{ name: "Watertown", id: "Watertown" },
	{ name: "Wayland", id: "Wayland" },
	{ name: "Wellesley", id: "Wellesley" },
	{ name: "Wenham", id: "Wenham" },
	{ name: "Weston", id: "Weston" },
	{ name: "Westwood", id: "Westwood" },
	{ name: "Weymouth", id: "Weymouth" },
	{ name: "Wilmington", id: "Wilmington" },
	{ name: "Winchester", id: "Winchester" },
	{ name: "Winthrop", id: "Winthrop" },
	{ name: "Woburn", id: "Woburn" },
	{ name: "Wrentham", id: "Wrentham" }
];


var sky = [
	{ name: "No Data", id: 99 },
	{ name: "Suuny", id: 1 },
	{ name: "Partly Cloudy", id: 2 },
	{ name: "Overcast", id: 3 },
	{ name: "Precipitation", id: 4 }
];

// Definition of columns of grids for input of count data
var columns = [
	{ title: "Time", name: "time", type: "text", inserting: false, filtering: false, editing: false, sorting: false}, 
	{ title: "Bicyclist", name: "bike", type: "number", inserting: true, filtering: false, editing: true, sorting: false  },
	{ title: "Pedestrian / Walker", name: "ped", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
	{ title: "Child in carrier", name : "child", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
	{ title: "Jogger", name: "jogger", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
	{ title: "Roller Blader / Skater" , name: "skater", type: "number", inserting: true, filtering: false, editing: true, sorting: false },
	{ title: "Wheelchair User", name: "wheelchair", type: "number", inserting: true, filtering: false, editing: true, sorting: false }
];

// Defintion of initial state of all grids
var empty_data_1 = [
	{ time : " 6:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 6:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 7:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 7:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 7:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 7:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 8:00 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 8:15 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 8:30 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 },
	{ time : " 8:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }	
];
var empty_data_2 = [
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
	{ time : "11:45 am", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }
];
var empty_data_3 = [
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
	{ time : " 2:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }
];
var empty_data_4 = [
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
	{ time : " 5:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }
];
var empty_data_5 = [
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
	{ time : " 8:45 pm", "bike" : 0, "ped" : 0, "child" : 0, "jogger" : 0, "skater" : 0, "wheelchair" : 0 }
];

var getJson = function(url) { return $.get(url, null, 'json'); };

// Data source: count locations 
var countlocsURL = 'data/json/ctps_bp_count_locations_pt.geo.json';

function initialize() {
	$.when(getJson(countlocsURL).done(function(bp_countlocs) {
		var ok = arguments[1] === 'success'; 
		if (ok === false) {
			alert("Failed to load GeoJSON for count locations successfully.");
			return; 
		} else {
			// Create tabs control
			$('#tabs').tabs({ active: 0 });

			// Populate combo box of count locations
			$('#countlocs').append($('<option>', { 
				value: 0,
				text : "Select a count location"
			}));
			
			var aTemp = [], oTemp = {}, i;
			for (i = 0; i < bp_countlocs.features.length; i++) {
				oTemp = { 'loc_id' : bp_countlocs.features[i].properties.loc_id,
				          'text'   : bp_countlocs.features[i].properties.description + 
						             ' - ' + bp_countlocs.features[i].properties.town };
				aTemp.push(oTemp);
			}
			aTemp.sort((a,b) => a.loc_id - b.loc_id);
			for (i = 0; i < aTemp.length; i++) {
				$('#countlocs').append($('<option>', { 
					value: aTemp[i].loc_id,
					text : aTemp[i].text 
				}));
			}

			var selectedDate = '';

			// Datepicker
			$('#date').datepicker({
			  changeMonth: true,
			  changeYear: true,
			  dateFormat: "mm-dd-yy",
			  onClose: function(dateText, inst) {
						   selectedDate = $('#date').datepicker('getDate');
					  }
			});
	
			// Create grids for the input of count data
			$("#jsGrid_1").jsGrid({
				width: "100%",
				height: "600px",
				pageSize: 12,
				inserting: true,
				editing: true,
				sorting: false,
				paging: true,
				data: empty_data_1,
				fields: columns
			});
			$("#jsGrid_2").jsGrid({
				width: "100%",
				height: "600px",
				pageSize: 12,
				inserting: true,
				editing: true,
				sorting: false,
				paging: true,
				data: empty_data_2,
				fields: columns
			});
			$("#jsGrid_3").jsGrid({
				width: "100%",
				height: "600px",
				pageSize: 12,
				inserting: true,
				editing: true,
				sorting: false,
				paging: true,
				data: empty_data_3,
				fields: columns
			});
			$("#jsGrid_4").jsGrid({
				width: "100%",
				height: "600px",
				pageSize: 12,
				inserting: true,
				editing: true,
				sorting: false,
				paging: true,
				data: empty_data_4,
				fields: columns
			});
			$("#jsGrid_5").jsGrid({
				width: "100%",
				height: "600px",
				pageSize: 12,
				inserting: true,
				editing: true,
				sorting: false,
				paging: true,
				data: empty_data_5,
				fields: columns
			});
	
			// Bind on-click handler for "Submit" button
			$('#submit').on('click', submitHandler);
		} // else of if-else
	}));
} // initialize
