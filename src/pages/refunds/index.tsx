import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RefundsConfigurations from './refundsConfiguration'
import RefundRequest from './refundRequest'
import ApprovedRefunds from './approvedRefunds'

function Refunds() {
  return (
<Routes>
    <Route path='/' element={<RefundsConfigurations/>}/>
    <Route path='/requests' element={<RefundRequest/>}/>
    <Route path='/refunded' element={<ApprovedRefunds/>}/>
</Routes>
  )
}

export default Refunds
