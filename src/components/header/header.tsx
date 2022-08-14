import { memo } from 'react';
import "./header.css";

interface Props {
    title: String
}

const Header = ({ title }: Props) => {
    return <header className='Header'>
        <div className='app--bar'>{title}</div>
    </header>
}

export default memo(Header);