import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { UserDetles } from '../../App';

const BookingSreemongal = () => {
    const [users, setUsers] = useContext(UserDetles);

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        const newPlace = {...users};
        newPlace.form = data.from;
        newPlace.to = data.to;
        newPlace.place = data.destination;
        newPlace.city = data.origin
        setUsers(newPlace)

        users.isSignin ? navigate('/msree') : navigate('/login')
    };

    console.log(watch("example"));
    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="origin">Origin</label>
                <input className='first__inp_book' defaultValue="Maulvibazar" {...register("origin")} />
                <label htmlFor="destination">Destination</label>
                <input className='secend__inp_book' defaultValue="Sreemangal" {...register("destination")} />
                <span className='__From__To'>
                    <div className='__From__sec'>
                        <label htmlFor="from">from</label>
                        <input type="date" {...register("from")} required />
                    </div>
                    <div className='__To__sec'>
                        <label htmlFor="to">to</label>
                        <input type="date" {...register("to")} required />
                    </div>
                </span>

                <button type='submit'>Click Now</button>
            </form>
        </div>
    );
};

export default BookingSreemongal;