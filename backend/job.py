from logging import RootLogger
from mimetypes import init


class Job:
    name: str
    role: str
    deadline: str
    date: str
    status: str
    text: str
    imageUrl: str
    def __init__(self, name, role, deadline, date, status, text):
        self.name = name
        self.role = role
        self.deadline = deadline
        self.date = date
        self.status = status
        self.text = text
        self.imageUrl = 'https://logo.clearbit.com/%s.com?size=200&format=png' % self.name