from email_filter import predict_rejection
from job import Job
import json


def extract_job_data_from_text(jobData):
    lst = list()
    for jobDatum in jobData:
        if 'text' not in jobDatum: continue
        text = jobDatum["text"]
        date = jobDatum["date"]
        role = jobDatum["role"]
        status = predict_rejection(text)
        j = Job(date=date,status=status,companyName=None,role=role,deadline=None,text=text)
        lst.append(j)
    return json.dumps([ob.__dict__ for ob in lst])
