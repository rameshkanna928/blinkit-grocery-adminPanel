import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import RefundsConfigurations from './refundsConfiguration'
import RefundRequest from './refundRequest'
import ApprovedRefunds from './approvedRefunds'
import RejectedRefunds from './rejectedRefunds'

function Refunds() {
  return (
<Outlet/>
  )
}

export default Refunds
