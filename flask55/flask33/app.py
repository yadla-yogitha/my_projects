from flask import Flask, render_template, request
from itertools import zip_longest

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    subjects = request.form.getlist('subject')
    marks = request.form.getlist('mark')
    
    try:
        marks = [int(mark) for mark in marks]
    except ValueError:
        return "Invalid input: marks must be numeric."
    count=0
    for subject in subjects:
        if(subject!='none'):
            count=count+1
    avg_mark=sum(marks)/count
            
    return render_template('result.html', subjects=subjects, marks=marks, avg_mark=avg_mark, zip=zip_longest)




if __name__ == '__main__':
    app.run(debug=True)
