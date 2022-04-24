import React, {useState, useEffect} from 'react'
import fetchJsonp from 'fetch-jsonp';
import Ticker from './Ticker';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetchJsonp('http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log('json response', json);
  setData(json.liveEvents);
})
.catch(function(ex) {
  console.log('failed', ex);
});
     
    } , []);

  return (
      
    <div id="container">
       
            <header>
                <div id="logo">Unibet</div>
            </header>
            <nav>
                <ul>
                    <li><a href="instructions/index.html">Test instructions</a></li>
                </ul>
            </nav>
            <div id="content">
                <article>
                    <h1>Live matches</h1>
                    <div className="ticker">
                    <p className="preamble">
                        Here is a list of matches that are live right now.
                    </p>
                         
                    {console.log('---',data.liveEvents)}
                     {data &&  data.map(match => {
                         return(
                         
                     <Ticker  key={match.event.id} homeTeam={match.event.homeName} awayTeam={match.event.awayName} sport={match.event.sport} score={match.liveData.score} dateTime={match.event.start} eventId={match.event.id}/>
                     
                      )})}
                                    
                    </div>
                    <aside>
                        <h2>Live betting</h2>
                        <p>Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.</p>
                        <p>You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.</p>
                    </aside>
                    <div id="live-matches"></div>
                </article>
            </div>
            <footer>
                <div className="inner">
                    <p>&copy; 1997-2015, Unibet. All rights reserved.</p>
                </div>
            </footer>
        </div>
  )
}

export default Home

