import React from 'react'
import { Link } from 'react-router-dom'

import _logo from '../../assets/images/logo-white.svg'
import _logout from '../../assets/images/logout_icon.svg'
import './styles.scss'

const Layout = ({ children, active }) => {
  function StatusBar (state) {
    if (state === 'home') {
      return 'active'
    } else {
      return 'disabled'
    }
  }
  function StatusBarNew (state) {
    if (state === 'new') {
      return 'active'
    } else {
      return 'disabled'
    }
  }

  function handleLogout () {
    window.sessionStorage.removeItem('myData')
  }

  return (
    <>
      <div className='layout'>
        <div className='layout-menu'>
          <div className='layout-menu__container'>
            <div className='layout-menu__logo'>
              <img src={_logo} alt='Logotipo' />
            </div>
            <div className='layout-menu__accions'>
              <div className={`layout-menu__accions-home-${StatusBar(active)}`}>
                <Link to='/Dashboard'>
                  <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5654 9.83614L11.0239 0.21903C10.9552 0.149598 10.8736 0.0945134 10.7838 0.0569295C10.694 0.0193456 10.5977 0 10.5004 0C10.4032 0 10.3069 0.0193456 10.2171 0.0569295C10.1272 0.0945134 10.0456 0.149598 9.97692 0.21903L0.435491 9.83614C0.157518 10.1165 0 10.4974 0 10.8946C0 11.7194 0.664819 12.39 1.48252 12.39H2.48786V19.2523C2.48786 19.6659 2.81911 20 3.22912 20H9.01791V14.7662H11.6123V20H17.7717C18.1818 20 18.513 19.6659 18.513 19.2523V12.39H19.5183C19.9121 12.39 20.2897 12.2334 20.5677 11.9507C21.1445 11.3666 21.1445 10.4203 20.5654 9.83614Z'
                      fill='#194C85'
                    />
                  </svg>
                </Link>
              </div>
              <div
                className={`layout-menu__accions-newEvent-${StatusBarNew(
                  active
                )}`}
              >
                <Link to='/dashboard/NewEvent'>
                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5.25 0.65625C5.25 0.482202 5.18086 0.315282 5.05779 0.192211C4.93472 0.0691404 4.7678 0 4.59375 0C4.4197 0 4.25278 0.0691404 4.12971 0.192211C4.00664 0.315282 3.9375 0.482202 3.9375 0.65625V1.3125H2.625C1.92881 1.3125 1.26113 1.58906 0.768845 2.08134C0.276562 2.57363 0 3.24131 0 3.9375L0 5.25H21V3.9375C21 3.24131 20.7234 2.57363 20.2312 2.08134C19.7389 1.58906 19.0712 1.3125 18.375 1.3125H17.0625V0.65625C17.0625 0.482202 16.9934 0.315282 16.8703 0.192211C16.7472 0.0691404 16.5803 0 16.4062 0C16.2322 0 16.0653 0.0691404 15.9422 0.192211C15.8191 0.315282 15.75 0.482202 15.75 0.65625V1.3125H5.25V0.65625ZM0 6.5625H21V18.375C21 19.0712 20.7234 19.7389 20.2312 20.2312C19.7389 20.7234 19.0712 21 18.375 21H2.625C1.92881 21 1.26113 20.7234 0.768845 20.2312C0.276562 19.7389 0 19.0712 0 18.375V6.5625ZM11.1562 11.1562C11.1562 10.9822 11.0871 10.8153 10.964 10.6922C10.841 10.5691 10.674 10.5 10.5 10.5C10.326 10.5 10.159 10.5691 10.036 10.6922C9.91289 10.8153 9.84375 10.9822 9.84375 11.1562V13.125H7.875C7.70095 13.125 7.53403 13.1941 7.41096 13.3172C7.28789 13.4403 7.21875 13.6072 7.21875 13.7812C7.21875 13.9553 7.28789 14.1222 7.41096 14.2453C7.53403 14.3684 7.70095 14.4375 7.875 14.4375H9.84375V16.4062C9.84375 16.5803 9.91289 16.7472 10.036 16.8703C10.159 16.9934 10.326 17.0625 10.5 17.0625C10.674 17.0625 10.841 16.9934 10.964 16.8703C11.0871 16.7472 11.1562 16.5803 11.1562 16.4062V14.4375H13.125C13.299 14.4375 13.466 14.3684 13.589 14.2453C13.7121 14.1222 13.7812 13.9553 13.7812 13.7812C13.7812 13.6072 13.7121 13.4403 13.589 13.3172C13.466 13.1941 13.299 13.125 13.125 13.125H11.1562V11.1562Z'
                      fill='#FAFAFA'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='layout-menu__logout'>
              <a href='/' onClick={handleLogout}>
                <button>
                  <img src={_logout} alt='Logotipo' />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='layout-content'>{children}</div>
      </div>
    </>
  )
}

export default Layout
