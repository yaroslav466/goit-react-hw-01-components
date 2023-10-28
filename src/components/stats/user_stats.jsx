import styles from './css_stats.module.css';


export const Statistics = ({ title, stats }) => {
    return (
        <section class="container statistics">
    <h2 class="title">{title}</h2>

    <ul class={styles.statistics}>
        {stats.map(({ id, label, percentage }) => {
            return (
                <li class={styles.item} key={id}>
                    <span class={styles.label}>{label}</span>
                    <span class={styles.percentage}>{percentage}</span>
                </li>
            );

        }
        )}
    
            </ul>
        </section>
    );
};