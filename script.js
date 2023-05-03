async function getMatchData() {
    return await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=8b239122-33c0-46b8-89d2-4c2e262455b3&offset=0"
    ).then((data) => data.json()).then(data => {
        if(data.status != "success") return;

        const matchesList = data.data;

        if(!matchesList) return [];

        // Match name
        const matchTitle = matchesList
          .filter(
            (match) => match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e"
          )
          .map((match) => `${match.name}`);


          // Scorecard
          // const matchScore = matchesList
          //   .filter(
          //     (match) =>
          //       match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e"
          //   )
          //   .map((match) => `${match.score}`);

          

            // 
        const relevantData = matchesList.filter(match => match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(match => `${match.status}`);
        
        console.log(relevantData);

        document.getElementById("matchTitle").innerHTML = matchTitle
          .map((match) => `<li>${match} </li>`)
          .join("");

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

        // Scorecaradd
        // document.getElementById("scorecard").innerHTML = matchScore
        //   .map((match) => `<li>${match} </li>`)
        //   .join("");

        return relevantData, matchTitle;
    })

    .catch(e => console.log(e));
}


getMatchData(); 