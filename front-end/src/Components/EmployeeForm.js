import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../Redux/slice';
import { states } from '../Data/States';
import { v4 as uuid } from 'uuid';

function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [department, setDepartment] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [usState, setUsState] = useState('')
    const [zipCode, setZipCode] = useState('')

    const dispatch = useDispatch()

    const saveEmployee = () => {
        if (
            firstName.length < 2 ||
            lastName.length < 2 ||
            department.length < 2 ||
            street.length < 2 ||
            city.length < 2 ||
            usState.length < 2 ||
            birthDate === '' ||
            startDate === '' ||
            zipCode === ''
        ) {
            alert('Please fill all the fields with 2 character minimum.');
            return false;
        }

        dispatch(
            createEmployee({
                id: uuid(),
                firstName: firstName,
                lastName: lastName,
                startDate: startDate,
                department: department,
                birthDate: birthDate,
                street: street,
                city: city,
                usState: usState,
                zipCode: zipCode
            })
        )
        setFirstName(''); setLastName(''); setStartDate(''); setDepartment(''); setBirthDate('')
        setStreet(''); setCity(''); setUsState(''); setZipCode('')
    }

    const stateSelect = document.getElementById('state');

    states.forEach(function (state) {
        const option = document.createElement('option');
        option.value = state.abbreviation;
        option.text = state.name;
        stateSelect.appendChild(option);
    })

    return (

        <div>

            <br /><br />
            <div className="container">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <fieldset className="address">
                        <legend>Infos</legend>
                        <label htmlFor="first-name" >First Name</label>
                        <input id="first-name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        <label htmlFor="last-name">Last Name</label>
                        <input id="last-name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input id="date-of-birth" onChange={(e) => setBirthDate(e.target.value)} type="date" value={birthDate} />
                        <label htmlFor="start-date">Start Date</label>
                        <input id="start-date" onChange={(e) => setStartDate(e.target.value)} type="date" value={startDate} />
                    </fieldset>
                    <fieldset className="address">
                        <legend>Address</legend>
                        <label htmlFor="street" >Street</label>
                        <input id="street" onChange={(e) => setStreet(e.target.value)} value={street} />
                        <label htmlFor="city" >City</label>
                        <input id="city" onChange={(e) => setCity(e.target.value)} value={city} />
                        <label htmlFor="state">State</label>
                        <select name="state" id="state" onChange={(e) => setUsState(e.target.value)} defaultValue={"stateSelect"}>
                        <option value="stateSelect" disabled >Select state</option>
                        </select>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department" onChange={(e) => setDepartment(e.target.value)} defaultValue={"deptSelect"}>
                            <option value="deptSelect" disabled >Select department</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </fieldset>
                </form>
                <button className='btn' onClick={saveEmployee} type="submit">Save</button>
            </div>
        </div>
    );
}

export default Form;