import React, {} from 'react'

const User =()=>{


    interface Data{

        id: number,
        title:string,
        event_date_utc: string,
        event_date_unix: number,
        flight_number: number,
        details: string,
        reddit: null,
        article:string
        wikipedia:string
    }

const data: Data ={
id: 1,
title: "Falcon 1 Makes History",
event_date_utc: "2008-09-28T23:15:00Z",
event_date_unix: 1222643700,
flight_number: 4,
details: "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
reddit: null,
article: "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0&quot",
wikipedia: "https://en.wikipedia.org/wiki/Falcon_1&quot",
}

return (

    <div>
    <h1>{data.title}</h1>
    <p>{data.details}</p>
    <p>Flight Number: {data.flight_number}</p>
    <p>
      Read more: <a href={data.article}>Article</a>
    </p>
    <p>
      Wikipedia: <a href={data.wikipedia}>Wikipedia</a>
    </p>
  </div>
)



}

export default User