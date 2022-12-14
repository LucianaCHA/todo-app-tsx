import axios from 'axios';
//GET https://www.googleapis.com/calendar/v3/calendars/[CALENDARID]/events?key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events'


const options = {
	headers: {
    Authorization:'Bearer ya29.a0AeTM1icIUV2jgYyH-9S1CCc--N79JTPZar26t0nSp3ppm02D3tzVVqoS03OXbbs5xRczdQokebu5H3jXMxGwgzThjWX2WY1urTMfCYK2nEtIRo1chhRLUvS5REM3WWNm1qn1cQGJTdlgY3L5pIzVeuEDUCxhaCgYKAccSARMSFQHWtWOmCsdIUIuvxs4yVUWH1b0nQA0163',
Accept: 'application/json'
  },
};

const getEvents = () => {
  const now = (new Date()).toISOString().slice(0,19).concat('-03:00')
  const params = {
    timeMin: now,
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  };
  //agregar header authorization
  // axios.get(url, { params },options)


  axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', options)
    .then(response => {
      console.log(response.data);

    })
    .catch(error => {
      console.log(error);
    })
}

const createEvent = () => {
  const event = {
    summary: 'Evento creado http request2',
    description: 'https://meet.google.com/gjk-wctf-onr',
    start: {
      dateTime: '2022-12-14T09:00:00-03:00',
      timeZone: 'America/Buenos_Aires',
    },
    end: {
      dateTime: '2022-12-14T10:00:00-03:00',
      timeZone: 'America/Buenos_Aires',
    },
    'attendees': [
      {'email': 'luciana.chamorro@fluxit.com.ar'},
      {'email': 'sep1678@outlook.com'}
    ],
  };

  axios.post(url, event, options)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })

}

const deleteEvent = (id) => {
  axios.delete(`${url}/${id}`, options)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })

}
export {
  getEvents,
  createEvent,
  deleteEvent
}
