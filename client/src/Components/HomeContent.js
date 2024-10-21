import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Css/HomeContent.css';
import Slider from 'react-slick';
import { hotels, city, nights } from '../data/hotelsData';
import card from '../assets/icon/card.jpg';
import sales from '../assets/icon/sales.jpg';
import support from '../assets/icon/support.jpg';
import viewer from '../assets//icon/viewer.jpg';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"  }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function HomeContent() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNights, setSelectedNights] = useState(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAdultsChange = (value) => {
    setAdults(Math.max(0, adults + value)); // so luong  se khong am khi nhn - lien tuc
  };

  const handleChildrenChange = (value) => {
    setChildren(Math.max(0, children + value)); // so luong  se khong am khi nhn - lien tuc
  };

  const handleRoomsChange = (value) => {
    setRooms(Math.max(0, rooms + value)); // so luong  se khong am khi nhn - lien tuc
  };

  const images = [
    require('../assets/slideshow1.jpg'),
    require('../assets/slideshow2.jpg'),
    require('../assets/slideshow3.jpg'),
    // require('../assets/ads1.jpg'),
    require('../assets/ads2.jpg'),
    require('../assets/ads3.jpg'),
  ];

  const locationvn = [
    require ('../assets/location/vn/sapa.jpeg'),
    require ('../assets/location/vn/Phan Thiet.jpeg'),
    require ('../assets/location/vn/Nha Trang.jpeg'),
    require ('../assets/location/vn/Phu Quoc.jpeg'),
    require ('../assets/location/vn/Ba ria - Vung Tau.jpeg'),
    require ('../assets/location/vn/Da Lat.jpeg'),
    require ('../assets/location/vn/Ha Noi.jpeg'),
    require ('../assets/location/vn/Da Nang.jpeg'),
    require ('../assets/location/vn/Ho Chi Minh.jpeg'),
  ]

  const locationglobal =[
    require ('../assets/location/global/bali.jpeg'),
    require ('../assets/location/global/bangkok.jpeg'),
    require ('../assets/location/global/chiangmai.jpeg'),
    require ('../assets/location/global/kuala lumpur.jpeg'),
    require ('../assets/location/global/osaka.jpeg'),
    require ('../assets/location/global/phuket.jpeg'),
    require ('../assets/location/global/Seoul.jpeg'),
    require ('../assets/location/global/singapore.jpeg'),
    require ('../assets/location/global/Tokyo.jpeg'),
  ]


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500 ,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className='MainContent'>

      <div className='slideshow-image'>
        <div className='slider'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} />
            </div>
          ))}
        </Slider>
        </div>
      </div>

      <div className='search-container'>
        <h5>Tìm kiếm khách sạn...</h5>

        {/* Chọn thành phố */}
        <div className='search-city'>
          <label className='search-label'>Thành phố: </label>
          <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
            <option value=''>Chọn thành phố</option>
            {city.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Chọn số đêm */}
        <div className='search-nights'>
          <label className='search-label'>Số đêm: </label>
          <select value={selectedNights} onChange={e => setSelectedNights(parseInt(e.target.value))}>
            {nights.map((night, index) => (
              <option key={index} value={index + 1}>{night}</option>
            ))}
          </select>
        </div>

        {/* Dropdown chọn số lượng khách và phòng */}
        <div className='search-dropdown'>
          <label className='search-label'>Khách và Phòng: </label>
          <button className="dropdown-btn" onClick={toggleDropdown}>
            {adults} người lớn, {children} trẻ em, {rooms} phòng
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">

              <div className="item">
                <span>Người lớn</span>
                <div className="counter">
                  <button onClick={() => handleAdultsChange(-1)}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => handleAdultsChange(1)}>+</button>
                </div>
              </div>

              <div className="item">
                <span>Trẻ em</span>
                <div className="counter">
                  <button onClick={() => handleChildrenChange(-1)}>-</button>
                  <span>{children}</span>
                  <button onClick={() => handleChildrenChange(1)}>+</button>
                </div>
              </div>

              <div className="item">
                <span>Phòng</span>
                <div className="counter">
                  <button onClick={() => handleRoomsChange(-1)}>-</button>
                  <span>{rooms}</span>
                  <button onClick={() => handleRoomsChange(1)}>+</button>
                </div>
              </div>
            </div>
          )}
          </div>
          <div className='search-button'>
                <button>Tìm kiếm</button>
          </div>
        </div>
      <div className='promotion-container'>
      <hr />

      <div className='promotion-vn'>
        <h2>Các điểm đến nội địa nổi tiếng</h2>
        <Slider {...settings2}>
        {locationvn.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} />
            </div>
          ))}
      </Slider>
      </div> 
      <hr />

      <div className='promotion-global'>
        <h2>Các điểm đến quốc tế nổi tiếng</h2>
        <Slider {...settings2}>
        {locationglobal.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} />
            </div>
          ))}
      </Slider>
      </div>
      </div>
      <hr />
      <div className='reason-container'>
      <h2>Tại sao nên đặt chỗ tại đây?</h2>
      <div className='reason-ads'>
        <div className='reason'>
          <img src={sales}  alt='sales'/>
          <h2>Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng</h2>
          <p>Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi tuyệt vời!</p>
        </div>
        <div className='reason'>
          <img src={card}  alt='card'/>
          <h2>Phương thức thanh toán an toàn và linh hoạt</h2>
          <p>Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. Không tính phí giao dịch. </p>
        </div>
        <div className='reason'>
          <img src={support}  alt='support'/>
          <h2>Hỗ trợ khách hàng 24/7</h2>
          <p>Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé</p>
        </div>
        <div className='reason'>
          <img src={viewer}  alt='viewer'/>
          <h2>Khách thực, đánh giá thực</h2>
          <p>Hơn 10.000.000 đánh giá, bình chọn đã được xác thực từ du khách sẽ giúp bạn đưa ra lựa chọn đúng đắn. </p>
        </div>

      </div>
      </div>

      

    </div>
  );
}

export default HomeContent;
