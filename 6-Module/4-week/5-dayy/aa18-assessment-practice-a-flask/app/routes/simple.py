from flask import Blueprint, render_template, redirect, request
from app.forms import SimpleForm
from app.models import SimplePerson, db

bp = Blueprint('simple', __name__, '')

@bp.route('/')
def main():
    return render_template('main_page.html')

@bp.route('/simple-form', methods=['GET', 'POST'])
def simple_form():
    form = SimpleForm()
    if form.validate_on_submit():
        person = SimplePerson()
        form.populate_obj(person)
        db.session.add(person)
        db.session.commit()
        return redirect('/')
    elif request.method == 'POST':
        return 'Bad Data'
    return render_template('simple_form.html', form=form)

@bp.route('/simple-form-data')
def form_data():
    res = SimplePerson.query.filter(SimplePerson.name.like('M%')).all()
    return render_template('simple_form_data.html', res=res)