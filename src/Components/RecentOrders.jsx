    import React from 'react'
    import { format } from 'date-fns'
    import { Link } from 'react-router-dom'
    import { getOrderStatus } from '../utils/helpers/getOrderStatus'
    import {recentOrderData} from '../utils/constants/recentOrderData'


    export default function RecentOrders() {
        return (
            <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <strong className="text-gray-700 font-medium">Recent Orders</strong>
                <div className="border-x border-gray-200 rounded-sm mt-3 overflow-auto">
                    <table className="w-full text-gray-700 min-w-max">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="text-left px-4 py-2">ID</th>
                            <th className="text-left px-4 py-2">Product ID</th>
                            <th className="text-left px-4 py-2">Customer Name</th>
                            <th className="text-left px-4 py-2">Order Date</th>
                            <th className="text-left px-4 py-2">Order Total</th>
                            <th className="text-left px-4 py-2">Shipping Address</th>
                            <th className="text-left px-4 py-2">Order Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {recentOrderData.map((order) => (
                                <tr key={order.id}  >
                                    <td className="px-4 py-2">
                                        <Link to={`/order/${order.id}`}>#{order.id}</Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                                    </td>
                                    <td className="px-4 py-2">{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                                    <td className="px-4 py-2">{order.order_total}</td>
                                    <td className="px-4 py-2">{order.shipment_address}</td>
                                    <td className="px-4 py-2">{getOrderStatus(order.current_order_status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
