from email_filter import predict_rejection, transform_text
from gcp import analyze_text_using_gcp
from job import Job
import json

companies_definitive_list = open('data/final_companies.csv', 'r')
companies_set = {company.strip().lower() for company in companies_definitive_list}


def extract_job_data_from_text(jobData):
    lst = list()
    for jobDatum in jobData:
        if 'text' not in jobDatum: continue
        text = jobDatum["text"]
        transformed_text = transform_text(text)
        status = get_status_for_job(transformed_text, predict_rejection(transformed_text))
        print(status)
        gcp_data = analyze_text_using_gcp(text)
        role = jobDatum["role"]
        location = gcp_data["location"] if 'location' in jobDatum else None
        deadline = gcp_data['date'] if 'date' in gcp_data else jobDatum['date']
        company = gcp_data['organization'] if 'organization' in gcp_data and gcp_data['organization'] != None else None
        if company is None:
            company = search_company(company, transformed_text)
        j = Job(date=jobDatum['date'], status=status, name=company, role=role, deadline=deadline,
                text=' '.join(text.split(' ')[:10]), location=location)
        lst.append(j)
    lst = filter_jobs(lst)
    return json.dumps([ob.__dict__ for ob in lst])


def search_company(company, transformed_text):
    # fallback on searching companies dictionaries
    for word in transformed_text.split(' '):
        if word in companies_set:
            company = word
            for item in companies_set:
                if item == word:
                    company = item
                    break
    return company


def get_status_for_job(text, rejection_status):
    if rejection_status == 'Rejected': return 'REJECTED'  # early exit
    offer_keywords = {'offer'}  # need to decide if this can have negative conotation
    test_keywords = {'oa', 'assessment', 'hackerrank', 'codesignal'}
    interview = {'zoom', 'interview', 'phone-screen', 'phonescreen'}

    is_oa_round = False
    is_interview_round = False
    is_offer = False


    for word in text.split(' '):
        if word in test_keywords:
            is_oa_round = True
        if word in interview:
            is_interview_round = True
        if word in offer_keywords:
            is_offer = True

    if is_oa_round:
        return "OA"
    elif is_interview_round:
        return "INTERVIEW"
    elif is_offer:
        return "OFFER"
    else:
        return "APPLIED"

def filter_jobs(jobs):
    return list(set(jobs))
