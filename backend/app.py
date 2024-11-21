from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash
from flask_mysqldb import MySQL
import MySQLdb.cursors
import MySQLdb.cursors, re, hashlib
import bcrypt
app = Flask(__name__)


app.secret_key = 'P3_yuiV90lls(hytQW45'


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Nahid2005'
app.config['MYSQL_DB'] = 'login'


mysql = MySQL(app)


@app.route('/')
def main():
    return render_template("main.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route('/diseases')
def disease():
    return render_template("diseases.html")


@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = 'You are on login page'
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
        account = cursor.fetchone()
        if account:
            if bcrypt.checkpw(password.encode('utf-8'), account['password'].encode('utf-8')):
                session['loggedin'] = True
                session['id'] = account['id']
                session['username'] = account['username']
                return jsonify('Logged in successfully!')
        else:
            msg = 'Incorrect username/password!'
    return render_template('login.html', msg=msg)

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

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = %s', (username,))
        account = cursor.fetchone()

        if account:
            msg = 'Account already exists!'

        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers!'
        elif not username or not password or not email:
            msg = 'Please fill out the form!'
        else:
            hash = password + app.secret_key
            hash = hashlib.sha1(hash.encode())
            password = hash.hexdigest()
            cursor.execute('INSERT INTO accounts VALUES (NULL, %s, %s, %s)', (username, password, email,))
            mysql.connection.commit()
            msg = 'You have successfully registered!'
            flash('You have successfully registered! Please log in.', 'success')
            return redirect('/login')

    return render_template("signup.html", msg=msg)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
