import styles from './css_profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
<div className="container profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <h2 className={styles.profile}>{username}</h2>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className="stats-item">
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className="stats-item">
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className="stats-item">
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
};

