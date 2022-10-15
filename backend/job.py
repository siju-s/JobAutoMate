from logging import RootLogger
from mimetypes import init


class Job:
    companyName: str
    role: str
    deadline: str
    def __init__(self, companyName, role, deadline):
        self.companyName = companyName
        self.role = role
        self.deadline = deadline