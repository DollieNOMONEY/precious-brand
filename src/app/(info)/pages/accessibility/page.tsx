import React from 'react'
import styles from '../../blog.module.css'

export const metadata = {
  title: 'Accessibility',
  description: "The official website for Precious. Learn more about us."
};

export default function AccessibilityPage() {
  return (
    <div className={styles.blogTitle}>
        <h3 className='mb-5'>{metadata.title}</h3>
          
    </div>
  )
}