import React from 'react';

function SkillBar({ framework, percent }) {
    return (
        <li className='skill-bar-container'>
            <h4>{framework}</h4>
            <div>
                <div className='skill-bar'>
                    <div style={{ width: `${percent}%` }}></div>
                </div>
                <span>{`${percent}%`}</span>
            </div>
        </li>
    );
}

export default SkillBar;