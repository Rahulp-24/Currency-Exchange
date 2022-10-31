import React from 'react'
import { Chip } from 'primereact/chip';
import { Menubar } from 'primereact/menubar';
 

export default function Nabar() {
    // const items=[
    //    { label :'User',
    //     icon:'pi pi-fw pi-user '
    // 
// }
// ]
  return (
    <div>
      <Menubar className='bg-bluegray-700 p-2 text-2xl text-white shadow-6 m-2' 
      start="Welcome to Exchange rate Dashboard "
    //    model={items}
       end={<Chip label="Name" />}/>

    

      
    </div>
  )
}
