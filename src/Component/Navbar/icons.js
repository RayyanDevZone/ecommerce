import {RiRefreshLine} from 'react-icons/ri'
import {RiSearchLine} from 'react-icons/ri'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa'
export const iconsmenu = [
    {
        icons:<RiSearchLine/>,
        url:"/"
    },
    {
        icons:<FaRegUser/>,
        url:'/account'
    },
    {
        icons:<FaRegHeart/>,
        url:'/wishlist'
    },
    {
        icons: <RiRefreshLine />,
        url:'/add-products'
    },
    {
        icons:<HiOutlineShoppingCart />,
        url:'/cart'
    }
]
