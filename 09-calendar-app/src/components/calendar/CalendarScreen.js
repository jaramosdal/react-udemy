import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "moment/locale/es";

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-message-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment) // or globalizeLocalizer
const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(), // new Date()
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel'
}]

export const CalendarScreen = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div>
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
            />
        </div>
    )
}