// I create the array with the elements of the table
let Properties_drivers = [
    {Name: "Hamilton", Team: "Mercedes", Country: "United Kingdom", Podiums: 180, Points: 4121.5, GrandsPrixentered: 286, WorldChampionships: 7, Highestracefinish: "1 (x102)", Highestgridposition: 1,  Placeofbirth: "Stevenage, England"},
    {Name: "Bottas", Team: "Mercedes", Country: "Finland", Podiums: 66, Points: 1715, GrandsPrixentered: 176, WorldChampionships: "N/A", Highestracefinish: "1 (x10)", Highestgridposition: 1,  Placeofbirth: "Nastol,Finland"},
    {Name: "Verstappen", Team: "Red Bull Racing", Country: "Netherlands", Podiums: 58, Points: 1313.5, GrandsPrixentered: 139, WorldChampionships: "N/A", Highestracefinish: "1 (x19)", Highestgridposition: 1, Placeofbirth: "Hasselt, Belgium"},
    {Name: "Perez", Team: "Red Bull Racing", Country: "Mexico", Podiums: 15, Points: 896, GrandsPrixentered: 212, WorldChampionships: "N/A", Highestracefinish: "1 (x2)", Highestgridposition: 2, Placeofbirth: "Guadalajara, Mexico"},
    {Name: "Leclerc", Team: "Ferreri", Country: "Monaco", Podiums: 13, Points: 553, GrandsPrixentered: 79, WorldChampionships: "N/A", Highestracefinish: "1 (x2)", Highestgridposition: 1, Placeofbirth: "Monte Carlo, Monaco"},
    {Name: "Sainz", Team: "Ferrari", Country: "Spain", Podiums: 5, Points: 517.5, GrandsPrixentered: 139, WorldChampionships: "N/A", Highestracefinish: "2 (x2)", Highestgridposition: 2, Placeofbirth: "Madrid, Spain"},
    {Name: "Norris", Team: "McLaren", Country: "United Kingdom", Podiums: 5, Points: 299, GrandsPrixentered: 58, WorldChampionships: "N/A", Highestracefinish: "2 (x1)", Highestgridposition: 1, Placeofbirth: "Bistol, England"},
    {Name: "Ricciardo", Team: "McLaren", Country: "Australia", Podiums: 32, Points: 1264, GrandsPrixentered: 208, WorldChampionships: "N/A", Highestracefinish: "1 (x8)", Highestgridposition: 1, Placeofbirth: "Perth, Australia"},
    {Name: "Alonso", Team: "Alpine", Country: "Spain", Podiums: 98, Points: 1976, GrandsPrixentered: 334, WorldChampionships: 2, Highestracefinish: "1 (x34)", Highestgridposition: 1, Placeofbirth: "Oviedo, Spain"},
    {Name: "Occon", Team: "Alpine", Country: "France", Podiums: 2, Points: 258, GrandsPrixentered: 87, WorldChampionships: "N/A", Highestracefinish: "1 (x1)", Highestgridposition: 3, Placeofbirth: "Évreux, Normandy"},
    {Name: "Gasly", Team: "AlphaTauri", Country: "France", Podiums: 3, Points: 281, GrandsPrixentered: 84, WorldChampionships: "N/A", Highestracefinish: " 1 (x1)", Highestgridposition: 2, Placeofbirth: "Rouen, France"},   
    {Name: "Tsunoda", Team: "AlphaTauri", Country: "Japan", Podiums: "N/A", Points: 20, GrandsPrixentered: 20, WorldChampionships: "N/A", Highestracefinish: "6 (x1)", Highestgridposition: 7, Placeofbirth: "Sagamihara, Japan"},
    {Name: "Vettel", Team: "Aston Martin", Country: "Germany", Podiums: 122, Points: 3061, GrandsPrixentered: 278, WorldChampionships: 4, Highestracefinish: "1 (x53)", Highestgridposition: 1, Placeofbirth: " Heppenheim, Germany"},
    {Name: "Stroll", Team: "Aston Martin", Country: "Canada", Podiums: 3, Points: 176, GrandsPrixentered: 98, WorldChampionships: "N/A", Highestracefinish: "3 (x3)", Highestgridposition: 1, Placeofbirth: "Montreal, Canada"},
    {Name: "Räikkönen", Team: "Alfa Romeo Racing", Country: "Finland", Podiums: 103, Points: 1873, GrandsPrixentered: 360, WorldChampionships: 1, Highestracefinish: "1 (x21)", Highestgridposition: 1, Placeofbirth: "Espoo, Finland"},
    {Name: "Giovinazzi", Team: "Alfa Romeo Racing", Country: "Italy", Podiums: "N/A", Points: 19, GrandsPrixentered: 60, WorldChampionships: "N/A", Highestracefinish: "5 (x1)", Highestgridposition: 7, Placeofbirth: "Martina Franca, Italy"},
    {Name: "Rusell", Team: "Williams", Country: "United Kingdom", Podiums: 1, Points: 19, GrandsPrixentered: 58, WorldChampionships: "N/A", Highestracefinish: "2 (x1)", Highestgridposition: 2, Placeofbirth: "King's Lynn, England"},
    {Name: "Latifi", Team: "Williams", Country: "Canada", Podiums: "N/A", Points: 7, GrandsPrixentered: 37, WorldChampionships: "N/A", Highestracefinish: "7 (x1)", Highestgridposition: 10, Placeofbirth: "Montreal, Canada"},
    {Name: "Schumacher", Team: "Haas F1 Team", Country: "Germany", Podiums: "N/A", Points: 0, GrandsPrixentered: 20, WorldChampionships: "N/A", Highestracefinish: "12(x1)", Highestgridposition: 14, Placeofbirth: "Vufflens-le-Château, Switzerland"},
    {Name: "Mazepin", Team: "Haas F1 Team", Country: "Russia", Podiums: "N/A", Points: 0, GrandsPrixentered: 20, WorldChampionships: "N/A", Highestracefinish: "12(x1)", Highestgridposition: 15, Placeofbirth: "Moscow, Russia"},
];

let createTableDrivers = function(list){
    let stringTable = "<tr><th>Name</th><th>Team</th><th>Country</th><th>Podiums</th><th>Points</th><th>Grands Prix Entered</th><th>World Championships</th><th>Highest race finish</th><th>Highest grid position</th><th>Place of birth</th></tr>";
    for(let driver of list){

        let row = "<tr> <td>"
        row += driver.Name;
        row += "</td>"

        row += "<td>"
        row += driver.Team;
        row += "</td>"

        row += "<td>"
        row += driver.Country;
        row += "</td>"

        row += "<td>"
        row += driver.Podiums;
        row += "</td>"

        row += "<td>"
        row += driver.Points;
        row += "</td>"

        row += "<td>"
        row += driver.GrandsPrixentered;
        row += "</td>"

        row += "<td>"
        row += driver.WorldChampionships;
        row += "</td>"

        row += "<td>"
        row += driver.Highestracefinish;
        row += "</td>"

        row += "<td>"
        row += driver.Highestgridposition;
        row += "</td>"

        row += "<td>"
        row += driver.Placeofbirth;
        row += "</td>"

        row += "</tr>";
        stringTable += row;
        console.log(stringTable);
    }
    return stringTable;
};

document.getElementById("tableDrivers").innerHTML = createTableDrivers(Properties_drivers);
