import React from 'react'
import { Link } from 'react-router-dom'
import '../css/SubMenus.css'

function SubMenus({menus}) {
  return (
    <div className='container-fluid bg-primary bg-gradient'>
        <div className='innerTags'>
          {menus.filter((menu) => menu.IsCustomCategory === true)
          .map(menu =>(
            <Link to={menu.Url} >{menu.Title}</Link>
          ))}
        </div>
    </div>
  )
}

export default SubMenus;