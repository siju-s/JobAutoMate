
import base64
import os.path

from bs4 import BeautifulSoup
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.modify']
JOB_KEYWORDS=['workday', 'codesignal', 'recruiting', 'applying', 'online assessment', 'interview']
BASE_DIR = 'credentials/'
companies = list
queries = list()

def readEmails():
    """Shows basic usage of the Gmail API.
    Lists the user's Gmail labels.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists(BASE_DIR + 'token.json'):
        creds = Credentials.from_authorized_user_file(BASE_DIR + 'token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                # your creds file here. Please create json file as here https://cloud.google.com/docs/authentication/getting-started
                BASE_DIR + 'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open(BASE_DIR + 'token.json', 'w') as token:
            token.write(creds.to_json())
    try:
        for query in queries:
            # Call the Gmail API
            service = build('gmail', 'v1', credentials=creds)
            print(query)
            results = service.users().messages().list(userId='me', labelIds=['INBOX'], q=query, maxResults=10).execute()
            messages = results.get('messages', [])
            print ("Count of Messages for query ", query , " is ", len(messages))
            if not messages:
                print('No new messages.')
            else:
                for message in messages:
                    msg = service.users().messages().get(userId='me', id=message['id']).execute()
                    email_data = msg['payload']['headers']
                    for values in email_data:
                        name = values['name']
                        date = ""
                        if name == 'Date':
                            date = values['value']
                            print("Email date is:", date)
                        if name == 'From':
                            from_name = values['value']
                            payload = msg['payload']
                            parts = payload.get('parts')

                            if parts is None:
                                body = payload.get("body")
                                data = body.get("data")
                                byte_code = base64.urlsafe_b64decode(data)

                                text = byte_code.decode("utf-8")
                                text = format_text(text)
                                print("MESSAGE: " + text)
                                continue

                            for part in parts:
                                try:
                                    body = part.get("body")
                                    data = body.get("data")
                                    mimeType = part.get("mimeType")
                                    # with attachment
                                    if mimeType == 'multipart/alternative':
                                        subparts = part.get('parts')
                                        for p in subparts:
                                            body = p.get("body")
                                            data = body.get("data")
                                            mimeType = p.get("mimeType")
                                            if mimeType == 'text/plain':
                                                byte_code = base64.urlsafe_b64decode(data)
                                                break
                                            elif mimeType == 'text/html':
                                                byte_code = base64.urlsafe_b64decode(data)
                                                break
                                        # without attachment
                                    elif mimeType == 'text/plain':
                                        byte_code = base64.urlsafe_b64decode(data)
                                    else:
                                        continue

                                    text = byte_code.decode("utf-8")
                                    text = format_text(text)
                                    print("This is the message: " + text + "\n\n\n")
                                except BaseException as error:
                                    print(error)
                                    pass
    except Exception as error:
        print(f'An error occurred: {error}')


def is_not_job_email(mail_from):
    for company in companies:
        result = company in mail_from
        # print(result, "mail_from:", result, " company:", company)
        if result:
            return not result

    return True

def format_text(text):
    text = remove_html_tags(text)
    return remove_extra_spaces(text)


def remove_html_tags(text):
    cleantext = BeautifulSoup(text)
    return cleantext.text


def remove_extra_spaces(text):
    text = " ".join(text.split())
    print(text)
    return text

def get_list_of_companies():

    my_file = open("companies.txt", "r")

    data = my_file.read()

    # replacing end splitting the text
    # when newline ('\n') is seen.
    data_into_list = data.split("\n")
    print(data_into_list)
    my_file.close()
    return data_into_list

def build_filter_query():
    companies = get_list_of_companies()
    for company in companies:
        query = f"from:{company}"
        queries.append(query)
    for keyword in JOB_KEYWORDS:
        queries.append(keyword)


if __name__ == '__main__':
    build_filter_query()
    readEmails()