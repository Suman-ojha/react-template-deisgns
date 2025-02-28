import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from '../DashboardStatsGrid'
import TransactionChart from '../TransactionChart'
import BuyerProfilePieChart from '../BuyerProfilePieChart'
import RecentOrders from '../RecentOrders'
import PopularProducts from '../PopularProducts'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid/>
      <div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
      <div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
    </div>
    // <div>Dashboard Page <Link to={'/products'}>product page</Link></div>
  )
}

export default Dashboard