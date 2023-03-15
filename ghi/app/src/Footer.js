import React from 'react';

export default function Footer() {
  return (
    <footer className="p-5 text-center position-relative" style={{ backgroundColor: "#E8E0D1" }}>
      <div className="container">
        <p className="lead">Made by &copy; Shayne Buac</p>
        <p>Credits to:
          <a href='https://maps-generator.com/'> Maps Generator</a>
          <br />
          Illustrations by <a href="https://www.freepik.com/free-vector/autonomous-car-concept-illustration_20891927.htm#query=car&position=22&from_view=author">vectorjuice</a> and <a href="https://www.freepik.com/free-vector/car-showroom-new-auto-dealership-big-room-hall-with-shop-window-glass-showcase_3586128.htm#query=car%20showroom%20illustration&position=13&from_view=search&track=ais">vectorpouch</a> on Freepik
          <br />
          Icons by <a href="https://www.flaticon.com/packs/automotive-dealership" title="saleswoman icons">Flat Icons - Flaticon</a>
        </p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <ion-icon name="arrow-up-circle-outline" size="large"></ion-icon>
        </a>
      </div>
    </footer >
  )
}
