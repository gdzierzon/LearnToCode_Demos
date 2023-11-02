function getStateNames() {
    return [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        ]
}

function getStateAbbreviations() {
    return ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
}

function getAllStates() {
    return [
        { id: "AL", name: "Alabama", capital: "Montgomery" },
        { id: "AK", name: "Alaska", capital: "Juneau" },
        { id: "AZ", name: "Arizona", capital: "Phoenix" },
        { id: "AR", name: "Arkansas", capital: "Little Rock" },
        { id: "CA", name: "California", capital: "Sacramento" },
        { id: "CO", name: "Colorado", capital: "Denver" },
        { id: "CT", name: "Connecticut", capital: "Hartford" },
        { id: "DE", name: "Delaware", capital: "Dover" },
        { id: "FL", name: "Florida", capital: "Tallahassee" },
        { id: "GA", name: "Georgia", capital: "Atlanta" },
        { id: "HI", name: "Hawaii", capital: "Honolulu" },
        { id: "ID", name: "Idaho", capital: "Boise" },
        { id: "IL", name: "Illinois", capital: "Springfield" },
        { id: "IN", name: "Indiana", capital: "Indianapolis" },
        { id: "IA", name: "Iowa", capital: "Des Moines" },
        { id: "KS", name: "Kansas", capital: "Topeka" },
        { id: "KY", name: "Kentucky", capital: "Frankfort" },
        { id: "LA", name: "Louisiana", capital: "Baton Rouge" },
        { id: "ME", name: "Maine", capital: "Augusta" },
        { id: "MD", name: "Maryland", capital: "Annapolis" },
        { id: "MA", name: "Massachusetts", capital: "Boston" },
        { id: "MI", name: "Michigan", capital: "Lansing" },
        { id: "MN", name: "Minnesota", capital: "St. Paul" },
        { id: "MS", name: "Mississippi", capital: "Jackson" },
        { id: "MO", name: "Missouri", capital: "Jefferson City" },
        { id: "MT", name: "Montana", capital: "Helena" },
        { id: "NE", name: "Nebraska", capital: "Lincoln" },
        { id: "NV", name: "Nevada", capital: "Carson City" },
        { id: "NH", name: "New Hampshire", capital: "Concord" },
        { id: "NJ", name: "New Jersey", capital: "Trenton" },
        { id: "NM", name: "New Mexico", capital: "Santa Fe" },
        { id: "NY", name: "New York", capital: "Albany" },
        { id: "NC", name: "North Carolina", capital: "Raleigh" },
        { id: "ND", name: "North Dakota", capital: "Bismarck" },
        { id: "OH", name: "Ohio", capital: "Columbus" },
        { id: "OK", name: "Oklahoma", capital: "Oklahoma City" },
        { id: "OR", name: "Oregon", capital: "Salem" },
        { id: "PA", name: "Pennsylvania", capital: "Harrisburg" },
        { id: "RI", name: "Rhode Island", capital: "Providence" },
        { id: "SC", name: "South Carolina", capital: "Columbia" },
        { id: "SD", name: "South Dakota", capital: "Pierre" },
        { id: "TN", name: "Tennessee", capital: "Nashville" },
        { id: "TX", name: "Texas", capital: "Austin" },
        { id: "UT", name: "Utah", capital: "Salt Lake City" },
        { id: "VT", name: "Vermont", capital: "Montpelier" },
        { id: "VA", name: "Virginia", capital: "Richmond" },
        { id: "WA", name: "Washington", capital: "Olympia" },
        { id: "WV", name: "West Virginia", capital: "Charleston" },
        { id: "WI", name: "Wisconsin", capital: "Madison" },
        { id: "WY", name: "Wyoming", capital: "Cheyenne" }
      ]
      
}

function init() {
    const selectButton = document.getElementById("selectButton")
    selectButton.onclick = buttonClicked;

    populateStates();
}

function findStateById(id) {
    const states = getAllStates();

    for(let state of states){
        if(state.id == id) {
            return state;
        }
    }
}

function buttonClicked(event) {
    event.preventDefault();

    // find the select list
    const statesList = document.getElementById("statesList");
    
    // get the selected state id
    const stateId = statesList.value
    // find the state with that id
    const selectedState = findStateById(stateId);

    // display all state information
    document.getElementById("stateId").innerText = selectedState.id;
    document.getElementById("stateName").innerText = selectedState.name;
    document.getElementById("capital").innerText = selectedState.capital;
}

function populateStates() {
    const statesList = document.getElementById("statesList");
    const states = getAllStates();
   

    for(let state of states) {

        // console.log(state);
        const option = new Option(state.name, state.id)
        statesList.appendChild(option)
    }

    
}

function populateStates_old() {
    const statesList = document.getElementById("statesList");
    const stateNames = getStateNames();
    const stateAbbreviations = getStateAbbreviations();

    // console.log(statesList);
    // console.log(stateNames);

    // for(let state of stateNames) {

    //     const option = document.createElement("option");
    //     option.textContent = state
    //     // console.log(option);
    //     statesList.appendChild(option)
    // }

    
    for(let i = 0; i< stateNames.length; i++) {
        const state = stateNames[i];
        const abbreviation = stateAbbreviations[i];

        // const option = document.createElement("option");
        // option.textContent = state
        // option.value = abbreviation;

        const option = new Option(state, abbreviation)

        console.log(option);
        statesList.appendChild(option)
    }
}

window.onload = init;