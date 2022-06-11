import React, { useState } from 'react';
import { ContentItems } from '../../../../components/ContentItems';
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Content = () => {
    const [value, setValue] = useState('')
    const [dateCalendar, setDateCalendar] = useState(new Date());
    const [isShowCalendar, setIsShowCalendar] = useState(false)

    const onChangeText = (e) => {
        var lowerCase = e.target.value?.toLowerCase();
        setValue(lowerCase)
    }

    const onShowCalendar = () => {
        setIsShowCalendar(!isShowCalendar)
    }

    const filterData = ContentItems.filter((info) => {
        if (value === '' && isShowCalendar === false) {
            return info
        } else if (isShowCalendar === true) {
            return info.time >= (dateCalendar.getTime() / 1000)
        }
        else {
            return info.description.toLowerCase().includes(value) || info.title.toLowerCase().includes(value)
        }
    })

    return (
        <div className="container">
            <form className='wrapInputContainer'>
                <div className='inputSearch'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' />
                </div>

                <input type="text" name="name" value={value} onChange={onChangeText} placeholder='Search' className='inputContainer' >
                </input>

                <div className='inputCalendar' onClick={onShowCalendar}>
                    <FontAwesomeIcon icon={faCalendar} size='sm' />
                </div>
            </form>

            <div className='wrapCalendarContainer' style={{ display: isShowCalendar ? 'flex' : 'none' }}>
                <Calendar onChange={setDateCalendar} value={dateCalendar} />
            </div>

            {filterData.map(info => {
                const date = new Date(info.time * 1000)
                const hours = date.getHours();
                const minutes = "0" + date.getMinutes();
                const seconds = "0" + date.getSeconds();
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();
                const formattedTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                return (
                    <div className='wrapContentContainer'>
                        <img src={info.imgUrl} style={{ height: 100, width: 100, marginRight: 12 }} />

                        <div>
                            <h4 className='contentTitle'>
                                {info.title}
                            </h4>

                            <p className='contentDescription'>
                                {info.description}
                            </p>

                            {formattedTime}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Content