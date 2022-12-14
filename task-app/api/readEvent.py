from main import main

from googleapiclient.errors import HttpError
# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/calendar']


def read_event(id : str):
    service = main()
    try:
        print(f'Checking  for the {id} Event in your Calendar...')
        event = service.events().get(calendarId='primary', eventId={id}).execute()
        summary = event['summary']

        service.events().delete(calendarId='primary', eventId={id}).execute()

        print(f"Event '{summary}' found successfully!")

    except HttpError as error:
      print(f"{error}")


read_event('testevent1')