import React from 'react'
import DashBoard from '../../Components/DashBoard/DashBoard'
import StudentsTable from '../../Components/StudentsTable/StudentsTable'

export default function StudentDataScreen() {
  return (
    <div>
        <DashBoard />
      <div className='Home_screen_box'>
        <StudentsTable />
      </div>
    </div>
  )
}
