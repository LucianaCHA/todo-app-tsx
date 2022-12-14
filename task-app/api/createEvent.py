from main import main

from googleapiclient.errors import HttpError


def create_event():
    service = main()

    try:
        print('Adding a new Event to your Calendar...')
        event = {
            'id':'testevent2',
            'summary': 'Hola de nuevo ',
            'description': 'https://meet.google.com/gjk-wctf-onr',
            'start': {
                'dateTime': '2022-12-14T10:00:00-03:00',
                'timeZone': 'America/Buenos_Aires',
            },
            'end': {
                'dateTime': '2022-12-14T12:30:00-03:00',
                'timeZone': 'America/Buenos_Aires',
            },            
            }

        event = service.events().insert(calendarId='primary', body=event).execute()
        print(f"Event created: {event.get('htmlLink')}\n Event Id: {event.get('id')}")

    except HttpError as error:
        print(f"Can't create event, an error occurred: {error}")

create_event()