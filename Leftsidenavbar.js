import React from 'react';
import './Leftsidenavbar.css';


export function Leftsidenavbar(props) {
 return (
  
    <>
      <div className='sidebar__row' >
 <props.icon className='sidebarRow__icon' />
   <h6 className='sidebarRow__title' >{props.title}</h6> 
   </div>

  </>
  );
}




// export function Leftsidenavbar({ icon: Icon, title, href, cursor }) {
//   return (
//     <div className='sidebar__row'>
//       <Icon className='sidebarRow__icon' />
//       <a href={href} style={{ cursor: cursor }} className='sidebarRow__title'>
//         {title}
//       </a>
//     </div>
//   );
// }



