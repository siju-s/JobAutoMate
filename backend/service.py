from email_filter import predict_rejection
from gcp import analyze_text_using_gcp
from job import Job
import json


def extract_job_data_from_text(jobData):
    lst = list()
    for jobDatum in jobData:
        if 'text' not in jobDatum: continue
        text = jobDatum["text"]
        status = predict_rejection(text)
        gcp_data = analyze_text_using_gcp(text)
        deadline = gcp_data['date'] if not None else jobDatum['date']
        company = jobDatum['organization'] if not None else 'Mysterious Company' # default company name :D 
        j = Job(date=jobDatum['date'],status=status,companyName=company,role=None,deadline=deadline,text=' '.join(text.split(' ')[:50]))
        lst.append(j)
    return json.dumps([ob.__dict__ for ob in lst])
