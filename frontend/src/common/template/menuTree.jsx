import React from 'react'

export default props =>(
   <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <li className='fa fa-angle-left pull-right'></li>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
   </li>
)