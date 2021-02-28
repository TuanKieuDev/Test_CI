let teams = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45,
        position: 0
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39,
        position: 0
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29,
        position: 0
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39,
        position: 0
    }
];

const style=`
    .main{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }
`

function display(list) {
    let dom = document.getElementById("container")
    dom.innerHTML = '';
    console.log(list);
    for (let i = 0; i < teams.length; i++) {
        teams[i].position=i+1;
        
    }
    for (const team of list) {
        let html = `
            <style>${style}</style>
            <div class="main">
                <div class="name">
                    ${team.name}
                </div>
                <div class="gd">
                    ${team.GD}
                </div>
                <div class="points">
                    ${team.points}
                </div>
                <div class="position">
                    ${team.position}
                </div>
            </div>
        `;
        dom.innerHTML+=html;
    }
    
}

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

function sort() {
    let result = teams.sort(compareValues('points', 'desc'))
    display(result)
}

sort()