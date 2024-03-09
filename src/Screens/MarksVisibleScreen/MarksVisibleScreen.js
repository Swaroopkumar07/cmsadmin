import React from 'react'
import DashBoard from '../../Components/DashBoard/DashBoard'
import MarksVisiblePage from '../../Components/MarksVisiblePage/MarksVisiblePage'

export default function MarksVisibleScreen() {
  return (
    <div>
        <DashBoard/>
        <div>
            <MarksVisiblePage/>
        </div>
    </div>
  )
}
