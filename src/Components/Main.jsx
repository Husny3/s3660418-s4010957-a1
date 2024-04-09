import React from "react";
// import "./Main.css"; // Import CSS file for styling (if needed)

// Introduction component
function Introduction() {
  return (
    <div>
      <h2>Introduction</h2>
      <p>SOIL is a long-term organic food grocer with several store locations around Melbourne. We have been serving the community with premium, organic fresh food for many years.</p>
      <p>In addition to being food grocers, we also offer face-to-face seminars on diet, nutrition, and small-scale organic farming. We believe in providing more than just food; we aim to educate and empower our customers to make healthier choices.</p>
    </div>
  );
}

// Why Go Organic component
function WhyGoOrganic() {
    return (
      <div>
        <h2>Why Go Organic?</h2>
        <p>Choosing organic foods has numerous benefits, not only for your health but also for the environment. Organic foods are free from harmful chemicals, pesticides, and GMOs, making them safer and healthier options for you and your family.</p>
        <h3>Benefits of Going Organic:</h3>
        <ul>
          <li>Organic foods are free from synthetic pesticides and fertilizers, reducing exposure to harmful chemicals.</li>
          <li>Organic farming promotes soil health and biodiversity, contributing to environmental sustainability.</li>
          <li>Organic foods are often higher in nutrients and antioxidants compared to conventionally grown foods.</li>
          <li>Organic farming practices help conserve water and reduce pollution, protecting our natural resources.</li>
          <li>Choosing organic supports small-scale farmers and sustainable agriculture practices.</li>
        </ul>
      </div>
    );
  }
  

// Upcoming Seminars component
function UpcomingSeminars() {
  return (
    <div>
      <h2>Upcoming Seminars</h2>
      <ul>
        <li>
          <strong>Date:</strong> April 22th, 2024<br />
          <strong>Title:</strong> Introduction to Organic Gardening<br />
          <strong>Description:</strong> Let experienced home gardner Mike Kulvenski teach you the basics of organic gardening, including soil preparation, plant selection, and pest management.
        </li>
        <li>
          <strong>Date:</strong> April 29th, 2024<br />
          <strong>Title:</strong> Benefits of Organic Foods<br />
          <strong>Description:</strong> Discover the health benefits of organic foods and how they contribute to overall well-being.
        </li>
        <li>
          <strong>Date:</strong> May 3rd, 2024<br />
          <strong>Title:</strong> Sustainable Food Practices<br />
          <strong>Description:</strong> Explore sustainable food practices and their impact on the environment and community from Environmental Scientist Diana Kopt.
        </li>
      </ul>
    </div>
  );
}

// Main component
function Main() {
  return (
    <div className="main-content">
      <Introduction />
      <WhyGoOrganic />
      <UpcomingSeminars />
    </div>
  );
}

export default Main;