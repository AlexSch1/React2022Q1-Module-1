import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
                <div className="card">
                    <div className="card__status">⭐️</div>
                        <div className="card__picture"

                        >
                            🏡
                        </div>
                        <div className="card__info info">
                            <p className="info__title">Detached house • 5yold</p>
                            <p className="info__price">$750,000</p>
                            <p className="info__address">742 Evergreen Terrace</p>
                        </div>
                        <div className="card__rooms rooms">
                            <div className="rooms__item">
                                <span className="rooms__icon">🛏️</span>

                                <p className="rooms__text"><span className="rooms__count">3</span> Bedrooms</p>
                            </div>
                            <div className="rooms__item">
                                <span className="rooms__icon">🛁</span>
                                <p className="rooms__text"><span className="rooms__count">2</span> Bathrooms</p>
                            </div>
                        </div>
                        <div className="card__realtor realtor">
                            <div className="realtor__title">Realtor</div>
                            <div className="realtor__person-info">
                                <div className="realtor__icon">🕵🏼</div>
                                <div>
                                    <p className="realtor__name">Tiffany Heffner</p>
                                    <p className="realtor__phone">(555) 555-4321</p>
                                </div>
                            </div>
                        </div>
                </div>
    </>
  )
}

export default App


