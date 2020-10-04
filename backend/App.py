import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def read_date():
	pass

def add_data(collection, documentId, author, grade, link, subject, title):
	doc_ref = db.collection(str(collection)).document(str(documentId))
	doc_ref.set({
		u'author': str(author),
		u'grade': int(grade),
		u'link': str(link),
		u'subject': str(subject),
		u'title': str(title)
		})

def userInput():
	documentId = int(input("Document ID: "));
	author = input("Author: ");
	grade = int(input("Grade: "));
	link = input("Link: ");
	subject = input("Subject: ");
	title = input("Title: ");
	add_data('materials', documentId, author, grade, link, subject, title)
	# userInput()


cred = credentials.Certificate('../../API keys/Python Private Key.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# userInput()
