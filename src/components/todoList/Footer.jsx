import React from "react";
import ButtonFooter from "./ButtonFooter";
import '../../index.css'

const Footer = ({setTodo, setFilter}) => {
    return (
        <footer className='footer'>
            <ButtonFooter title='Удалить все эллементы' onClick={() => setTodo([])}/>
            <ButtonFooter title='Показать все эллементы' onClick={() => setFilter('all')}/>
            <ButtonFooter title='Законченные дела' onClick={() => setFilter('finish')}/>
            <ButtonFooter title='Незаконченные дела' onClick={() => setFilter('active')}/>
        </footer>
    )
}

export default Footer;