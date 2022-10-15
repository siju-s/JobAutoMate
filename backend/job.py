from logging import RootLogger
from mimetypes import init


class Job:
    companyName: str
    role: str
    deadline: str
    date: str
    status: str
    text: str
    def __init__(self, companyName, role, deadline, date, status, text):
        self.companyName = companyName
        self.role = role
        self.deadline = deadline
        self.date = date
        self.status = status
        self.text = text