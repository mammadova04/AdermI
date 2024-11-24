from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash
from model import User
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
import re


app = Flask(__name__, template_folder="templates")

app.secret_key = 'P3_yuiV90lls(hytQW45'

engine = create_engine("mysql+mysqldb://root:Nahid2005@localhost/login")
Session = sessionmaker(bind=engine)
session_query = Session()


def login_based(function):
    @wraps(function)
    def decorated_function(*args, **kwargs):
        if not session.get('loggedin'):
            flash("You need to log in to access this page.", "warning")
            return redirect(url_for('login'))
        return function(*args, **kwargs)
    return decorated_function


def role_based(required_role):
    def decorator(function):
        @wraps(function)
        def decorated_function(*args, **kwargs):
            if not session.get('loggedin') or session.get('role') != required_role:
                flash("Only admin can access this page", "danger")
                return redirect(url_for("main"))
            return function(*args, **kwargs)
        return decorated_function
    return decorator


@app.route('/admin')
@role_based('admin')
def admin():
    return 'Hello admin'


@app.route('/')
def main():
    return render_template("main.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route('/diseases')
def disease():
    return render_template("diseases.html")


@app.route('/skin-test')
@login_based
def skin_test():
    return render_template("skin-test.html")
    # username=session['username'] don't forget to add it


@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = 'You are on login page'
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']

        account = session_query.query(User).filter_by(email=email).first()
        if account:
            if check_password_hash(account.password, password):
                session['loggedin'] = True
                session['id'] = account.id
                session['username'] = account.username
                session['role'] = account.role
                if session['role'] == 'admin':
                    return redirect(url_for('admin'))
                return redirect('/')
        else:
            msg = 'Incorrect username/password!'
            flash(msg)
    return render_template('login.html', msg=msg)


# Should add logout button (frontend)
@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)

    return redirect(url_for('login'))


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    msg = 'You are on the register page'
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form:
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']

        account = session_query.query(User).filter_by(username=username).first()

        if account:
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers!'
        elif not username or not password or not email:
            msg = 'Please fill out the form!'
        else:
            password = generate_password_hash(password)
            new_user = User(username=username, password=password, email=email)
            session_query.add(new_user)
            session_query.commit()
            flash('You have successfully registered! Please log in.', 'success')
            return redirect('/login')

    return render_template("signup.html", msg=msg)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
