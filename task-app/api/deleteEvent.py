from main import main

from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/calendar']


def delete_event(id : str):
    service = main()
    try:       

        print('Deleting an Event from your Calendar...')
        event = service.events().get(calendarId='primary', eventId={id}).execute()
        summary = event['summary']

        service.events().delete(calendarId='primary', eventId={id}).execute()

        print(f"Event '{summary}' deleted successfully!")

    except HttpError as error:
      print(f"Can't delete event, an error occurred: {error}")


delete_event('testevent1')