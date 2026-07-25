from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
print(os.getenv("GROQ_API_KEY"))

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Complaint(BaseModel):
    category: str
    title: str
    description: str


@app.get("/")
def home():
    return {"message": "Backend Running"}

@app.post("/api/complaints")
def submit_complaint(complaint: Complaint):

    prompt = f"""
    You are an AI Complaint Analyst.

    Complaint Category:
    {complaint.category}

    Complaint Title:
    {complaint.title}

    Description:
    {complaint.description}

    Return ONLY:

    Severity:
    Priority:
    Sentiment:
    Suggested Resolution:
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    analysis = response.choices[0].message.content
    print("AI Response:")
    print(analysis)
    


    return {
        "message": "Complaint received successfully",
        "analysis": analysis
    }