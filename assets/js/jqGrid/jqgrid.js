function jqGrid() {
	var grid_data = [{
		id : "1",
		name : "Desktop Computer",
		note : "note",
		stock : "Yes",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "2",
		name : "Laptop",
		note : "Long text ",
		stock : "Yes",
		ship : "InTime",
		sdate : "2007-12-03"
	}, {
		id : "3",
		name : "LCD Monitor",
		note : "note3",
		stock : "Yes",
		ship : "TNT",
		sdate : "2007-12-03"
	}, {
		id : "4",
		name : "Speakers",
		note : "note",
		stock : "No",
		ship : "ARAMEX",
		sdate : "2007-12-03"
	}, {
		id : "5",
		name : "Laser Printer",
		note : "note2",
		stock : "Yes",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "6",
		name : "Play Station",
		note : "note3",
		stock : "No",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "7",
		name : "Mobile Telephone",
		note : "note",
		stock : "Yes",
		ship : "ARAMEX",
		sdate : "2007-12-03"
	}, {
		id : "8",
		name : "Server",
		note : "note2",
		stock : "Yes",
		ship : "TNT",
		sdate : "2007-12-03"
	}, {
		id : "9",
		name : "Matrix Printer",
		note : "note3",
		stock : "No",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "10",
		name : "Desktop Computer",
		note : "note",
		stock : "Yes",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "11",
		name : "Laptop",
		note : "Long text ",
		stock : "Yes",
		ship : "InTime",
		sdate : "2007-12-03"
	}, {
		id : "12",
		name : "LCD Monitor",
		note : "note3",
		stock : "Yes",
		ship : "TNT",
		sdate : "2007-12-03"
	}, {
		id : "13",
		name : "Speakers",
		note : "note",
		stock : "No",
		ship : "ARAMEX",
		sdate : "2007-12-03"
	}, {
		id : "14",
		name : "Laser Printer",
		note : "note2",
		stock : "Yes",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "15",
		name : "Play Station",
		note : "note3",
		stock : "No",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "16",
		name : "Mobile Telephone",
		note : "note",
		stock : "Yes",
		ship : "ARAMEX",
		sdate : "2007-12-03"
	}, {
		id : "17",
		name : "Server",
		note : "note2",
		stock : "Yes",
		ship : "TNT",
		sdate : "2007-12-03"
	}, {
		id : "18",
		name : "Matrix Printer",
		note : "note3",
		stock : "No",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "19",
		name : "Matrix Printer",
		note : "note3",
		stock : "No",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "20",
		name : "Desktop Computer",
		note : "note",
		stock : "Yes",
		ship : "FedEx",
		sdate : "2007-12-03"
	}, {
		id : "21",
		name : "Laptop",
		note : "Long text ",
		stock : "Yes",
		ship : "InTime",
		sdate : "2007-12-03"
	}, {
		id : "22",
		name : "LCD Monitor",
		note : "note3",
		stock : "Yes",
		ship : "TNT",
		sdate : "2007-12-03"
	}, {
		id : "23",
		name : "Speakers",
		note : "note",
		stock : "No",
		ship : "ARAMEX",
		sdate : "2007-12-03"
	}];

	var grid_column = {
		colNames : ['ID', 'Last Sales', 'Name', 'Stock', 'Ship via', 'Notes'],
		colModal : [
		//{name:'myac',index:'', width:80, fixed:true, sortable:false, resize:false},
		{
			name : 'id',
			index : 'id',
			width : 60,
			sorttype : "int"
		}, {
			name : 'sdate',
			index : 'sdate',
			width : 90,
			sorttype : "date"
		}, {
			name : 'name',
			index : 'name',
			width : 150
		}, {
			name : 'stock',
			index : 'stock',
			width : 70
		}, {
			name : 'ship',
			index : 'ship',
			width : 90
		}, {
			name : 'note',
			index : 'note',
			width : 150,
			sortable : false
		}]
	};

	jQuery(function($) {
		

	});
}