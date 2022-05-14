document.addEventListener('DOMContentLoaded', () => {
    // Constructor of the Cleaner object
    var Cleaner = function(f_name, l_name, c_room, b) {
        this.first_name = f_name;
        this.last_name = l_name;
        this.current_room = c_room;
        this.busy = b;
    }

    var cleaners = [
            new Cleaner("Massimo", "Martel", "O1", "Yes"),
            new Cleaner("Loc", "Pham", "O3", "No"),
            new Cleaner("Iliyan", "Teofilov", "MR", "No"),
        ];

    function update_show() {
        let num_cleaners = cleaners.length;

        let text = "<ul>";
        for (let i = 0; i < num_cleaners; ++i) {
            text += "<li>" + cleaners[i].first_name + " " + cleaners[i].last_name + "<ul><li>Room: " + cleaners[i].current_room + "</li><li>Busy: " + cleaners[i].busy + "</li></ul></li>";
        }

        text += "</ul>";

        document.getElementById("cleaners_list").innerHTML = text;
    }

    function update_drop_down_workers() {
        let num_cleaners = cleaners.length;

        let text = "";
        for (let i = 0; i < num_cleaners; ++i) {
            text += "<option value = \"" + i + "\">" + cleaners[i].first_name + " " + cleaners[i].last_name + "</option>";
        }

        document.getElementById("select_worker").innerHTML = text;
    }

    

    function change_room() {
        var e = getElementById("room_ddm");
        var selected_room = e.options[e.selectedIndex].text;

        this.current_room = selected_room;
        update_show();
    }
    
    update_show();
    update_drop_down_workers();

    function fetch_request_data() {
        const room_list = ["MR","KI","O1","O2","O3","O4"];
        const task_list = ["None", "Clean my spills, Clean my work station", "Change the temperature it's too cold", "Change the temperature it's too hot"];
        const urgencies = ["Priority 1", "Priority 2", "Priority 3"];
        const restock_list = ["None", "Bananas", "Apples", "Grapes", "Coffee", "Milk", "Ganola Bar"];

        var room = sessionStorage.getItem("room_select");
        var task = sessionStorage.getItem("task_select");
        var task_urgency = sessionStorage.getItem("task_urgency_select");
        var restock_select = sessionStorage.getItem("restock_select");
        var restock_select_urgency = sessionStorage.getItem("restock_urgency_select");

        document.getElementById("request_data").innerHTML = room_list[room] + ", " + task_list[task] + ", " 
        + urgencies[task_urgency] + ", " + restock_list[restock_select] + ", " + urgencies[restock_select_urgency];
    }

    fetch_request_data();
})