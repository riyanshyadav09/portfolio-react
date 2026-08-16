import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({
  avatarUrl = '/Rampravesh.jpeg',
  name = 'Ram Pravesh Yadav',
  title = 'Software Development Engineer',
  handle = 'rampravesh',
  status = 'Available for Work',
  contactText = 'Contact Me',
  showUserInfo = true,
  enableTilt = true,
  onContactClick
}) => {
  return (
    <div className="pc-card-wrapper">
      <section className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name} avatar`}
              loading="lazy"
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={avatarUrl}
                      alt={`${name} mini avatar`}
                      loading="lazy"
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={onContactClick}
                  type="button"
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;